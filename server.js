const express = require("express");
const mongoose = require("mongoose");
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;
const server = http.createServer(app);
const io = socketIo(server);
require('dotenv').config();

const env = process.env.NODE_ENV || 'production';
let connectionString = '';

if (env === 'production') {
  connectionString = 'mongodb+srv://morganweber0316:PrhNQixJOm3iGgv4@cluster0.qt3gk4t.mongodb.net/?retryWrites=true&w=majority';
} else {
  connectionString = 'mongodb://localhost:27017/wonderai';
}

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());

// Models
const User = require("./models/User");
const Job = require("./models/Job");

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  console.log(email + password);
  const user = new User({ email, password });
  try {
    await user.save();
  } catch (e) {
    console.log(e);
  }
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

  try {
    await job.save();
  } catch (e) {
    console.log(e);
  }

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

// WebSocket setup
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('chat message', (msg) => {
    console.log(msg);
    io.emit('chat message', msg);
  });

});

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
