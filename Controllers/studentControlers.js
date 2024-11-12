const pool              =         require('./../Servers/DBserver')
const path              =           require('path');
const CustomError       =           require('../Utility/CustomError')
const jwt               =           require('jsonwebtoken');
const util              =           require('util');
const {loginvalidator}  =           require('./../Validations/LoginValidations');
const signupValidator   =           require('./../Validations/SIghupValidation');
const AccessLogics      =           require('./../Utility/accessibilitylogics');
const createToken       =           require('./../Utility/generateToken')



//FUNCTION TO SIGH UP NEW STUDENT USERS
const StudentSignup = async function (req, res, next){
    const {error,value} = signupValidator.validate(req.body,{ abortEarly:false })

    if(error){
        const err = new CustomError(error,400)

        next(err)
    }
    const client = await pool.connect();
    
    const { userName, fullName, Email, Password, phoneNumber } = req.body;
    
    try {
        const result = await client.query('SELECT * FROM boats')

        console.log(result)
    } catch (error) {
        
    }
    const accessLogicsInstance = new AccessLogics(Password,5);

    await accessLogicsInstance.hashPassword();

    console.log(accessLogicsInstance.password); 
}


//FUNCTION TO LOGIN STUDENT USERS
const StudentLogin = async(req,res,next)=>{
    try {
        const {error,value} = loginvalidator.validate(req.body,{ abortEarly:false })
        if(error){
            return res.status(400).json({
                status: 'fail',
                message: error.details.reduce((acc, curr) => {
                    acc[curr.path[0]] = curr.message;
                    return acc;
                }, {})
            });
        }
        const{useremail,password}= req.body
            Pool.query('SELECT * FROM demotables WHERE email = useremail',(error, results)=>{
                if(error){
                    const err = new CustomError(error, 401)
                    next(err)
                }
                if (results.rows.password = password){
                    return res.status(301).json({
                        status:'Succesful',
                        data: results.rows
                    })
                }
            })
        
    } catch (error) {
        
    }
}


    


module.exports = { 
    StudentLogin,

    StudentSignup
}; 