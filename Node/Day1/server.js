// let user = require('./user')

// let vasya = new user.User("Vasia");
// let petya = new user.User("Petya");

// vasya.hello(petya);

let http = require('http');
let server = new http.Server();

server.listen(1337, '127.0.0.1');

let counter = 0;
server.on('request', function (req, res) {
    res.end('Hai Nazar' + ++counter)
});