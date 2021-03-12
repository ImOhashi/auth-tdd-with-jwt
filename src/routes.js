const routes = require("express").Router();

const { User } = require("./models/");

User.create({ name: "Leonardo", email: "teste@teste", password_hash: "teste" });

module.exports = routes;
