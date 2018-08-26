const express = require('express');
const router = express.Router()


router.get("/", function(req,res){
    res.render("home")
})

router.get("/scrape", function(req,res){
    res.render("scrape")
})

router.get("/saved", function(req,res){
    res.render("saved")
})

module.exports = router