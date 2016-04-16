import {Payments} from 'meteor/nicolaslopezj:flow';

Meteor.publish('paymentInfo', function(paymentId) {
  check(paymentId, String);
  return Payments.find({ _id: paymentId });
});
