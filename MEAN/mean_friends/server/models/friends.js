var mongoose = require('mongoose');
var FriendSchema = new mongoose.Schema({
  fName: String,
  lName: String,
  birthday: Date
})

mongoose.model('Friend', FriendSchema);
console.log("Friend model running");
