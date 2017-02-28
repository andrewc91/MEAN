var user = require('./../controllers/users.js');

module.exports = function(app){
  app.post('/register', function(req, res){
    user.register(req, res);
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
}
