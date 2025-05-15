const mongoose = require('mongoose');

const mongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/phoneStore', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Success Connected to MongoDB')
    } catch (error) {
        console.log(`error ${error}`);
        process.exit(1);
    }
}

module.exports = mongoDB;