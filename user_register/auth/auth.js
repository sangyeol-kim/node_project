
const User = require('../models/user');
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const crypto = require('crypto');

passport.use(new BasicStrategy(
    function (id, password, callback) {



        const hash = crypto.createHash('sha256')
        hash.update(password)
        let hash_password = hash.digest('hex')

        console.log(id)
        console.log(password)

        //findOne을 사용하면 하나씩만 find를 쓰면 배열로 넘어옴 user[0],user[1] but 같은 아이디를 가진 유저는 있을수없으므로 필요X
        User.findOne({userName:id,password:hash_password},{password:0},(err, doc) =>{
            //{password:0}를 통해 doc에 password를 빼게 한다.
            if(doc){
                //조건이 맞으면 doc 데이터가 넘어오며 조건이 없을경우 if(doc)이 false 된다
                callback(null, doc);
                // callback은 route의 user.readUser로 넘어간다.
            }else {
                callback(null, false); //401 에러
            }

        })




        // // 디비에 접근을 해서 아이디랑 비밀번호를 가져와서 확인을 하는 부분
        // if (id === "study" && password === "1234") {
        //     callback(null, id);
        // } else {
        //     callback(null, false)
        // }

    }
));

exports.isBasicAuthenticated = passport.authenticate('basic', {session: false})