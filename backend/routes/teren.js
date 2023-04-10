const express = require('express')
const {
  getTerenuriPJ,
  getFilteredTerenuriPJ,
  getOneTerenPJ,
  insertTerenPJ,
  updateTeren,
  deleteTeren,
  getTipTerenPJ,
  getCategorieTerenPJ,
} = require('../controllers/teren')
const router = express.Router()

//importuri

router.get('/teren/getAllTerenuriPJ', getTerenuriPJ)
router.post('/teren/getOneTerenPJ', getOneTerenPJ)
router.put('/teren/updateTerenPJ', updateTeren)
router.delete('/teren/deleteTerenPJ/:id', deleteTeren)
router.post('/teren/insertTerenPJ', insertTerenPJ)
router.get('/teren/getAllTipTerenPJ', getTipTerenPJ)
router.get('/teren/getAllCategorieTerenPJ', getCategorieTerenPJ)

module.exports = router
