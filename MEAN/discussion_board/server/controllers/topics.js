var mongoose = require('mongoose');
var User = mongoose.model('User');
var Topic = mongoose.model('Topic');


module.exports = (function(){
  return {
    createTopic: function(req, res){
      User.findOne({_id: req.body._user}, function(err, user){
        if (err){
          res.json(err);
        }
        var topic = new Topic(req.body);
        topic.save(function(err, topic){
          if (err){
            res.json(err);
          }
          user.topics.push(topic);
          user.save(function(err, user){
            if (err){
              res.json(err);
            }
            res.json(user);
          })
        })
      })
    },

    index: function(req, res){
      Topic.find({}).populate('_user').exec(function(err, topics){
        if (err){
          res.json(err);
        }
        else {
          res.json(topics);
        }
      })
    },

    getUser: function(req, res){
      User.findOne({_id: req.params.id}, function(err, user){
        if (err){
          res.json(err)
        }
        else {
          res.json(user);
        }
      })
    }
  }
})();
