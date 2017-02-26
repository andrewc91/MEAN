app.factory('friendFactory', function($http){
  var factory = {};

  factory.create = function(data){
    console.log(data);
    $http.post('/friends/create', data);
  }

  factory.index = function(callback){
    $http.get('/friends/index').then(function(data){
      callback(data);
    })
  }

  factory.show = function(id, callback){
    // console.log(id);
    $http.get('/friends/show/' + id).then(function(data){
      callback(data);
    })
  }

  factory.delete = function(id){
    // console.log(id);
    $http.post('/friends/delete/' + id)
  }

  factory.update = function(data, id){
    // console.log(data);
    // console.log(id);
    $http.post('/friends/edit/' + id, data)
  }

  return factory;
})
