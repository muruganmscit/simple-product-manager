var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
/* GET product listing. */
router.get('/', function(req, res, next) {
    model.Product.findAll({})
    .then(products => res.json({
        error: false,
        data: products
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));
});
 
 
/* POST product. */
router.post('/', function(req, res, next) {
    const {
        name,
        description,
        price
    } = req.body;
    console.log("name: "  + name);
    model.Product.create({
            name: name,
            description: description,
            price: price
        })
        .then(product => res.status(201).json({
            error: false,
            data: product,
            message: 'New product has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
 
 
/* update product. */
router.put('/:id', function(req, res, next) {
    const product_id = req.params.id;
 
    const { name, description, price } = req.body;
 
    model.Product.update({
        name: name,
        description: description,
        price: price
        }, {
            where: {
                id: product_id
            }
        })
        .then(product => res.json({
            error: false,
            message: 'product has been updated.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
 
/* DELETE product listing. */
router.delete('/:id', function(req, res, next) {
    const product_id = req.params.id;
 
    model.Product.destroy({ where: {
        id: product_id
    }})
        .then(status => res.json({
            error: false,
            message: 'product has been delete.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
module.exports = router;