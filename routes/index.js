const express       = require("express");
const router        = express.Router();
const passport      = require("passport");
const User          = require("../models/user");

// ========== Landing ========== //

router.get("/", function (req, res) {
    res.render("landing");
})


// ========== signup Form ===========

router.get("/register", function (req, res) {
    res.render("register", {page: 'register'})
})


//  sign up Logic ==========

router.post("/register", function (req, res) {
    const newUser = new User({
        username: req.body.username
    });
    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
            return res.redirect("/register");
        }   
        passport.authenticate("local")(req, res, function () {
            res.redirect("/dashboard");
        })
    })
})

//  Login Form ==========

router.get("/login", function (req, res) {
    res.render("login", {page: 'login'});
})

//  Login logic =============

router.post("/login", passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    
failureFlash: true
}), function (req, res) {});


module.exports = router;