var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
  return {
    register: function(req, res){
      // console.log(req.body);
      var user = new User(req.body);
      user.save(function(err, user){
        if (err){
          // console.log(err);
          res.json(err);
        }
        // console.log(user);
        req.session.user = user;
        req.session.save();
        // console.log(req.session);
        res.json(user);
      })
    },

    logout: function(req, res){
      req.session.destroy();
      res.redirect('/');
    },

    checkSession: function(req, res){
      if (!req.session.user){
        return res.send(null);
      }
      res.json(req.session.user);
    },

    login: function(req, res){
      if (req.body.email){
        User.findOne({email: req.body.email}, function(err, user){
          if (err){
            res.json(err);
          }
          else {
            if (user.validatePassword(req.body.password)){
              req.session.user = user;
              req.session.save();
              res.json(user);
            }
            else {
              res.json({status: false, errors: "Incorrect email or password"})
            }
          }
        })
      }
      else {
        res.json({status: false, errors: "Must provide Email"})
      }
    }

  }
})();
