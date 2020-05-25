const express = require('express');
const os = require('os');
const Api = require('../helpers/api');
const { exceptionHandler } = require('../utils');

const router = express.Router();

router.get('/env', (req, res) => {
  console.log('URI : env');
  const { value } = req.query;
  res.json(value ? process.env[value] : process.env);
});
router.get('/jsonusers', async (req, res) => {
  const uri = 'https://jsonplaceholder.typicode.com/users';
  console.log(`URI : ${uri}`);
  try {
    const resp = await Api.get(uri);
    res.json(resp);
  } catch (error) {
    exceptionHandler(error, res);
  }
});
router.get('/health', (req, res) => {
  console.log('URI : health');
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

module.exports = router;
