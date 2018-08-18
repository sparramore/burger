// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(name, cb) {
      console.log("NAME: " + name);
    orm.insertOne(name, function(res) {
      cb(res);
    });
  },
  update: function(name, condition, cb) {
    orm.updateOne("burgers", name, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burger.js).
module.exports = burger;
