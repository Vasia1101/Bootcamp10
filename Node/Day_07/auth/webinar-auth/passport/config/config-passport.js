const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const config = require('./config');
const mongoose = require('mongoose');
const User = mongoose.model('user');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    done(null, id);
  } else {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  }
});

passport.use(
  new LocalStrategy(
    { usernameField: 'email', passReqToCallback: true },
    function(req, email, password, done) {
      User.findOne({ email })
        .then(user => {
          if (!user) {
            return done(
              null,
              false,
              req.flash('message', 'Incorrect username.')
            );
          }
          if (!user.validPassword(password)) {
            return done(
              null,
              false,
              req.flash('message', 'Incorrect password')
            );
          }
          return done(null, user);
        })
        .catch(err => done(err));
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: config.github.clientID,
      clientSecret: config.github.clientSecret,
      callbackURL: config.github.callbackURL,
    },
    function(accessToken, refreshToken, profile, done) {
      console.log('profile: ' + JSON.stringify(profile.displayName));
      // Create user in  or search in DB
      //return done(null, user);
      return done(null, profile);
    }
  )
);
