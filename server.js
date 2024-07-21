const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
mongoose.connect("your_mongodb_connection_string", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
// Models
const User = require("./models/User");
const Job = require("./models/Job");
// Routes
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  await user.save();
  res.send(user);
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    res.send(user);
  } else {
    res.status(400).send("Invalid credentials");
  }
});
app.post("/jobs", async (req, res) => {
  const { title, description } = req.body;
  const job = new Job({ title, description });
  await job.save();
  res.send(job);
});
app.put("/profile", async (req, res) => {
  const { email, profile } = req.body;
  const user = await User.findOneAndUpdate(
    { email },
    { profile },
    { new: true }
  );
  res.send(user);
});
