app.controller('wallController', ['$scope', 'userFactory', 'wallFactory', function($scope, uF, wF){
  $scope.list = [];

  uF.checkSession(function(data){
    $scope.currentUser = data.data;
  })

  $scope.createMessage = function(){
    wF.createMessage($scope.newMessage)
    $scope.newMessage = {};
  }

  wF.index(function(data){
    $scope.list = data;
    console.log(data);
  })

  $scope.createComment = function(newComment, id){
    wF.createComment(newComment, id)
  }


}])
