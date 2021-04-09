const Product = require('../model/Product')
//const Admin = require('../model/Admin')

exports.createProduct = async (req, res) => {
    try {
        const { name, imgurl, price } = req.body;

        let product = new Product({
            name,
            img: imgurl,
            price
        })
        let prod = await product.save();
        if(prod) {
            res.status(201).json({ msg: "product created"})
        }
        // if (success) {
        //     await Admin.findOneAndUpdate(
        //         { _id: admin_id },
        //         { $push: { 'products': prod._id } }
        //     )
        // }

    } catch (e) {
        res.status(501).json(e)
    }
}

exports.editProduct = async (req, res) => {
    const { id } = req.params;
    const { name, img, price } = req.body;

    console.log('logi')

    try {
        const product = await Product.findOneAndUpdate(
            { _id: id },
            { $set: { name, img, price } }
        )
        
        res.status(200).json({ msg: 'Updated'})
        
    } catch (e) {
        res.status(501).json(e)
    }
}


exports.removeProduct = async (req, res) => {
    const _id = req.params.id;

    try {
        await Product.findByIdAndDelete({ _id })
        res.status(202).jons({ msg: 'removed' })
    } catch (e) {
        res.status(501).json(e)
    }
}