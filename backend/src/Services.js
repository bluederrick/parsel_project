// import { object } from 'yup';
const bcrypt = require('bcrypt');


export const UserEmailExist = async email => {

    const emailUser = await user.findOne({ email })
    return emailUser ? true : false
}

export const CompareHash = async (Userpassword) => async (LoginPassword) => {
    await bcrypt.compare(Userpassword, LoginPassword)

}

export const ValidateUserEmail = async email => {
    await user.findOne({ email });
    return user ? false : true;
}

export const ValidateUserName = async username => {
    user.findOne({ username });
    return user ? false : true;
}

export const Hash = async object => async item => {
    await bcrypt.hash(object, item)
}