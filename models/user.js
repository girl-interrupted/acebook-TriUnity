var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
<<<<<<< HEAD
  password: { type: String, required: true, minlength: 4 }
});
UserSchema.plugin(uniqueValidator, {message: 'this username is already taken, choose another one'});
=======
  password: { type: String, required: true }
});
UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});
>>>>>>> de5d5c4faf718148a900da2fbf0e0d0211d09814

var User = mongoose.model('User', UserSchema);


module.exports = User;

//match: [/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/, 'password is invalid']