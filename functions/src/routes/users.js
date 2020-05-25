const express = require('express');
const { v4: uuid } = require('uuid');

const firebase = require('../firebase');
const { exceptionHandler } = require('../utils');

const router = express.Router();
const db = firebase.firestore();

router.post('/add', async (req, res) => {
  console.log('Add User');
  const { body } = req;
  try {
    const docRef = db.collection('users').doc(`A${Math.random()}A`);
    const setBody = docRef.set(body);
    res.status(200).json(setBody);
  } catch (error) {
    exceptionHandler(error, res);
  }
});

router.get('/getall', async (req, res) => {
  console.log('Get All Users');
  const users = [];
  try {
    const results = await db.collection('users').get();
    results.forEach((doc) => {
      users.push(doc.data());
    });
    res.status(200).json(users);
  } catch (error) {
    exceptionHandler(error, res);
  }
});

router.get('/visit', async (req, res) => {
  console.log('Visit Update');
  try {
    await db.collection('siteVisits').doc(new Date().toISOString()).set({
      userAgent: req.headers['user-agent'],
      uuid: uuid(),
    });
    const siteVisits = await db.collection('siteVisits').get();
    const siteVisitsCount = siteVisits.size;
    res.status(200).json(siteVisitsCount);
  } catch (error) {
    exceptionHandler(error, res);
  }
});

router.get('/count', async (req, res) => {
  console.log('Get Count');
  try {
    const siteVisits = await db.collection('siteVisits').get();
    const siteVisitsCount = siteVisits.size;
    res.status(200).json(siteVisitsCount);
  } catch (error) {
    exceptionHandler(error, res);
  }
});

module.exports = router;
