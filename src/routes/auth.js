const express = require('express');

const authController = require('../controllers/auth');

const auth = app => {
  const router = express.Router();

  router.post('/register', authController.register);
  router.post('/login', authController.login);
  router.post('/forgot-password', authController.forgotPassword);
  router.post('/reset-password', authController.resetPassword);

  app.use('/auth', router);
};

module.exports = auth;
