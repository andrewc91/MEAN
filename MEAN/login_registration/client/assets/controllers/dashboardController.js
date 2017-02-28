app.controller('dashboardController', ['$scope', 'usersFactory', function($scope, uF){

  uF.checkSession(function(data){
    $scope.currentUsers = data;
  })
}])
