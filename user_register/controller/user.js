/**
 * Created by myeongsic on 2017. 3. 29..
 */

const User = require('../models/user')
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

let jwtKey = "kim"
//대칭키가 필요하다. 값을 풀었다가 암호화했다가 해야하므로

exports.createUser = function (req, res) {

    let userName = req.body.userName;
    let password = req.body.password;

    //대칭키를 사용하게 되면 나중에 복호화가 가능하므로 해쉬키 사용
    const hash = crypto.createHash('sha256')
    hash.update(password)
    let hash_password = hash.digest('hex');
    // 대칭키
    // let key = "HowlKey"
    //
    //
    // const ciper = crypto.createCipher('aes192',key);
    // const deciper = crypto.createDecipher('aes192',key);
    // let encrypted_passowrd = ciper.update(password,'utf8','hex');
    // encrypted_passowrd += ciper.final('hex')




    new User({userName: userName, password: hash_password}).save((err, doc) =>{

        if(doc) {//데이터가 정확이 들어갔는지 체크 코드
            console.log(doc)


            // 대칭키
            // let target = doc.password;
            //
            // let decryped = deciper.update(target, 'hex','utf8')
            // decryped += deciper.final('utf8');
            //
            // console.log("복호화된 패스워드" + decryped);



            res.send("하울서버에 유저가 생성되었습니다.")
        }
    })



}

exports.readUser = function (req, res) {

    let token = jwt.sign(req.user.toJSON(), jwtKey);
    // req.user 대신 .toJSON()도 추가
    // why? https://stackoverflow.com/questions/47117709/payload-error-in-jsonwebtoken﻿

    res.send(token)
}

exports.updateUser = function (req, res) {
    //수정되는 코드
    res.send("유저가 수정되었습니다.")
}

exports.deleteUser = function (req, res) {

    //삭제 코드
    res.send("유저가 삭제되었습니다.")
}