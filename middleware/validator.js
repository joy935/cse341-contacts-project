const validator = require('../helper/validator');
const saveUser = async (req, res, next) => {
    const validationRule = {
        "firstName": "required|string",
        "lastName": "required|string",
        "email": "required|email",
        "favoriteColor": "required|string",
        "birthday": "string"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch( err => console.log(err))
}
module.exports = {
    saveUser
};

// const { body, validationResult } = require('express-validator')
// // define the validation rules
// const userValidationRules = () => {
//   return [
//     // firstName
//     body('firstName').notEmpty().withMessage('First name is required'),
//     // lastName
//     body('lastName').notEmpty().withMessage('Last name is required'),
//     // email
//     body('email').isEmail(),
//     // favoriteColor
//     body('favoriteColor').notEmpty().withMessage('Favorite color is required'),
//     // birthday
//     body('birthday').notEmpty().withMessage('Birthday is required').isDate({format: 'YYYY-MM-DD'}),
//   ]
// }

// // middleware to handle the validation result
// const validate = (req, res, next) => {
//   const errors = validationResult(req)
//   if (errors.isEmpty()) {
//     return next()
//   }
//   const extractedErrors = []
//   errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

//   return res.status(422).json({
//     errors: extractedErrors,
//   })
// }

// module.exports = {
//   userValidationRules,
//   validate,
// }