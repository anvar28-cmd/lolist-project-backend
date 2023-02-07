const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const knex = require("knex")(require("../knexfile"));

require("dotenv").config();

const app = express();
const port = process.env.PORT ?? 8080;
const secret = process.env.SECRET_KEY ?? "secret123";

app.use(cors());
app.use(express.json());





app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
  });