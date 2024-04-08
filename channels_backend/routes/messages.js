var express = require("express");
var router = express.Router();

var channels = require("../channels.js");

router.get("/messages/:id", function (req, res, next) {
  const id = req.params.id;

  const channel = channels.find((channel) => channel.id == id);
  if (channel) {
    res.send(channel.messages);
  }
});

module.exports = router;
