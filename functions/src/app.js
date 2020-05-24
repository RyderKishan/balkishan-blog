const express = require('express');
const os = require('os');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const routes = require('./routes');
const Logger = require('./helpers/logger');

const app = express();

// app.get('/getusers', async (req, res) => {
//   try {
//     db.collection('users').get()
//       .then((snapshot) => {
//         snapshot.forEach((doc) => {
//           console.log(doc.id, '=>', doc.data());
//         });
//       })
//       .catch((err) => {
//         console.log('Error getting documents', err);
//       });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

app.use((req, res, next) => {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
});
app.use(morgan('dev'));
app.use(bodyParser.json());

routes.bind(app);

app.get('/ping', (req, res) => {
  Logger.info('URI : Local');
  res.send('PONG');
});

app.get('/health', (req, res) => {
  res.status(200).json({
    containerName: os.hostname(),
    timeStamp: new Date(),
    arch: os.arch(),
    cpus: os.cpus(),
    freemem: `${os.freemem()} Bytes`,
    platform: os.platform(),
    release: os.release(),
    totalmem: `${os.totalmem()} Bytes`,
    type: os.type(),
    uptime: `${Math.ceil(os.uptime() / 60)} Minutes`,
    version: os.version,
  });
});

module.exports = app;
