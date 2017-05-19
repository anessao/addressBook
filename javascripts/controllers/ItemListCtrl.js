app.controller("ItemListCtrl", function($location, $scope, ItemFactory) {
	
	$scope.contacts = [];

	let getItems = () => {
	  ItemFactory.getItemList().then((itemz) => {
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

  // $scope.inputChange = (item) => {
  // 	ItemFactory.editItem(item).then(() => {
  // 	}).catch((error) => {
  // 		console.log("inputChange error", error);
  // 	});
  // };

});