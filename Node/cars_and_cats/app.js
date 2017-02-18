var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response) {
  console.log('client request URL:', request.url);
  if (request.url === '/cars') {
    fs.readFile('views/cars.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if (request.url === '/cats') {
    fs.readFile('views/cats.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if (request.url === '/cars/new') {
    fs.readFile('views/add_cars.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/images/car2.png'){
  // notice we won't include the utf8 encoding
    fs.readFile('./images/car2.png', function(errors, contents){
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/images/cat1.jpg'){
  // notice we won't include the utf8 encoding
    fs.readFile('./images/cat1.jpg', function(errors, contents){
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  }

  else if(request.url === '/stylesheets/style.css'){
    fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-type': 'text/css'});
      response.write(contents);
      response.end();
    });
  }
  else {
    response.end('File not found!');
  }
});
server.listen(7077);
console.log('Running in localhost at port 7077');
