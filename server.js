const express = require("express");
const helmet = require("helmet");
const recipesRouters = require("./data/routers/recipe-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/recipes", recipesRouters);

module.exports = server;