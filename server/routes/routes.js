const express = require('express');
const router = express.Router();
import ProductService from "../api/v1/productService"


router.get('/', function (req, res) {
    ProductService.load((err, products) => {
       if(!err)
           res.send(products);
        else
            throw err;
    });

});


router.get('/:id', function (req, res) {
    let id = req.params.id;

    ProductService.get(id, (err, products) => {
        if(!err)
            res.send(products);
        else
            throw err;
    });

});


router.delete('/:id', function (req, res) {
    let id = req.params.id;
    ProductService.delete(id,(err, products) => {
        if(!err)
            res.send(200);
        else
            throw err;
    });

});

router.post('/', function (req, res) {
    var product = req.body.product;
    ProductService.post(product,(err, products) => {
        if(!err)
            res.send(200);
        else
            throw err;
    });

});

module.exports = router;