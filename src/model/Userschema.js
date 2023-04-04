const mongoose = require('mongoose');

const schema = mongoose.Schema;

const Users = new schema({

    fullname: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, match: /[a-z]/, require: true },
    email: { type: String, required: true },

})



module.exports = Usermodel = mongoose.model('model', Users)