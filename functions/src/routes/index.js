const restapi = require('./restapi');
const users = require('./users');

exports.mergeRouter = (app) => {
  app.use('/restapi', restapi);
  app.use('/users', users);
};
