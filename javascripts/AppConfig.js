app.run(function(FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/contacts/all', {
      templateUrl: 'partials/contactList.html',
      controller: 'ItemListCtrl'
    })
    .when('/contacts/new', {
      templateUrl: 'partials/addNew.html',
      controller: 'ItemNewCtrl'
    })
    .when('/contact/edit/:id', {
      templateUrl: 'partials/editContact.html',
      controller: 'ItemEditCtrl'
    })
    .otherwise('/contacts/all');
});