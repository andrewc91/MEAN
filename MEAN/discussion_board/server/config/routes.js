var user = require('./../controllers/users.js');
var topic = require('./../controllers/topics.js');
var message = require('./../controllers/messages.js');

module.exports = function(app){
  app.post('/create', function(req, res){
    user.create(req, res);
  })

  app.post('/login', function(req, res){
    user.login(req, res);
  })

  app.get('/logout', function(req, res){
    user.logout(req, res);
  })

  app.get('/checkSession', function(req, res){
    user.checkSession(req, res);
  })

  app.post('/createTopic', function(req, res){
    topic.createTopic(req, res);
  })

  app.get('/index', function(req, res){
    topic.index(req, res);
  })

  app.get('/getUser/:id', function(req, res){
    topic.getUser(req, res);
  })

  app.post('/createPost', function(req, res){
    message.createPost(req, res);
  })

  app.get('/getPosts/:id', function(req, res){
    message.getPosts(req, res);
  })

  app.post('/createComment/:id', function(req, res){
    message.createComment(req, res);
  })
}
