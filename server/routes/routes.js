const express = require('express');
const router = express.Router();
import ProductService from "../api/productService"


router.get('/', function (req, res) {
    ProductService.load((err, products) => {
       if(!err)
           res.send(products);
        else
            throw err;
    });

});

module.exports = router;