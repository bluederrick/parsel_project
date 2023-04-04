
let express = require('express');
let user = require('../model/Userschema');
let bcrypt = require('bcrypt');
let saltRounds = 10; // to generate generic hashed password
const generateToken = require('../utils/generateId');
const statuscode = require('../utils/statuscode');





let userLogin = async (req, res) => {

    try {
        const { email, password } = req.body;
        const UserEmailExist = async email => {
            user.findOne({ email });
            return user ? false : true

            // return res.status(statuscode.CLIENTERROR).json({ message: "no Email found" })
        }
        console.log(UserEmailExist)

        const isExistingUser = await (UserEmailExist({ email }))
        console.log(isExistingUser)

        if (!isExistingUser) {
            return res.status(statuscode.CLIENTERROR).json({ message: 'user doesnt exists' })
        }
        // return res.status(statuscode.SUCCESS).json({ message: 'user successfully loggedin' })
        // console.log("User")
        const isPasswordExist = await bcrypt.compare(password, isExistingUser.password)
        if (!isPasswordExist) {
            return res.status(statuscode.CLIENTERROR).json({ message: 'password is wrong' })
        }
        return res.status(statuscode.SUCCESS).json({ message: 'user logged in successfully' })

    } catch (e) {
        console.log(e.message, "error")

    }
}
module.exports = userLogin;