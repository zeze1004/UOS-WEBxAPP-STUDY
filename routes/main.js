const express = require('express')
const router  = express.Router()

const main = require('../js/main');
{
    //router.get ('/',           (req, res) => { sidam.home(req, res)     })
    router.get ('/login',      (req, res) => { sidam.login(req, res)    })
    router.post('/login',      (req, res) => { sidam.loginProcess(req, res)    })
    router.get ('/signup',     (req, res) => { sidam.signup(req, res)   })
    router.post('/signup',     (req, res) => { sidam.signupProcess(req, res)})
}

module.exports = router