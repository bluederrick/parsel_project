
let bcrypt = require('bcrypt');
// const generateToken = require('../utils/generateId');
const statuscode = require('../utils/statuscode');
const verify = require('../Services')


export const userLogin = async (req, res) => {
    const { email, password, } = req.body;
    try {

        const isExistingUser = (verify.UserEmailExist(email))


        if (!isExistingUser) {
            return res.status
                (statuscode.CLIENTERROR).json({
                    message: 'Credentails do not match'
                })
        }
        // res.status(statuscode.SUCCESS).json({ message: 'user successfully logged in' })

        const isPasswordExist = verify.hashing(password, verification.password)

        if (!isPasswordExist) {
            return res.status
                (statuscode.CLIENTERROR).json({
                    message: 'Access denied'
                })
        }
        return res.status
            (statuscode.SUCCESS).json({
                message: 'user logged in successfully'
            })

    } catch (e) {
        console.log(e.message, "ERROR LOGIN PLEASE TRY AGAIN")

        return res.send
            ('login failed')
    }
}