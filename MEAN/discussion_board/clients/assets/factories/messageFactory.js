app.factory('messageFactory', ['$http', '$route', function($http, $route){
  var factory = {};

  factory.createPost = function(data, userId, topicId){
    data._user = userId;
    data._topic = topicId
    $http.post('/createPost', data).then(function(res){
      $route.reload();
    })
  }

  factory.index = function(id, cb){
    $http.get('/getPosts/' + id).then(function(res){
      cb(res);
    })
  }

  factory.createComment = function(data, id){
    data._post = id;
    $http.post('/createComment/' + id, data)
  }

  return factory;
}])
