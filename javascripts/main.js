
// app.controller("itemCtrl", ($http, $q, $scope, FIREBASE_CONFIG) => {
  
//   $scope.addContactShow = false;
//   $scope.addressItems = [];
//   $scope.showAddContact = () => {
//     $scope.addContactShow = true;
//   };

//   let getItemList = () => {
//     let itemz = [];
//     return $q((resolve, reject) => {
//       $http.get(`${FIREBASE_CONFIG.databaseURL}/addressBook.json`)
//       .then((fbItems) => {
//         let itemCollection = fbItems.data;
//           Object.keys(itemCollection).forEach((key) => {
//             itemCollection[key].id=key;
//             itemz.push(itemCollection[key]);
//           });
//         resolve(itemz);
//       })
//       .catch((fbError) => {
//         reject(fbError);
//       });
//     });

//   };
//   let getItems = () => {
//     getItemList().then((itemz) => {
//       $scope.addressItems = itemz;
//     }).catch((error) => {
//       console.log("get error", error);
//     });
//   };
//   getItems();


//   let postNewItem = (newItem) => {
//     return $q((resolve, reject) => {
//       $http.post(`${FIREBASE_CONFIG.databaseURL}/addressBook.json`, JSON.stringify(newItem))
//       .then((results) => {
//         resolve(results);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//     });
//   };

//   $scope.addNewContact = () => {
//     postNewItem($scope.newContact).then(() => {
//       $scope.newContact = {};
//       $scope.addContactShow = !$scope.addContactShow;
//       getItems();
//     }).catch((error) => {
//         console.log("add error", error);
//     });
//   };

// });