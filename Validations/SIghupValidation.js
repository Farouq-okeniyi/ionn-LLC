const joi = require('joi')
const { password } = require('pg/lib/defaults')
const { isMobilePhone } = require('validator')

const signupValidation =  joi.object({
    fullName: joi.string().min(4).max(40).required(),

    userName: joi.string().min(5).max(20).required(),

    Email: joi.string().email({minDomainSegments:2}).required(),

    phoneNumber: joi.number().integer().min(1000000000).max(99999999999).required(),

    Password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    confirmPassword: joi.ref('password')
}).messages({
    'string.email': 'Please enter a valid email address',
    'any.required': '{{#label}} is required', // Reusable for both email and password
    'string.empty': 'Please enter your{{#label}}',
    'string.min': 'User Name should be more than 5 characters',
    'string.max': 'User name should be less tham 20 characters',
    'number.empty':'please Input a valid phone number',
})

module.exports= signupValidation
