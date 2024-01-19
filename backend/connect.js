const mongoose = require('mongoose')


require('dotenv').config()


uri = 'mongodb+srv://msikhan32:msikhan32@cluster0.ol6gvmw.mongodb.net/'

const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
};

//  Connecting to the atlas  server
const con = mongoose.connect(uri, options).then(
    () => {
        console.log("Connection successful");
    },
    err => { console.log(err) }
);

module.exports = con