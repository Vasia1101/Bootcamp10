const phrases = require("./ua");

function User(name) {
    this.name = name;
}
User.prototype.hello = function (who) {
    console.log(phrases.Hello + ", " + who.name);
};

console.log("user.js is require!");

exports.User = User;