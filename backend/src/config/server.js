const port = 4004;
const bodyParser = require("body-parser");
const express = require("express");
const server = express();
const allowCors = require("./cors");
const queryParser = require("express-query-int"); //usado para paginacao

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParser()); //usado para paginacao

server.listen(port, function() {
  console.log(`BACKEND IS RUNNING ON PORT ${port}`);
});

module.exports = server;
