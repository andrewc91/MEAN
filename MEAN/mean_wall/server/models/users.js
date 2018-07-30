var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Must input name'],
    minlength: [3, 'Name must be at least three characters'],
    unique: true
  },
  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Message'
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
}, {
  timestamps: true
});

mongoose.model('User', UserSchema);

console.log("User Model good");
