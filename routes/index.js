const express       = require("express");
const router        = express.Router();
const passport      = require("passport");
const User          = require("../models/user");

// ========== index ========== //

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
        username: req.body.username,
        email: req.body.email
    });
    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
            req.flash("error", err.message);
            return res.redirect("/register");
        }   
        passport.authenticate("local")(req, res, function () {
            req.flash("success","welcome to Camps " + user.username);
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


// Logout ===================

router.get("/logout", function (req, res) {
    req.logout(function(err){
        if(err){return next(err);}
    req.flash("success", "you have successfully logged out");
    res.redirect("/");
    });
});

module.exports = router;