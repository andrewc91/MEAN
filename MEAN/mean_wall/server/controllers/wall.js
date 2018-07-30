var mongoose = require('mongoose');
var User = mongoose.model('User');
var Message= mongoose.model('Message');
var Comment = mongoose.model('Comment');

module.exports = (function(){
  return {

    index: function(req, res){
      Message.find({}).populate([{path: '_user'}, {path: 'comments', populate: {path: '_user'}}]).exec(function(err, message){
        if (err){
          res.json(err);
        }
        else {
          // console.log(message);
          res.json(message);
        }
      })
    },



    createMessage: function(req, res){
      // console.log(req);
      User.findOne({_id: req.session.user._id}, function(err, user){
        if (err){
          res.json(err)
        }
        else {
          var message = new Message(req.body);
          message._user = user._id;
          message.save(function(err){
            user.messages.push(message);
            user.save(function(err, user){
              // console.log(user);
              if (err){
                res.json(err);
              }
              else {
                res.json(user);
              }
            })
          })
        }
      })
    },

    createComment: function(req, res){
      User.findOne({_id: req.session.user._id}, function(err, user){
        Message.findOne({_id: req.params.id}, function(err, message){
          var comment = new Comment({text: req.body.text});
          console.log(comment);
          comment._message = message._id;
          comment._user = user._id;
          comment.save(function(err){
            message.comments.push(comment);
            message.save(function(err){
              user.comments.push(comment);
              user.save(function(err){
                if (err){
                  res.json(err);
                }
                else {
                  console.log(user)
                  res.json(user);
                }
              })
            })
          })
        })
      })
    }




  }
})();
