const express = require('express')
const router = express.Router()

const flipkartController = require('../controllers/flipkart')

router.get('/flipkart/mobile', flipkartController)

module.exports = router