app.controller("ContactNewCtrl", function($rootScope, $location, $scope, ItemFactory){
	$scope.addNewContact = () => {
	$scope.newContact.uid = $rootScope.user.uid;
    ItemFactory.postNewContact($scope.newContact).then(() => {
      $scope.newContact = {};
      $location.url("/contacts/all");
    }).catch((error) => {
        console.log("add error", error);
    });
  };

});