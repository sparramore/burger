var connection = require("../config/connection.js");

var orm = {
    all: function(input, cb) {
      var queryString = "SELECT * FROM " + input + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(input,cb)
    {
        console.log(input);
        var queryString = "INSERT INTO burgers (burger_name, eaten) VALUES (?,false)";
        connection.query(queryString,input, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });

    },
    updateOne: function(input, name, condition, cb)
    {

        //update: function(table, objColVals, condition, cb) {
            var queryString = "UPDATE burgers";
            queryString += " SET ";
            queryString += "eaten = 1";
            queryString += " WHERE ";
            queryString += condition;
            console.log(queryString);
            connection.query(queryString,input , function(err, result) {
                if (err) {
                  throw err;
                }
                console.log(result);
                cb(result);
              });
    }
}

module.exports = orm;
