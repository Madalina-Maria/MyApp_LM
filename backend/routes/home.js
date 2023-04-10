const express = require('express')
const router = express.Router()

//importuri
const { afiseaza2, afiseaza } = require('../controllers/home')

router.get('/home', afiseaza)
router.get('/home/acasa', afiseaza2)

module.exports = router
