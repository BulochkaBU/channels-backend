var express = require("express");
var router = express.Router();

var channels = require("../channels.js");

router.post("/:id", function (req, res, next) {
  const id = req.params.id;
  const message = req.body.message;

  const channel = channels.find((channel) => channel.id == id);
  if (channel) {
    channel.messages.push(message);
    res.status(201).send("Message added");
  } else {
    res.status(404).send("Channel not found");
  }
});

module.exports = router;
