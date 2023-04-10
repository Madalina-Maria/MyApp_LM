const express = require('express')
const {
  insertLicitatii,
  getLicitatii,
  getGradAcces,
} = require('../controllers/licitatie')

const router = express.Router()

router.post('/licitatie/insertlicitatii', insertLicitatii)
router.get('/licitatie/getGradAcces/:id', getGradAcces)
router.get('/licitatie/getAllLicitatii', getLicitatii)

module.exports = router
