var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.set('views', __dirname + '/static/view');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true} ));
app.use(express.static(__dirname + '/static'));

app.get('/', function(request, response) {
  response.render('index');
});

app.post('/result', function(request, response){
  response.render('results', {data : request.body});
});

app.listen(6789, function() {
  console.log("Listening on port 6789!");
});
