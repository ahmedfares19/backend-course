const mongoose = require('mongoose')
const _dbURL = 'mongodb://127.0.0.1:27017/playerDB';
const _dbOptions = {
    useNewUrlParser: true,
    useCreateIndex: true
}
mongoose.connect(_dbURL,_dbOptions);