const mongoose = require('mongoose')
const config = require('./../config/serve.config')

// mongo config
const _dbFullURL = config.dbURL + config.dbName;
const _dbOptions = {
    useNewUrlParser: true,
    useCreateIndex: true
}
// db connection function
mongoose.connect(_dbFullURL,_dbOptions);