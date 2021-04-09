const router = require('express').Router()
const  adminController  = require('../controller/adminController')
const  productController  = require('../controller/productController')
const userController = require('../controller/userController')

const {
    getAllProducts,
    getSingleProduct,
    postCheckoutProduct,
    postOrderProduct,
    getCheckoutProduct,
    getOrderProduct
} = productController;

const {
    createProduct,
    editProduct,
    removeProduct
} = adminController




//admin
router.post('/admin/product/create', createProduct)
router.put('/admin/product/:id/edit', editProduct)
router.delete('/admin/product/delete/:id', removeProduct)

//user
router.post('/createuser', userController.createUser)

router.get('/user/', userController.getUser)
//router.get('/:id/checkout', getCheckoutProduct)
router.patch('/checkout', postCheckoutProduct)
//router.get('/:id/orders', getOrderProduct)
router.put('/:id/order', postOrderProduct)
router.get('/product/:id', getSingleProduct)
router.get('/', getAllProducts)

router.get('*', (req, res) => {
    res.status(404).json({ msg: '404 not found'})
})




module.exports = router;