var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
  return {

    create: function(req, res){
      // console.log(req.body);
      var user = new User(req.body);
      user.save(function(err, user){
        if (err){
          res.json(err);
        }
        else {
          req.session.user = user;
          req.session.save();
          res.json(user);
        }
      })
    },

    checkSession: function(req, res){
      if (!req.session.user){
        return res.send(null);
      }
      res.json(req.session.user);
    },

    login: function(req, res){
      if (req.body.name){
        User.findOne({name: req.body.name}, function(err, user){
          if (!user){
            res.json({status: false, errors: "No name match"});
          }
          else {
            req.session.user = user;
            req.session.save();
            res.json(user);
          }
        })
      }
      else {
        res.json({status: false, errors: "Do not leave blank!"});
      }
    },

    logout: function(req, res){
      req.session.destroy();
      res.redirect('/');
    }

  }
})();
