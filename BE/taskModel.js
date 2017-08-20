const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://nodetest:qwerty123456@ds145293.mlab.com:45293/heroku_qwd9lgbh', {
    useMongoClient: true
});

console.log('mongodb connection [OK]');

let schema = new mongoose.Schema({
    userId: String,
    createDate: String,
    text: String
});

let taskModel = mongoose.model('Task', schema);

module.exports = taskModel;