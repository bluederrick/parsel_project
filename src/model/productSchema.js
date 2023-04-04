const mongoose = require('mongoose');

const schema = mongoose.Schema;

const Product = new schema({

    Item: { type: String, required: true },
    Quntitiy: { type: Number, required: true },
    Location: { type: String, match: /[a-z]/, require: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    phoneNumber: { type: String, required: true },

})



module.exports = Usermodel = mongoose.model('model', Product)