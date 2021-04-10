const User = require('../model/User')

exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        let newUser = new User({
            name,
            email
        })
        let user = await newUser.save()
        if (user) {
            res.status(201).json(user)
        }
    } catch (e) {
        res.status(501).json(e)
    }
}
exports.getUser = async (req, res) => {
    try {
        const _id = req.body.id;
        let user = await User.findById({ _id })
            .populate({
                path: 'orders',
                select: 'name price'
            })
            .populate({
                path: 'checkouts',
                select: 'name, price'
            })
        if (user) {

            res.status(201).json(user)
        }
    } catch (e) {
        res.status(501).json(e)
    }
}