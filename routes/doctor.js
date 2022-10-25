const express = require("express"),
app = express();
const router = require(".");
const Doctor = require("../models/doctor");

router.get("/doctorForm", function(req, res){
    res.render("doctors/doctorForm.ejs");
})

module.exports = router;