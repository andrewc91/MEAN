var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new mongoose.Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  topic: {
    type: String,
    required: [true, 'Please do not leave topic blank'],
    minlength: [2, 'Topic must be at least 2 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please do not leave description blank'],
    minlength: [5, 'Description must be at least 5 characters'],
  },
  category: {
    type: String,
    required: [true, 'Please select a category'],
  },
}, {
  timestamps: true
});

mongoose.model('Topic', TopicSchema);

console.log('Topic model good');
