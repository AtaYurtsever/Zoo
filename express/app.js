var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var vetRouter = require('./routes/vet');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var giftRouter = require('./routes/gshops');
var animalRouter = require('./routes/animalz');
var gtRouter = require('./routes/groupTours');
var evRouter = require('./routes/educationalEvents');
var coRouter = require('./routes/conservationOrganizations');
const { createTables } = require('./database/tables');
const { populate } = require('./database/populate');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

createTables();
populate();

app.use('/vet', vetRouter);
app.use('/gift', giftRouter );
app.use('/auth', usersRouter);
app.use('/animals', animalRouter);
app.use('/gt', gtRouter);
app.use('/ev', evRouter);
app.use('/co', coRouter);

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
