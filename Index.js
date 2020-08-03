// 모듈 선언
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const keys = require('./keys.json')
const http = require('http')

// express
const app = express()
const httpServer = http.createServer(app)
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// ejs 템플릿 엔진
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

// 이미지 등 정적파일 올리는 폴더
app.use(express.static('public'))

// port
const PORT = keys.PORT

// log
app.use(morgan('dev'))

// f12 소스코드 이쁘게 보여주기
app.locals.pretty = true;

// server
app.get('/', function(req,res){
    res.render('loginPage.ejs') 
})

app.post('/message',)
app.post('/enrollment',function(req,res){
    let enrollmentEmail = req.body.enrollmentEmailValue
    let enrollmentPassword = req.body.enrollmentPasswordValue1
    console.log(enrollmentEmail, enrollmentPassword)
})

// db 세팅
mongoose.connect(keys.dbURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    
}, function(err){
    if(err){
        console.log(err);
    } else {
        //DB 연결 시 에러가 없었으면, 서버 시작
        httpServer.listen(7777);
        // 실행 성공 시 뜨는 로그
        console.log("서버 성공");
    }
});

console.log("hello, world!");