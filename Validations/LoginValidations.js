const Joi = require('joi');

const loginvalidation = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2 }).required(),

        password: Joi.string().min(5).required()

        }).messages({
                'string.email': 'Please enter a valid email address',
                'any.required': '{{#label}} is required', // Reusable for both email and password
                'string.empty': 'Please enter a password',
                'string.min': 'Password should be more than 5 characters'
        });

module.exports = {
        loginvalidation
};