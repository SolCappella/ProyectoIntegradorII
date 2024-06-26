var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
const db = require('./database/models');

const mainRouter = require('./routes/index');
const productRouter = require('./routes/product');
const profileRouter = require('./routes/profile');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// use session
app.use(session(
  { secret: 'proyectoprogra',
    resave: 'false',
    saveUninitialized: true }
));

// Aclaración: Al intentar hacer if (req.session.user != undefined) como lo haciamos en clase, la página no carga y no anda el nodemon. Por eso lo hicimos así.
app.use(function(req, res, next) {
  res.locals.user = req.session.user || undefined;
  return next();
});

app.use(function(req, res, next) {
  if (req.cookies.cookieUser  && !req.session.user) {
    let idCookie = req.cookies.cookieUser;
  console.log('Cargando cookie en la sesión:', idCookie);

    db.User.findByPk(idCookie)
      .then(user => {
        req.session.user = user;
        res.locals.user = user;
        return next();
      })
      .catch(err => {
        console.log(err);
        return next();
      });
  } else {
    return next();
  }
});

app.use('/', mainRouter);
app.use('/products',productRouter);
app.use('/profile', profileRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
