const express = require('express');
const router = express.Router();
const passport = require('passport');
const controllers = require('../controllers');

const isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('message', 'Зарегистрируйтесь или войдите в профиль');
  res.redirect('/');
};

router.all('*', controllers.token);

router.get('/', controllers.index);
router.post('/login', controllers.login);

router.get('/profile', isAuthenticated, controllers.profile);

router.get('/registration', controllers.reg);
router.post('/registration', controllers.registration);

router.get('/logout', controllers.logout);

router.get('/github', passport.authenticate('github'));

router.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  controllers.git
);

module.exports = router;
