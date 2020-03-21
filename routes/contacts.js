const express = require('express')
const router = express.Router()
const {
    check,
    validationResult
} = require('express-validator');
const User = require('../models/User')
const auth = require('../middleware/auth_m')
const Contact = require('../models/Contact')



// @route GET  api/contacts
// #desc Get all user contacts
//@access Private
router.get('/', auth, async (req, res) => {

    try {
        const contacts = await Contact.find({
            user: req.user.id
        }).sort({
            date: -1
        })
        res.json(contacts)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error!!')
    }

})

// @route GET  api/contacts
// #desc add new contact
//@access Private
router.post('/', [auth, [
    check('name', 'Name is required !!!').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    const {
        name,
        email,
        phone,
        type
    } = req.body

    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user: req.user.id
        })
        await newContact.save()
        res.json(newContact)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error !!!')

    }
})

// @route PUT  api/contacts/:id
// #desc update contact
//@access Private
router.put('/:id', auth, async (req, res) => {
    const {
        name,
        email,
        phone,
        type
    } = req.body

    // build contact object
    const contactFields = {}
    if (name) contactFields.name = name
    if (email) contactFields.email = email
    if (phone) contactFields.phone = phone
    if (name) contactFields.type = type

    try {
        let contact = await Contact.findById(req.params.id)
        if (!contact) {
            return res.status(404).json({
                message: 'contact not found!!'
            })
        }
        if (req.user.id !== contact.user.toString()) {
            return res.status(401).json({
                message: 'Access denied, user not authorized!!'
            })
        }
        contact = await Contact.findByIdAndUpdate(req.params.id, {
            $set: contactFields
        }, {
            new: true
        })
        res.json(contact)

    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error !!!')
    }
})

// @route DELETE  api/contacts/:id
// #desc delete contact
//@access Private
router.delete('/:id', auth, async (req, res) => {

    try {
        const contact = await Contact.findById(req.params.id)
        if (!contact) {
            return res.status(404).json({
                message: 'contact not found !!'
            })
        }
        if (contact.user.toString() !== req.user.id) {
            return res.status(401).json({
                message: 'Access denied, user not authorized!!'
            })
        }
        await Contact.findByIdAndRemove(req.params.id)
        res.json({
            message: 'contact removed !!'
        })
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error !!!')
    }


})

module.exports = router