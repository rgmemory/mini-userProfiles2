angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  $scope.getUsers = function() {
  	mainServicce.getusers().then(function(){
      $scope.users = response.data.data;
    });
  }


  $scope.getUsers();

});
