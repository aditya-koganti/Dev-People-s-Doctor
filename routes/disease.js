const express = require("express");
const router = express.Router();
const Disease = require("../models/disease");

router.get("/diseaseForm", function(req, res){
    res.render("disease/diseasesForm")
})

router.post("/disease", function(req, res){
    var disease = req.body.disease;
    var symptoms = req.body.symptoms;
    var newDisease = {
        disease: disease,
        symptoms: symptoms
    }
    Disease.create(newDisease, function(err, createdDisease){
        if(err){console.log("created error");console.log(err)}
        else{
            req.flash("success","You have created a disease");
            console.log(createdDisease);
            res.redirect("/diseases");
        }
    })
})


module.exports = router;
