const validator = require('validator');

exports.validators = [

    //name validator
    // check('Name')
    // .isLength({min: 1, max: 30})
    // .trim()
    // .escape()
    // .withMessage("The name of your hero must be between 1 and 30 characters."),
    
    //email validator
    validator.isEmail('Email').trim().withMessage("Please, enter a valid email."),
    
    //phone validator
    // check('powers')
    // .custom(isPowersValid).withMessage("Please, choose at least 2 powers for your hero")
    // .customSanitizer(sanitizingPowers)

    //message validator

];