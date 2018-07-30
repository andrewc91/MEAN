var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  text: {
    type: String,
    required: [true, 'Can not be blank'],
    minlength: [3, 'Message must be at least three characters']
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
},{
  timestamps: true
});

mongoose.model('Message', MessageSchema);
console.log("Message Model good")
