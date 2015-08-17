/**
 * Module dependencies.
 */
var apiroute = require('koa-router')(),
    common = require('koa-common'),
    koa = require('koa'),
    swig  = require('swig'),
    monk = require('monk'),
    React = require('react'),
    Router = require('react-router'),
    Config = require('./config'),
    apiController = require('./api/Controllers'),
    approutes = require('./app/routes');

var app = koa();

// sessions
var session = require('koa-generic-session');
app.keys = [Config.sessionSecret];
app.use(session());

// middleware
app.use(common.logger('dev'));

// static middleware
app.use(common.static(__dirname + '/static'));

//authentication
// require('./api/Auth');
// var passport = require('koa-passport');
// app.use(passport.initialize());
// app.use(passport.session());


//route middleware
// apiroute.post('/api/login',
//     passport.authenticate('local',{
//         successRedirect: '/',
//         failureRedirect: '/login'
//     })
// );
// apiroute.post('/logout', function*(next){
//     this.logout();
//     this.redirect('/');
// });
apiroute.get('/api/communities', apiController.getcommunities);
apiroute.post('/api/community/add', apiController.addcommunity);
apiroute.delete('/api/community/:communityid', apiController.removecommunity);
apiroute.get('/api/community/:communityid', apiController.getcommunityinfo);
apiroute.post('/api/url/add', apiController.addurl);
app.use(apiroute.routes()).use(apiroute.allowedMethods());

// Require authentication for now
app.use(function*(next) {
    yield next;
  // if (this.isAuthenticated()) {
  //   yield next;
  // } else {
  //   this.redirect('/');
  // }
});


app.use( function *(next) {
  
  Router.run(approutes, this.request.path, (Handler) => {
    var html = React.renderToString(React.createElement(Handler));
    var page = swig.renderFile('app/layouts/index.html', { html: html });
    this.body = page;
  });
  
});

// http server listening
app.listen(3000);
console.log('listening on port 3000');