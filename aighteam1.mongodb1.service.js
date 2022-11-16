const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/aighteam1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false
});

const Doctor = require("./models/doctor");

class aighteam1Mongodb1Service {
  constructor() {
    this.Doctor = Doctor;
  }

  get_all_doctors() {
    Doctor.find({}, async function (err, doctors) {
      if (err) {
        console.log(err);
      } else {
        console.log(doctors[1]);
        return doctors[1];
      }
    });
  }
}

module.exports = aighteam1Mongodb1Service;
