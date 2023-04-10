const express = require('express')
const { loginSecure, loginProtect } = require('../controllers/login')
const router = express.Router()

//importuri

router.post('/loginUser', loginSecure)

module.exports = router
