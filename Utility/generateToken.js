const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})

class Token{
    constructor(id){
        this.id = id;
        return jwt.sign(this.id, process.env.SECRET_STR, {expiresIn: process.env.SECRET_STR_EXPIRES_IN})
    }
}

module.exports= Token