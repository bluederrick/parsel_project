let express = require('express');
let user = require('../model/Userschema');
let bcrypt = require('bcrypt');
let saltRounds = 10; // to generate generic hashed password
const generateToken = require('../utils/generateId');
const statuscode = require('../utils/statuscode');

//create userRegistration 
// check if user is already registered
let userRegistration = async (req, res) => {
    const { username, fullname, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(hashedPassword);
    try {
        console.log('Creating database')
        let isAlreadyRegistered = await (ValidateUserEmail({ email }) && ValidateUserName(username))

        if (isAlreadyRegistered) {
            return res.status(statuscode.FORBIDDEN).json({
                message: `Already registered`,
                success: false
            })

        } return res.status(statuscode.OK).json({ message: `Registered ` })



        // create a new instance of the user object

        // hash the userpassword



    } catch (e) {
        // res.status(statuscode.CLIENTERROR).json({
        //     message: `unable to create useraccount`,
        //     success: `false`  })
        console.log(e.message)

        const ValidateUserEmail = async email => {
            user.findOne({ email });
            return user ? false : true;
        }

        const ValidateUserName = async username => {
            user.findOne({ username });
            return user ? false : true;
        }
    }
    let userData = new user({
        username,
        fullname,
        password: hashedPassword,
        email,
        Token: generateToken()
    }).save().then(() => {
        console.log(generateToken(), `saved successfully`)
    })

}


module.exports = userRegistration





