const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
app.use(express.static(__dirname + '/client/dist/'));
const config = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log('Could NOT connect to the Database');
  }
  else {
    console.log('Connected to the Database');
  }
})

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080, () => {
  console.log('Listening on Port 8080.');
});
