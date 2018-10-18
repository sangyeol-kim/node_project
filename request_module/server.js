const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/get', (req, res) => {

    console.log(req.headers)
    res.end()



})
app.post('/post', (req, res) => {
    console.log(req.body)
    res.send({result:'결제성공'})


})

app.listen(port, function (err) {
    if (err) return;

    console.log("서버가동")


})