const express = require('express')
const { updateUser, deleteUser, getUser } = require('../controllers/user')
const router = new express.Router()

router.patch('/:id', updateUser)

router.delete('/:id', deleteUser)

router.get('/:id', getUser)

module.exports = router