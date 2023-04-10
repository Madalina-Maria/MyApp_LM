const express = require('express')
const {
  insertAnimalPJ,
  getAnimalePJ,
  updateAnimal,
  deleteAnimal,
  insertInvestitieAnimalPJ,
  getInvestitieAnimalePJ,
  insertProdusAnimalPJ,
  getProdusAnimalePJ,
  deleteInvestitie,
  deleteProdus,
  updateProdus,
  updateInvestitie,
} = require('../controllers/animal')

const router = express.Router()

router.post('/animal/insertAnimalPJ', insertAnimalPJ)
router.get('/animal/getAllAnimalePJ', getAnimalePJ)
router.put('/animal/updateAnimalPJ', updateAnimal)
router.delete('/animal/deleteAnimalPJ/:id', deleteAnimal)
router.post('/animal/insertInvestitieAnimalPJ', insertInvestitieAnimalPJ)
router.get('/animal/getInvestitieAnimalePJ/:id', getInvestitieAnimalePJ)
router.delete('/animal/deleteInvestitiePJ/:id', deleteInvestitie)
router.put('/animal/updateInvestitiePJ', updateInvestitie)
router.post('/animal/insertProdusAnimalPJ', insertProdusAnimalPJ)
router.get('/animal/getProdusAnimalePJ/:id', getProdusAnimalePJ)
router.delete('/animal/deleteProdusPJ/:id', deleteProdus)
router.put('/animal/updateProdusPJ', updateProdus)

module.exports = router
