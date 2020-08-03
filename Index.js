// 모듈 선언
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const keys = require('./keys.json')

// express
const app = express()
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

// db 세팅
mongoose.connect