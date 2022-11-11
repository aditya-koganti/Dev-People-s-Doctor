const mongoose = require("mongoose");

let appointmentSchema  = new mongoose.Schema({
    firstName: String,
    middleName: String,
    LastName: String,
    date: String,
    gender: String,
})

module.exports = mongoose.model("Appointment", appointmentSchema);