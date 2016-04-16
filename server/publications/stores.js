Meteor.publish('myStores', function() {
  return Stores.find({ usersIds: this.userId }, { fields: { flow: 0 } });
});

Meteor.publish('storeInfo', function(storeId) {
  check(storeId, String);
  return Stores.find(storeId, { fields: { flow: 0 } });
})
