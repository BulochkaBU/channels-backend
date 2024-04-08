var express = require("express");
var router = express.Router();

var channels = require("../channels.js");

router.get("/channels", function (req, res, next) {
  res.send(channels);
});

module.exports = router;
