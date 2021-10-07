const Category = require('../models/Category')

exports.createCat = async (req, res) => {

    try {
        const category = new Category(req.body) 

        await category.save()

        res.status(201).json(category)
    } catch (e) {
        res.status(500).json(e)
    }
}

exports.getAllCategory = async (req, res) => {
    try {
        const categories = await Category.find()

        res.status(200).json(categories)

    } catch (e) {
        
        res.status(500).json(e)
    }
}