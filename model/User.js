const { Schema, model } = require('mongoose')

const userSchema = new Schema({
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

    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],

    checkouts: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
}, {
        timestamps: true
    }
)

const User = model('User', userSchema)

module.exports = User;