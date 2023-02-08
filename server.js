const express = require("express");
const cors = require("cors");


require("dotenv").config();

const app = express();
const port = process.env.PORT ?? 8080;

const login = require('./routes/login')
const signup = require('./routes/signup')
const profile = require('./routes/profile')

app.use(cors());
app.use(express.json());

app.use('/login', login)
app.use('/signup', signup)
app.use('/profile', profile)



app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
  });