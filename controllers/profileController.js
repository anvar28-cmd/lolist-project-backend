const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY ?? "secret123";

exports.index = [checkJwt, async (req, res) => {
  console.log(req.payload)
    const {username} = req.payload;

  //get the prfile data from the database using the username (primary key)
  const profileData = await knex("users").where({ username }).first();

  //sent the profile data back to the frontend
  res.json(profileData);
}];



function checkJwt(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
  
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(403).send("token not valid");
      } else {
        console.log(token)
        req.payload = decoded;
      }
    });
  
    next();
  }