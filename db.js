const mongoose = require('mongoose');

const mongoDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://nhan291203:Ntn291203%40@cluster0.yliifur.mongodb.net/mydatabase?retryWrites=true&w=majority'
            , {
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