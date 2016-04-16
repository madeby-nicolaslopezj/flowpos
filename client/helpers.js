Template.registerHelper('formatDate', function (date, format) {
  return moment(date).format(format);
});

Template.registerHelper('formatNumber', function (number, format) {
  format = (_.isString(format) && format) || '0,0';
  return numeral(number).format(format);
});

Template.registerHelper('formatMoney', function (number) {
  return numeral(number).format('$0,0');
});
