var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'First name is required'],
    minlength: [2, 'First name must be at least two characters']
  },
  last_name: {
    type: String,
    required: [true, 'Last name is required'],
    minlength: [2, 'Last name must be at least two characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters']
  }
}, {
  timestamps: true
});

UserSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

UserSchema.pre('save', function(done){
  this.password = this.generateHash(this.password);
  done();
})

UserSchema.methods.validatePassword = function(password){
  return bcrypt.compareSync(password, this.password)
}

mongoose.model('User', UserSchema);

console.log('Friend model running');
