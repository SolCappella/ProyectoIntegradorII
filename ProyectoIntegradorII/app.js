var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mainRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const productAddRouter = require('./routes/product-add');
const productRouter = require('./routes/product');
const profileEditRouter = require('./routes/profile-edit');
const profileRouter = require('./routes/profile');
const registerRouter = require('./routes/register')
const searchRouter = require('./routes/search-result')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/login',loginRouter);
app.use('/product-add',productAddRouter);
app.use('/product',productRouter);
app.use('/profile/edit', profileEditRouter);
app.use('/profile', profileRouter);
app.use('/register',registerRouter);
app.use('/search', searchRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;