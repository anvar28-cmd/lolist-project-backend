const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT ?? 8080;

const login = require('./routes/login')
const signup = require('./routes/signup')
const profile = require('./routes/profile')
const hero = require('./routes/hero')
const item = require('./routes/item')
const spell = require('./routes/spell')
const build = require('./routes/build')
const champion = require('./routes/champion')

app.use(cors());
app.use(express.json());

app.use('/login', login)
app.use('/signup', signup)
app.use('/profile', profile)
app.use('/hero', hero)
app.use('/item', item)
app.use('/spell', spell)
app.use('/build', build)
app.use('/champion', champion)


app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
  });