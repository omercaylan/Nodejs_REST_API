const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request  to / product'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST request  to / product'
    });
});

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    if (id == 'special') {
        res.status(200).json({
            message: 'You discover the special ID ',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an id'
        });
    }
});

router.patch('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Update Product'
    });
});

router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Delete Product'
    });
});

module.exports = router;