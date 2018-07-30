var user = require('./../controllers/users.js');
var wall = require('./../controllers/wall.js');

module.exports = function(app){
  app.post('/create', function(req, res){
    user.create(req, res);
  })

  app.get('/logout', function(req, res){
    user.logout(req, res);
  })

  app.get('/checkSession', function(req, res){
    user.checkSession(req, res);
  })

  app.post('/login', function(req, res){
    user.login(req, res);
  })

  app.post('/createMessage', function(req, res){
    wall.createMessage(req, res);
  })

  app.get('/index', function(req, res){
    wall.index(req, res);
  })

  app.post('/createComment/:id', function(req, res){
    wall.createComment(req, res);
  })
}
