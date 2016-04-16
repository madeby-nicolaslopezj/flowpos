Template.store.onCreated(function() {
  this.autorun(() => {
    this.subscribe('storeInfo', FlowRouter.getParam('storeId'));
  });
});

Template.store.helpers({
  store: function() {
    return Stores.findOne(FlowRouter.getParam('storeId'));
  },
});
