var mongoose = require("mongoose")

doctorSchema = new mongoose.Schema({
    name: String,
    department: String,
    rating: Number,
    specialities: String,
    description: String
})

module.exports = mongoose.model("Doctor", doctorSchema)