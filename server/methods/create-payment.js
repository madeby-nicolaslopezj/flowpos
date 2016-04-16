import {newOrder} from 'meteor/nicolaslopezj:flow';

Meteor.methods({
  createPayment: function ({ amount, description, buyerEmail }, storeId) {
    check(storeId, String);
    const store = Stores.findOne(storeId);
    const order = newOrder({
      amount,
      description,
      buyerEmail,
      paymentType: 1,
      successUrl: `success/${storeId}`,
      failureUrl: `failure/${storeId}`,
      meta: { storeId },
      storeEmail: store.flow.email,
      key: store.flow.key,
    });

    console.log('New payment generated', order.paymentId);
    return order.pack;
  },
});
