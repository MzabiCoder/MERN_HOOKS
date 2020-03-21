const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const config = require('config')
const {
    check,
    validationResult
} = require('express-validator');



// @route POST  api/users
// #desc Register User
//@access Public
router.post('/', [
    check('name', 'Name is required!!').not().isEmpty(),
    check('email', 'Email is required!!').isEmail(),
    check('password', 'Password is required with 6 or more characters!!!').isLength({
        min: 6
    }),

], async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    const {
        name,
        email,
        password
    } = req.body
    try {
        let user = await User.findOne({
            email
        })
        if (user) {
            return res.status(400).json({
                message: "User already exists"
            })
        }
        user = new User({
            name,
            email,
            password
        })
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)
        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(payload, config.get('secret'), {
            expiresIn: 360000
        }, (err, token) => {
            if (err) throw err
            res.json({
                token
            })
        })
        await user.save()
        // res.send('User saved!! ')
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server error!!')
    }
})

module.exports = router