// v1/index.js
const express = require('express');
const UserController = require('../../controllers/user-controller');
const BookingController =require('../../controllers/booking-controller');

const router = express.Router();

router.post('/signup', UserController.create);
router.post('/signin', UserController.signIn);
router.get('/isAuthenticated', UserController.isAuthenticated);

router.post('/booking',BookingController.create);

module.exports = router;
