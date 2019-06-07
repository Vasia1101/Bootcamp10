const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('user');
const uuidv4 = require('uuid/v4');

module.exports.token = (req, res, next) => {
  const token = req.cookies.token;
  if (!!token && !req.isAuthenticated()) {
    User.findOne({ token }).then(user => {
      if (user) {
        req.logIn(user, err => {
          if (err) next(err);
        });
      }
      next();
    });
  } else {
    next();
  }
};

module.exports.index = (req, res, next) => {
  res.render('pages/index', {
    title: 'My passport',
    user: req.user,
    message: req.flash('message'),
  });
};

module.exports.login = (req, res, next) => {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect('/');
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      if (req.body.remember) {
        const token = uuidv4();
        user.setToken(token);
        user.save().then(user => {
          res.cookie('token', token, {
            maxAge: 7 * 60 * 60 * 1000,
            path: '/',
            httpOnly: true,
          });
          return res.redirect('/profile');
        });
      } else {
        return res.redirect('/profile');
      }
    });
  })(req, res, next);
};

module.exports.reg = (req, res, next) => {
  res.render('pages/registration', {
    title: 'Registration',
    message: req.flash('message'),
  });
};

module.exports.registration = (req, res, next) => {
  const { email, password, nick } = req.body;
  User.findOne({ email }).then(user => {
    if (user) {
      req.flash('message', 'Пользователь с таким логином уже существует');
      res.redirect('/registration');
    } else {
      const newUser = new User();
      newUser.email = email;
      newUser.setPassword(password);
      newUser.nick = nick;
      newUser
        .save()
        .then(user => {
          req.logIn(user, err => {
            if (err) next(err);
            req.flash('message', 'User create');
            return res.redirect('/profile');
          });
        })
        .catch(next);
    }
  });
};

module.exports.profile = function(req, res) {
  res.render('pages/profile', {
    user: req.user,
    message: req.flash('message'),
  });
};

module.exports.logout = async (req, res) => {
  await req.logout();
  res.clearCookie('token');
  req.flash('message', 'User logout');
  res.redirect('/registration');
};

module.exports.git = function(req, res) {
  res.redirect('/profile');
};
