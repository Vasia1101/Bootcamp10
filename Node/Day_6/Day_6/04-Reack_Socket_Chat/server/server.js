const mongoose = require('mongoose');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const Message = require('./model/schema');
const cors = require('cors');



const io = require('socket.io')(server, {
    path: '/chat/',
    origins: '*:*'
});

const Port = process.env.Port || 8080;
app.use(cors());
app.options('*', cors());

mongoose.Promise = global.Promise;
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.connect('mongodb+srv://user:321@cluster0-vvpdj.mongodb.net/test?retryWrites=true');

let online = 0;
io.on('connect', socket => {
    console.log('User connect');
    ++online;
    const allMessages = Message.find();
    socket.broadcast.emit('all=messages', allMessages);
    socket.broadcast.emit('change-online', online);
    socket.on('message', message => {
        console.log(message);
        client.broadcast.emit("new-message", message);

        const newMessage = Message(message)
        console.log(newMessage);
        newMessage.save();

        // Message.create(message, err => {
        //     if (err) console.error(err);
        //     socket.broadcast.emit('new-message', message)
        // })
    })
    socket.on('disconnect', () => {
        --online;
        socket.broadcast.emit('change-online', online);
    })
});
server.listen(Port, () => console.log(`server is running on port ${Port}`));