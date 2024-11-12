const express = require('express')
const Router = express.Router();
const userController = require('../Controllers/userControler')
const studentController = require('../Controllers/studentControlers')

//landing page route
Router.route(['','/index'])
                                .get(userController.getHomepage)

Router.route(['/signup'])
                                .get(userController.getSignupPage)
                                
                                .post(studentController.StudentSignup)

Router.route(['/login'])
                                .get(userController.getLoginPage)

//all student activities route
// Router.route('api/v1/signup')
//                             .post(studentController.StudentLogin)
// Router.route('api/v1/signup').get(userController.getStudentpage)
// Router.route('api/v1/register').get(userController.getStudentpage)


module.exports = Router;