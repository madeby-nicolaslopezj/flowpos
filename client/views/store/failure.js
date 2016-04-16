import {Payments} from 'meteor/nicolaslopezj:flow';

Template.storeFailure.onCreated(function() {
  this.autorun(() => {
    this.subscribe('paymentInfo', FlowRouter.getQueryParam('p'));
  });
});

Template.storeFailure.helpers({
  payment: function() {
    return Payments.findOne(FlowRouter.getQueryParam('p'));
  }
});
