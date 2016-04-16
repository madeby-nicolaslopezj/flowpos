numeral.language('es', {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  abbreviations: {
    thousand: 'K',
    million: 'MM',
    billion: 'B',
    trillion: 'T'
  },
  ordinal: function (number) {
    var b = number % 10;
    return (b === 1 || b === 3) ? 'er' :
    (b === 2) ? 'do' :
    (b === 7 || b === 0) ? 'mo' :
    (b === 8) ? 'vo' :
    (b === 9) ? 'no' : 'to';
  },
  currency: {
    symbol: '$'
  }
});
numeral.language('es');
