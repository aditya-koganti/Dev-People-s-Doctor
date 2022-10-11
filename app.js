    // ======= defining packages ===========//

const { default: mongoose } = require("mongoose")

const express = require("express"),
app = express(),
bodyParser = require("body-parser");


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


// ========== Routes ================ //

app.use("/", indexRoutes);

// ============= End Setup =============//

app.listen(3000, function(){
    console.log("hahahahaha you are good to goo..... :DDDDDDD")
})