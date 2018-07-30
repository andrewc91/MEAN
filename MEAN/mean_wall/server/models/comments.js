var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Please do not enter blank comment'],
    minlength: [3, 'Comment must be at least three characters']
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  _message: {
    type: Schema.Types.ObjectId,
    ref: 'Message'
  }
}, {
  timestamps: true
});

mongoose.model('Comment', CommentSchema);
console.log("Comment Model good");
