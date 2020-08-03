const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
{
    userEmail: String,
    userPassword : String

});
// 디비에 UserSchema의 내용이 user라는 값으로 올라간다
module.exports = mongoose.model('user',UserSchema);