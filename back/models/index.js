
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://andrey:1q2w3e4r@cluster0.4blm7.mongodb.net/appDB?retryWrites=true&w=majority',{
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:true
});
mongoose.set('debug', true);
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");