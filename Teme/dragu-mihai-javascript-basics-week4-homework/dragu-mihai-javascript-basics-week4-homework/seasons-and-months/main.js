//var september = 'the season is Autumn';
//var october = 'the season is Autumn';
//var november = 'the season is Autumn';
//var december = 'the season is Winter';
//var january = 'the season is Winter';
//var february = 'the season is Winter.';
//var march = 'the season is Spring.';
//var april = 'the season is Spring.';
//var may = 'the season is Spring.';
//var june = 'the season is Summer.';
//var july = 'the season is Summer.';
//var august = 'the season is Summer.';

// type "console.log(name of the month with no CAPS);" in the console :D

// OR



var winter = [
  'December', 'January', 'February'
];
console.log(winter);

var spring = [
  'March', 'April', 'May'
];
console.log(spring);

var summer = [
  'June', 'July', 'August'
];
console.log(summer);

var autumn = [
  'September', 'October', 'November'
];
console.log(autumn);

var seasons = [
  'the season is Winter.',
  'the season is Spring.',
  'the season is Summer.',
  'the season is Autumn.'
];
console.log(seasons);

var validMonth = 'Please enter a valid month!';


if (month === 'January' || month === 'February' || month === 'December') {
  console.log(seasons[0]);
} else if (month === 'March' || month === 'April' || month === 'May') {
  console.log(seasons[1]);
} else if (month === 'June' || month === 'July' || month === 'August') {
  console.log(seasons[2]);
} else if (month === 'October' || month === 'November' || month === 'December') {
  console.log(seasons[3])
} else {
  console.log(validMonth)
};

var month = 'November';
console.log(month);






