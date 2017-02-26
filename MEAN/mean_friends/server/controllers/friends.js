var mongoose = require('mongoose');
var Friend = mongoose.model('Friend')

module.exports = (function(){
  return {
    create: function(req, res){
      var friend = new Friend(req.body);
      friend.save(function(err, friend){
        if (err){
          res.json(err);
        }
        else {
          // console.log(friend);
          res.json(friend);
        }
      })
    },

    index: function(req, res){
      Friend.find({}, function(err, data){
        if (err){
          res.json(err)
        }
        else {
          res.json(data);
        }
      })
    },

    show: function(req, res){
      // console.log(req.params.id);
      Friend.findOne({_id:req.params.id}, function(err, data){
        res.json(data);
      })
    },

    delete: function(req, res){
      // console.log(req.params.id);
      Friend.findOneAndRemove({_id: req.params.id}, function(err, data){
        res.json(data);
        // console.log(data);
      })
    },

    update: function(req , res){
      console.log(req.params.id);
      console.log(req.body);
      Friend.findOneAndUpdate({_id: req.params.id}, req.body, function(err, data){
        res.json(data);
      })
    }
  }
})();
