const path = require('path');
const {Pool} = require('../Servers/DBserver');
const { error } = require('console');
const CustomError = require('../Utility/CustomError')
const jwt = require('jsonwebtoken');
const util = require('util');
const {loginvalidator} = require('./../Validations/LoginValidations');

const getHomepage = (req, res, next) => {
    try {
        res.render('htmlFiles/index'); 
    } catch (error) {
        const err = new CustomError('Error Loading Home Page, Try agian later', 404)
        next(err)
    }
};
const getSignupPage = (req,res)=>{
    try {
        res.render('htmlFiles/signup');
        
    } catch (error) {
        const err = new CustomError('Error Loading SIgn-up Page, Try agian later', 404)
        next(err)
    }

}
const getLoginPage = (req,res)=>{
    try {
        res.render('htmlFiles/Login');
        
    } catch (error) {
        const err = new CustomError('Error Loading Login Page, Try agian later', 404)
        next(err)
    }

}

module.exports = { 
    getHomepage,

    getSignupPage,

    getLoginPage
}; 