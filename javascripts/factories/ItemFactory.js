app.factory("ItemFactory", function($q, $http, FIREBASE_CONFIG){
  
  let getSingleContact = (id) => {
    console.log(id);
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/addressBook/${id}.json`)
      .then((resultz) => {
        resultz.data.id = id;
        resolve(resultz);
      }).catch((error) => {
        reject(error);
      });
    });
  };


  let getItemList = (userId) => {
    let itemz = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/addressBook.json?orderBy="uid"&equalTo="${userId}"`)
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

  let editContact = (contact) => {
    console.log("factory edit contact", contact);
    return $q((resolve, reject) => {
      $http.put(`${FIREBASE_CONFIG.databaseURL}/addressBook/${contact.id}.json`, JSON.stringify({
            phone: contact.phone,
            email: contact.email,
            firstName: contact.firstName,
            lastName: contact.lastName,
            address: {
              street: contact.address.street,
              city: contact.address.city,
              state: contact.address.state,
              zipcode: contact.address.zipcode
            },
            uid: item.uid
      })).then((results) => {
        resolve(results);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  let postNewContact = (newContact) => {
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/addressBook.json`, JSON.stringify(newContact))
      .then((results) => {
        resolve(results);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  return {getItemList:getItemList, deleteContact:deleteContact, getSingleContact:getSingleContact, editContact:editContact, postNewContact:postNewContact};
});