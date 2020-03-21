const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {

    // get the token from the header
    const token = req.header('x-auth-token')

    if (!token) {
        return res.status(401).json({
            message: 'No Token, authorization denied!!!'
        })

    }
    try {
        const decoded = jwt.verify(token, config.get('secret'))
        req.user = decoded.user
        next()
    } catch (error) {
        res.status(401).json({
            message: 'Token is not valid'
        })
    }

}