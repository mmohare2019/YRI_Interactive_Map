var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

const session = require("express-session")
const memorystore = require("memorystore")(session)

var adminRouter = require("./routes/admin")
var messageRouter = require("./routes/message")
var inboxRouter = require("./routes/inbox")
var categoryRouter = require("./routes/category")
var locationRouter = require("./routes/location")

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade') // ?????????????

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(session({
  secret: "goober",
  cookie: {maxAge: 86400000},
  store: new memorystore({checkPeriod: 86400000}),
  resave: false,
  saveUninitialized: true,
}))

//app.set(express.static(path.join(__dirname, "react-app", "build")))

app.use("/admin", adminRouter)
app.use("/message", messageRouter)
app.use("/inbox", inboxRouter)
app.use("/category", categoryRouter)
app.use("/location", locationRouter)


// catch 404 and forward to error handler

app.use(function(req, res, next) {
  next(createError(404));
});


module.exports = app;
