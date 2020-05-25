const express = require('express');

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

// router.get('/:userId', (req, res) => {
//   const { userId } = req.params;
//   db.collection('users').doc(userId).get()
//     .then((user) => {
//       if (!user.exists) throw new Error('User not found');
//       res.status(200).json({ id: user.id, data: user.data() });
//     })
//     .catch((error) => res.status(500).send(error));
// });

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
    const siteVisit = await db.collection('counts').doc('siteVisit').get();
    const siteVisitCount = siteVisit.data();
    const { total = 0 } = siteVisitCount;
    await db.collection('counts').doc('siteVisit').set({ total: total + 1 });
    res.status(200).json(total);
  } catch (error) {
    exceptionHandler(error, res);
  }
});

router.get('/count', async (req, res) => {
  console.log('Get Count');
  try {
    const siteVisit = await db.collection('counts').doc('siteVisit').get();
    const siteVisitCount = siteVisit.data();
    const { total = 0 } = siteVisitCount;
    res.status(200).json(total);
  } catch (error) {
    exceptionHandler(error, res);
  }
});

module.exports = router;
