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



module.exports = router;