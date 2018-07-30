var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Please do not leave post blank"],
    minlength: [3, "Post must be at least 3 characters"]
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  _topic: {
    type: Schema.Types.ObjectId,
    ref: 'Topic'
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],
}, {
  timestamps: true
});

mongoose.model('Post', PostSchema);

console.log('Post model good');
