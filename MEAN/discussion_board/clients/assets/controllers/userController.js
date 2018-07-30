app.controller('userController', ['$scope', 'userFactory', '$location', function($scope, uF, $location){
  $scope.create = function(){
    uF.create($scope.newUser, function(data){
      if (data.data.errors){
        $scope.error = data.data.errors;
        $scope.newUser = {};
      }
      else {
        $location.url('/dashboard');
      }
    })
  }

  $scope.login = function(){
    uF.login($scope.user, function(data){
      if (data.data.errors){
        $scope.logError = data.data.errors;
        $scope.user = {};
      }
      else {
        $location.url('/dashboard');
      }
    })
  }

}]);
