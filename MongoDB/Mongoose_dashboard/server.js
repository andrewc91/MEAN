var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost/panda_db');

var PandaSchema = new mongoose.Schema({
  name: String,
  weight: Number,
  age: Number
});
mongoose.model('Panda', PandaSchema);
var Panda = mongoose.model('Panda');

//***********************************************

// MAIN PAGE
app.get('/', function(req, res){
  Panda.find({}, function(err, results){
    if (err) {
      console.log(err);
    }
    res.render('index', {pandas: results});
  });
});

// CREATE NEW PANDA
app.post('/', function(req, res){
  Panda.create(req.body, function(err, result){
    if (err){
      console.log(err);
    }
    res.redirect('/');
  });
});

// NEW PAGE
app.get('/new', function(req, res){
  res.render('new');
});

// SHOW PAGE
app.get('/:id', function(req, res){
  Panda.find({_id: req.params.id}, function(err, response){
    if(err){
      console.log(err);
    };
    res.render('show', {Panda:response[0] });
  });
});

// EDIT PANDA
app.get('/edit/:id', function(req, res){
  Panda.find({ _id: req.params.id}, function(err, response){
    if (err) {
      console.log(err);
    };
    console.log('Panda: ', response);
    res.render('edit', {Panda:response[0]});
  });
});

// UPDATE PANDA
app.post('/:id', function(req, res){
  Panda.update({ _id: req.params.id}, req.body, function(err, result){
    if (err){
      console.log(err);
    }
    res.redirect('/');
  });
});

// DELETE PANDA
app.post('/delete/:id', function(req, res){
  Panda.remove({ _id: req.params.id}, function(err, result){
    if (err) {
      console.log(err);
    };
    res.redirect('/');
  });
});

//***********************************************
app.listen(6789, function(){
  console.log('Listening on port 6789');
});
