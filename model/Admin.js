const { Schema, model } = require('mongoose')

const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },

    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
}, {
        timestamps: true
    }
)

const Admin = model('Admin', adminSchema)

module.exports = Admin;