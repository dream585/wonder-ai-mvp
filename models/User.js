const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: String,
  profile: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
