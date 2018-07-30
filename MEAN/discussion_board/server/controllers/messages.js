var mongoose = require('mongoose');
var User = mongoose.model('User');
var Topic = mongoose.model('Topic');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

module.exports = (function(){
  return {
    createPost: function(req, res){
      User.findOne({_id: req.body._user}, function(err, user){
        if (err){
          res.json(err);
        }
        else {
          Topic.findOne({_id: req.body._topic}, function(err, topic){
            if (err){
              res.json(err);
            }
            else {
              var post = new Post(req.body)
              post.save(function(err){
                user.posts.push(post);
                user.save(function(err){
                  if (err){
                    res.json(err);
                  }
                  else {
                    topic.posts.push(post);
                    topic.save(function(err){
                      if (err){
                        res.json(err);
                      }
                      else {
                        res.json(post);
                      }
                    })
                  }
                })
              })
            }
          })
        }
      })
    },

    getPosts: function(req ,res){
      Topic.findOne({_id: req.params.id}).populate([{path: '_user'}, {path: 'posts', populate: {path: '_user'}}]).exec(function(err, posts){
        if (err){
          res.json(err);
        }
        else {
          // console.log(posts);
          res.json(posts);
        }
      })
    },

    createComment: function(req, res){
      User.findOne({_id: req.session.user._id}, function(err, user){
        if (err){
          res.json(err);
        }
        Post.findOne({_id: req.body._post}, function(err, post){
          if (err){
            res.json(err);
          }
          var comment = new Comment(req.body);
          comment._user = user._id;
          comment.save(function(err, comment){
            if (err){
              res.json(err);
            }
            user.comments.push(comment);
            user.save(function(err, user){
              if (err){
                res.json(err);
              }
              post.comments.push(comment);
              post.save(function(err, post){
                if (err){
                  res.json(err);
                }
                res.json(comment);
              })
            })
          })
        })
      })
    }

  }
})();
