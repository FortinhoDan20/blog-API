const express = require('express')
const { getAllPosts, deletePost, createPost, updatePost, getPost } = require('../controllers/post')
const router = new express.Router()

router.post('/add', createPost)

router.get('/', getAllPosts)

router.get('/:id', getPost)

router.patch('/:id', updatePost)

router.delete(':id', deletePost)

module.exports = router