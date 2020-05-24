const express = require('express');

const LOG = require('../helpers/logger');
const Api = require('../helpers/api');
const { exceptionHandler } = require('../utils');

const router = express.Router();

router.get('/env', (req, res) => {
  const { value } = req.query;
  res.json(value ? process.env[value] : process.env);
});

router.get('/users', async (req, res) => {
  const uri = 'https://jsonplaceholder.typicode.com/users';
  LOG.info(`URI : ${uri}`);
  try {
    const resp = await Api.get(uri);
    res.json(resp);
  } catch (error) {
    exceptionHandler(error, res);
  }
});

module.exports = router;
