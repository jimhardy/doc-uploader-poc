require('dotenv').config();
const express = require('express');
const cloudinary = require('cloudinary');
const formData = require('express-form-data');

const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

app.post('/uploader', (req, res) => {
  console.log(req);
});

// start server
app.listen(process.env.PORT, process.env.IP, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`server started on ${process.env.PORT}`);
  }
});
