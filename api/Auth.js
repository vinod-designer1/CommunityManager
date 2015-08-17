var passport = require('koa-passport'),
    Config = require('../config'),
    monk = require('monk');

var db = monk(Config.db);

var user = { id: 1, username: 'test' };

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  done(null, user);
});

var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(function(username, password, done) {
  // retrieve user ...
  var users = db.get('users');
  var user = users.findOne({username: username});
  if (user && user.username === username && user.password === password) {
    done(null, user);
  } else {
    done(null, false);
  }
}));

