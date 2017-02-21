var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 6789;

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect('mongodb://localhost/quoting_dojo');

var QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
});

var Quote = mongoose.model('quotes', QuoteSchema);

Quote.find({}, function(err, results){
  console.log(results);
});

//**********************************************

app.get('/', function(req, res){
  res.render('index');
});

app.get('/quotes', function(req, res){
  Quote.find({}, function(err, results){
    if (err) {
      console.log(err);
    };
    res.render('quotes', { quotes: results});
  });
});

app.post('/quotes', function(req, res){
  Quote.create(req.body, function(err){
    if (err) {
      console.log(err);
    };
  });
  res.redirect('/quotes');
});

//**********************************************

app.listen(port, function(){
  console.log('Listening on port ' + port);
})
