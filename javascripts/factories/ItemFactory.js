app.factory("ItemFactory", function($q, $http, FIREBASE_CONFIG){
  let getItemList = () => {
    let itemz = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/addressBook.json`)
      .then((fbItems) => {
        let itemCollection = fbItems.data;
          if (itemCollection !== null){
            Object.keys(itemCollection).forEach((key) => {
              itemCollection[key].id=key;
              itemz.push(itemCollection[key]);
            });
          }
        resolve(itemz);
      })
      .catch((fbError) => {
        reject(fbError);
      });
    });
  };

  let deleteContact = (itemId) => {
    return $q((resolve, reject) => {
    $http.delete(`${FIREBASE_CONFIG.databaseURL}/addressBook/${itemId}.json`)
    .then((results) => {
      resolve(results);
    })
    .catch((error) => {
      reject(error);
    });
    });
  };

  return {getItemList:getItemList, deleteContact:deleteContact};
});