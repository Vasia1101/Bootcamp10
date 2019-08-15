const express = require("express");
const cors = require("cors");
const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;
const keys = require("../config");
const chalk = require("chalk");

let user = {};

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(user, cb) {
  cb(null, user);
});

passport.use(
  new GitHubStrategy(
    {
      clientID: keys.GITHUB.clientID,
      clientSecret: keys.GITHUB.clientSecret,
      callbackURL: "/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
      console.log(chalk.blue(JSON.stringify(profile)));
      user = { ...profile };
      return cb(null, profile);
    }
  )
);

const app = express();
app.use(cors());
app.use(passport.initialize());
app.get("/auth/github", passport.authenticate("github"));

app.get("/auth/github/callback", passport.authenticate("github"), function(
  req,
  res
) {
  res.redirect("/profile");
});

app.get("/user", (req, res) => {
  res.send(user);
});

app.get("/auth/logout", (req, res) => {
  user = {};
  res.redirect("/");
});
const PORT = 5000;
app.listen(PORT);
