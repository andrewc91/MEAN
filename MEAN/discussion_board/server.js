var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var port = 8000;
var session = require('express-session');
var app = express();

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(express.static(path.join(__dirname, '/clients')));
app.use(express.static(path.join(__dirname, '/bower_components')));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function(){
  console.log(`Listening on port ${port}`);
})
