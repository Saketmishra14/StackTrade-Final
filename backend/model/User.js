const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const passportLocalMongoose=require("passport-local-mongoose");


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
});

//
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);