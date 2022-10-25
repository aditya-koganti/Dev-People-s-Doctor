const express = require("express"),
app = express();
const router = require(".");
const Doctor = require("../models/doctor");

router.get("/doctorForm", function(req, res){
    res.render("doctors/doctorForm.ejs");
})

router.post("/", function(req, res){
    Doctor.create({
        name: req.body.name,
        rating: req.body.rating,
        specialities: req.body.specialities,
        description: req.body.description}, function(err, newDoctor){
            if(err){
                console.log("Doctor creation error!")
                console.log(err);
            }else{
                console.log("Doctor Created");
                console.log(newDoctor);
            }
        }
    )
})

router.get("/all", function(req, res){
    Doctor.find({}, function(err, allDoctors){
        if(err){
            console.log("All doctors retrieval error");
            console.log(err)
        }else{
            res.render("doctors/allDoctors.ejs", {allDoctors: allDoctors})            
        }
    })
})

module.exports = router;