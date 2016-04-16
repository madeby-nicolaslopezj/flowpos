import {Payments} from 'meteor/nicolaslopezj:flow';

Template.storeSuccess.onCreated(function() {
  this.autorun(() => {
    this.subscribe('paymentInfo', FlowRouter.getQueryParam('p'));
  });
});

Template.storeSuccess.helpers({
  payment: function() {
    return Payments.findOne(FlowRouter.getQueryParam('p'));
  }
});
