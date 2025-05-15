const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const Path = require('./controller/phone.router');
const mongoDB = require('./db');
mongoDB();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', Path);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})