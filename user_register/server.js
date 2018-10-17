const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./routes/router');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/study_db');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
//false를 주면 데이터를 String Object 
//true를 주면 any Type (boolena, integer ...)

app.use(router);

app.listen(port, err => {
    if(err) console.log(err)
    else console.log('서버 가동');
});
