Stores = new orion.collection('stores', {
  singularName: 'tienda',
  pluralName: 'tiendas',
  title: 'Tiendas',
  link: {
    title: 'Tiendas',
  },
  tabular: {
    columns: [
      { data: 'name', title: 'Nombre' },
    ],
  },
});

Stores.attachSchema({
  name: {
    type: String,
    label: 'Nombre',
  },
  usersIds: orion.attribute('users', {
    label: 'Admins',
    optional: true,
  }, {
    publicationName: 'stores.usersIds',
  }),
  flow: {
    type: Object,
    label: 'Flow',
  },
  'flow.email': {
    type: String,
    label: 'Email',
    regEx: SimpleSchema.RegEx.Email,
  },
  'flow.key': {
    type: String,
    label: 'Key',
    autoform: {
      type: 'textarea',
    },
  },
  isProduction: {
    type: Boolean,
    label: 'Es producción',
  },
});
