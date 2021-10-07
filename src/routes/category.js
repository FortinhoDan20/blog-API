const express = require('express')
const router = new express.Router()
const { getAllCategory, createCat } = require('../controllers/category')

router.post('/add', createCat)

router.get('/', getAllCategory)

module.exports = router