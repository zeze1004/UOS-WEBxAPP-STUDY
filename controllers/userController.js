const User = require('../models/user')
// Message.js에 data 전달
exports.createUser = (userEmail, userPassword) => {  //exports. 로 달아주면 외부에서 사용할 수 있음 <-> 반대로 require은 외부에서 가져와서 사용
    User.create({
        userEmail: userEmail, // user.js의 userEmail : 매개변수로 주어진 userEmail
        userPassword: userPassword
    }, function(err,res){
        //create 과정에서 오류가 있었으면 그거 출력하고 끝내
        if(err){
            console.log(err)
            return
        }
        //잘 저장된 것 같다
        console.log('유저 정보 저장되었다')
    })
}

// // findId 
// exports.findId= (res) => {
//     Message.findId({},function (err,message){ //조건 하나를 찾아라 우리는 데이터가 없으니깐 조건 걸지 않고 아무거나 찾기
//         //findOne 과정에서 오류가 있었으면 그거 출력하고 끝내!
//         if(err){
//             console.log(err)
//             res.send("아무코토 못찾음 오류났음");
//             return
//         }
//         //잘 찾았으니 그대로 출력해보자
//         console.log(message)
//         res.send(message.content) //그냥 message로만 받으면 날 것의 데이터까지 다 받음(db에 있는 content 내용만 전송 가능)
//     })
// }