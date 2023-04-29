const { object } = require('yup')


let userSchema = object({
    username: string().required(),
    fullname: number().required(),
    email: string().email(),
    password: string().max(8).min(5)
});


module.exports = userSchema;


