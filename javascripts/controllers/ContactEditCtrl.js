app.controller("ContactEditCtrl", function($location, $routeParams, $scope, ItemFactory){
	console.log("edit controller working");

	$scope.newContact = {};

  ItemFactory.getSingleContact($routeParams.id).then((results) => {
  	console.log($routeParams.id);
  	$scope.newContact = results.data;
  })
	.catch((error) => {
		console.log("getSingleItem error ", error);
	});
	console.log($scope.newContact);
  $scope.addNewContact = () => {
  	ItemFactory.editContact($scope.newContact).then(() => {
  		$location.url('/contacts/all');
  	}).catch((error) => {
  		console.log("edit item error", error);
  	});
  };

});