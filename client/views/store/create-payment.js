Template.storeCreatePayment.onRendered(function () {
  //Session.set('pack', null);
  //Session.set('doc', null);
});

Template.storeCreatePayment.helpers({

  isProduction() {
    return this.isProduction;
  },

  getDoc() {
    return Session.get('doc');
  },

  getPack() {
    return Session.get('pack');
  },

  getSchema() {
    return new SimpleSchema({
      amount: {
        type: Number,
        label: 'Monto'
      },
      description: {
        type: String,
        label: 'Descripción',
      },
      buyerEmail: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: 'Email',
      },
    });
  },
});

AutoForm.hooks({
  newPaymentForm: {
    onSubmit: function (insertDoc) {
      console.log('Generating payment', insertDoc);
      Session.set('doc', null);
      Session.set('pack', null);
      Meteor.call('createPayment', insertDoc, FlowRouter.getParam('storeId'), (error, response) => {
        if (error) {
          this.done(error);
          console.log('Error', error);
        } else {
          Session.set('doc', insertDoc);
          Session.set('pack', response);
          this.done();
        }
      });
      return false;
    },
  },
});
