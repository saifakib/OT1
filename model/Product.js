const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    img: {
        type: String,
    },

    price: {
        type: Number
    }
}, {
        timestamps: true
    }
)

const Product = model('Product', productSchema)

module.exports = Product;