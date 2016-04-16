Template.home.onCreated(function() {
  this.subscribe('myStores');
});

Template.home.helpers({
  stores: function() {
    return Stores.find({ usersIds: Meteor.userId() }).fetch();
  },
});
