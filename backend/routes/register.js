const express = require('express')
const {
  registerSecure,
  getLocalitate,
  getTara,
  getJudet,
} = require('../controllers/register')
const router = express.Router()

//importuri

router.post('/insertUser', registerSecure)
router.get('/register/getTara', getTara)
router.get('/register/getJudet', getJudet)
router.get('/register/getLocalitate', getLocalitate)

module.exports = router
