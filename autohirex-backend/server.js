require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express()
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => 
res.send("AutoHireX is running...."));

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));