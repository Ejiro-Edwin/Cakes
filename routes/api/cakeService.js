const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Cake model
const Cake = require('../../models/Cake');

router.post('/register', (req, res) => {

    const newCake = new Cake({
        name: req.body.name,
        imageUrl: req.body.imageUrl
    });

    newCake.save().then(cake => res.json(cake));
}
);

module.exports = router;