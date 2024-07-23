const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const path = require('path');

const port = process.env.PORT || 4000;

const env = process.env.NODE_ENV || 'production';
if (env === 'development'){
  mongoose.connect('mongodb://localhost:27017/wonderai', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
else{
  mongoose.connect('mongodb+srv://morganweber0316:PrhNQixJOm3iGgv4@cluster0.qt3gk4t.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

app.use(express.json());

app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// Models
const User = require("./models/User");
const Job = require("./models/Job");
// Routes
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  console.log(email + password);
  const user = new User({ email, password });
  try{
    await user.save();
  }
  catch{e => {
    console.log(e);
  }}
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
  
  try{
    await job.save();
  }
  catch{e => {
    console.log(e);
  }}
 
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
