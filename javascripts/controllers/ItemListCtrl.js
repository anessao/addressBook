app.controller("ItemListCtrl", function($rootScope, $location, $scope, ItemFactory) {
	
	$scope.contacts = [];

	let getItems = () => {
	  ItemFactory.getItemList($rootScope.user.uid).then((itemz) => {
	    $scope.contacts = itemz;
	    console.log($scope.contacts);
	  }).catch((error) => {
	    console.log("get error", error);
	  });
	};

	getItems();

  $scope.deleteItem = (id) => {
  	ItemFactory.deleteContact(id).then((response) => {
  		getItems();
  		$location.url('/contacts/all');
  	}).catch((error) => {
  		console.log("delete Item error", error);
  	});
  };

  $scope.editItem = (id) => {
  	$location.url("/contact/edit/contact0");
  }
  // $scope.inputChange = (item) => {
  // 	ItemFactory.editItem(item).then(() => {
  // 	}).catch((error) => {
  // 		console.log("inputChange error", error);
  // 	});
  // };

});