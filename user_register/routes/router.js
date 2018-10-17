const express = require('express');
const route = express.Router();
const user = require('../controller/user');
const auth = require('../auth/auth')
const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})

function fileFilter (req, file, cb) {
    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted

    if(file.mimetype === "image/png") {
        cb(null, true)
        // To accept the file pass `true`, like so:
    } else {
        cb(null, false)
        // To reject this file pass `false`, like so:
    }
}

const upload = multer({ storage: storage, fileFilter:fileFilter})

//route.get('/users', function (err, res) {
//    res.send('확인');
//});

route.get('/home' ,(req, res) => {
    // res.sendFile(__dirname+'/views/index.html')
    //dirname은 내 디렉토리 경로 (자신이 속한)

    //path를 사용하면 조금 더 편하게
    //res.sendFile(path.join(__dirname,'views','index.html'))
    res.sendFile(path.resolve(__dirname,'..','views','index.html'))
    /* path.join을 했을 경우는 route/views/filename으로 들어가기 떄문에
    따로 라우팅을 사용하는 경우에는 루트가 맞지 않는다.
    그렇기 때문에 resolve라는 메소드를 통해서 (cd .. 과 같은) 사용한다.
    */
})

route.route('/images')
    .get((req, res) => {
    //res.sendFile(__dirname+'/images/background.png')
    //res.sendFile(path.join(__dirname,'images','background.png'))
    res.sendFile(path.resolve(__dirname,'..','images','background.png'))
    })

    .post(upload.single('avatar'), (req, res, next) =>{
        res.send(req.file) //없어도 저장은댐
    })

route.route('/user')
    .post(user.createUser)
    .get(auth.isBasicAuthenticated, user.readUser)
    .put(auth.isBasicAuthenticated, user.updateUser)
    .delete(auth.isBasicAuthenticated, user.deleteUser)

route.route('/test')
    .get((req, res) => {
        console.log(req.query)
        res.send('확인')
    })
    // 기본적으로 json은 파싱을 못한다?
    .post((req, res) => {
        console.log(req.body)
        res.send("POST 방식") //send를 보내줘야 요청이 끝남?
    })

    //?방식이 아닌 /:~ 같은 params
    // 데이터를 업데이트, 삭제
    route.route('/test/:id')
    .get((req, res) => {
        console.log(req.query)
        res.send('확인')
    })

module.exports = route;