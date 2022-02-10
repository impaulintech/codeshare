//Import module
const express = require('express');
const userController = require('../controllers/userControllers');
const auth = require('../auth')
const router = express.Router();

//Checkout
router.post("/checkout", auth.verify, (req, res) => {
    let userData = auth.decode(req.headers.authorization)

    userController.checkout(userData, req.body)
        .then(result => {
            res.send(result.latestOrder)
        });
})

//My-orders
router.get("/my-orders", auth.verify, (req, res) => {

    let userData = auth.decode(req.headers.authorization)

    userController.getMyOrders(userData)
        .then(result => {
            res.send(result)
        });
})

//View all the orders Admin Only
router.get("/orders", auth.verify, (req, res) => {

    let userData = auth.decode(req.headers.authorization)

    userController.getAllOrders(userData)
        .then(result => {
            res.send(result)
        });
})


module.exports = router;