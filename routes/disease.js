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

// Get diseases based on symptoms

router.post("/symptoms/diseases", (req, res) => {
    let sampleSymptoms = req.body.symptoms;
    // console.log(symptoms);
    const sDiseases = [];
    sampleSymptoms.forEach(function(symptom){
        sDiseases.push("diseases 2");
        const diseases = Disease.find({ symptoms: symptom }).exec().then((diseases) => {
            sDiseases.push(diseases);
            console.log("new disease"+ diseases);
            return diseases;
        });
        sDiseases.push(diseases);
    })
    console.log("sDiseases: " + sDiseases)

    res.send(sDiseases);

    // res.render("diseases")
})

module.exports = router;
