const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    from_email: String,
    to_email: String,
    message: String,
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // This will automatically add createdAt and updatedAt fields
  }
);

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
