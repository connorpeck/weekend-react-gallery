const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('req par',req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        console.log('gallergy id', galleryId);
        if(galleryItem.id == galleryId) {
            console.log('likes before',galleryItem.likes);
            galleryItem.likes += 1;
            console.log('likes after', galleryItem.likes);
        }
        
    }
    res.sendStatus(200,);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    res.send(galleryItems)
    console.log(galleryItems);;
}); // END GET Route

module.exports = router;