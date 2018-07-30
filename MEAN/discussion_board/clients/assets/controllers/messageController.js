app.controller('messageController', ['$scope', 'messageFactory', '$routeParams', function($scope, mF, $routeParams){
  $scope.createPost = function(){
    mF.createPost($scope.newPost, userId, $routeParams.id)
  }

  mF.index($routeParams.id, (function(data){
    $scope.list = data.data;
    // console.log($scope.list);
  }))

  $scope.createComment = function(data, id){
    mF.createComment(data, id)
  }
}])
