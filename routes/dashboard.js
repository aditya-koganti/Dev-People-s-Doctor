const express = require("express");
const doctor = require("../models/doctor");
const router = express.Router();

router.get("/", function(req, res){
    res.render("dashboards/index.ejs")
})

router.get("/informationForm/:id", function(req, res){
    var doctorID = req.params.id;
    res.render("dashboards/informationForm", {doctorID: doctorID});
})

module.exports = router;
