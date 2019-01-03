// Inside burger.js, import orm.js into burger.js
var orm = require("../config/orm.js");

var burger = {
    // Display all burgers in the db
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    // Add new burger
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    // Burger's eaten
    updateOne: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res);
        });
    },
    // Delete a burger from db
    deleteOne: function(condition, cb){
        orm.deleteOne("burgers", condition, function(res){
            cb(res);
        })
    }
};

// Export the db functions for the burgers_controller.js
module.exports = burger;