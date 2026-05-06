const express = require("express");

const upload_controller = require("../controllers/uploadController");

const router = express.Router();

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

/* POST upload audiofile(s) */
router.post("/upload", function(req, res, next) {


});

module.exports = router;
