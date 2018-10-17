const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName: String,
    password: String
})

module.exports = mongoose.model('user', UserSchema);

//users라는 컬렉션이 만들어짐 
//db.users.find() 
//컬렉션은 s가 자동으로 붙는 것