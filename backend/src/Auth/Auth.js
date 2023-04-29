const express = requrie('express')
const jwt = require('jsonwebtoken')
const generateToken = require('../utils/generateId')


export const generateToken = async (data, secretKey) => {

    const token = await jwt.sign(data, secretKey)


    if (token) {
        return token
    }
    else {
        return token.error
    }
}

export const verifyToken = async data => {

    const token = await jwt.verify(data)

}