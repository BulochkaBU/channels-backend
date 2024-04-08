var createError = require("http-errors");
var express = require("express");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var channelsRouter = require("./routes/channels");
var messagesRouter = require("./routes/messages");
var addMessageRouter = require("./routes/addMessage");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", indexRouter);
app.use("/", channelsRouter);
app.use("/", messagesRouter);
app.use("/", addMessageRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
