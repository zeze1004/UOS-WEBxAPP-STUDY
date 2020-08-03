const Message = require('../models/Message');
// Message.js에 data 전달
exports.createMessage = (data) => {  //exports. 로 달아주면 외부에서 사용할 수 있음 <-> 반대로 require은 외부에서 가져와서 사용
    Message.create({
        content: data
    }, function(err,res){
        //create 과정에서 오류가 있었으면 그거 출력하고 끝내
        if(err){
            console.log(err);
            return;
        }

        //잘 저장된 것 같다
        console.log('잘 저장됨');


    });
}