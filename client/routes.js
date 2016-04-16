FlowRouter.route('/', {
  name: 'home',
  action: function (params, queryParams) {
    BlazeLayout.render('layout', { content: 'home' });
  },
});

orion.accounts.addProtectedRoute('home');

FlowRouter.route('/store/:storeId', {
  name: 'store',
  action: function (params, queryParams) {
    BlazeLayout.render('layout', { content: 'store' });
  },
});

orion.accounts.addProtectedRoute('store');

FlowRouter.route('/success/:storeId', {
  name: 'storeSuccess',
  action: function (params, queryParams) {
    BlazeLayout.render('layout', { content: 'storeSuccess' });
  },
});

orion.accounts.addProtectedRoute('storeSuccess');

FlowRouter.route('/failure/:storeId', {
  name: 'storeFailure',
  action: function (params, queryParams) {
    BlazeLayout.render('layout', { content: 'storeFailure' });
  },
});

orion.accounts.addProtectedRoute('storeFailure');
