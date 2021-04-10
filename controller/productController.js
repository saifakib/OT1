const Product = require('../model/Product')
const User = require('../model/User')

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (e) {
        res.status(501).json(e)
    }
}

exports.getSingleProduct = async (req, res) => {
    const _id = req.params.id
    try {
        const product = await Product.findById({ _id })
        res.status(200).json(product)
    } catch (e) {
        res.status(501).json(e)
    }
}


exports.getCheckoutProduct = async (req, res) => {
    const _id = req.params.id
    try {
        const checkoutProducts = await User.findById({ _id }).populate('checkouts')
        res.status(200).json(checkoutProducts)
    } catch (e) {
        res.status(501).json(e)
    }

}  

exports.postCheckoutProduct = async (req, res) => {
    const { product_id, user_id } = req.body;
    try {
        await User.findOneAndUpdate(
            { _id: user_id },
            { $push: { 'checkouts': product_id } }
        )
        res.status(200).json({ msg: "checkouts"})
    } catch (e) {
        res.status(501).json(e)
    }
}



exports.getOrderProduct = async (req, res) => {
    const _id = req.params.id
    try {
        const orderProducts = await User.findById({ _id })
            .populate({
                path: 'orders',
                select: 'name price'
            })
        res.status(200).json(orderProducts)
    } catch (e) {
        res.status(501).json(e)
    }
}

exports.postOrderProduct = async (req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findById({ _id })
        //const ckToOr = (...user.oders, ...user.checkouts)
        user.orders.push(...user.checkouts)
        user.checkouts = [];
        await user.save()
        res.status(200).json(user.orders)
    } catch (e) {
        res.status(501).json(e)
    }
}



