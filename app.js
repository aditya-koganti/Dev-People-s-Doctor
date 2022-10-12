    // ======= defining packages ===========//

    const { default: mongoose } = require("mongoose")

    const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");
    
    // ============= Defining Custom Models 
    
    const User = require("./models/user");
    
    //=======  Basic express app setup =========//
    
    app.set("view engine", "ejs")
    app.use(bodyParser.urlencoded({
        extended: true
    }))
    app.use(express.static(__dirname + "/public"))
    
    mongoose.connect("mongodb://localhost/aighteam1",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false
    })
    
    
    // ========== Defining Routes ============ //
    
    const indexRoutes = require("./routes/index")
    
    //===========  Authentication  =========== //
    
    app.use(require("express-session")({
        secret: "aighteam secret code",
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
    
    app.use(function (req, res, next) {
        res.locals.currentUser = req.user;
        next();
    })
    
    
    // ========== Routes ================ //
    
    app.use("/", indexRoutes);
    
    // ============= End Setup =============//
    
    app.listen(3000, function(){
        console.log("hahahahaha you are good to goo..... :DDDDDDD")
    })  