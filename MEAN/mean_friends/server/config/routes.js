var friend = require('./../controllers/friends.js')

module.exports = function(app){

  app.post('/friends/create', function(req, res){
    friend.create(req, res);
  })

  app.get('/friends/index', function(req, res){
    friend.index(req, res);
  })

  app.get('/friends/show/:id', function(req, res){
    friend.show(req, res);
  })

  app.post('/friends/delete/:id', function(req, res){
    friend.delete(req, res);
  })

  app.post('/friends/edit/:id', function(req, res){
    friend.update(req, res);
  })

}
