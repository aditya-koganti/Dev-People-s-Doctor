const express       = require("express");
const router        = express.Router();

// ========== Landing ========== //

router.get("/", function (req, res) {
    res.render("landing");
})

module.exports = router;