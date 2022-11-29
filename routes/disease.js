const express = require("express");
const router = express.Router();
const Disease = require("../models/disease");

router.get("/diseaseForm", function(req, res){
    res.render("diseases/diseasesForm")
})

module.exports = router;
