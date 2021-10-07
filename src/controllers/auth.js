const User = require('../models/User')
const bcrypt = require('bcrypt')


exports.register = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        
        const user = new User({...req.body, password: hashedPass })
        await user.save()

        res.status(201).json(user)
    } catch (e) {
        res.status(500).json(e)
    }
}

exports.login = async (req, res) => {

    try {
        const user = await User.findOne({ username: req.body.username })
        !user && res.status(400).json('Wrong credentials!')

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong credentials!")

        const { password, ...others } = user._doc;
        res.status(200).json(others)

    } catch (e) {
        res.status(500).json(e)
    }
}