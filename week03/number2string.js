function convertNumberToString(number, x = 10) {
  let integer = Math.floor(number);
  let fraction = null;
  if (x === 10) {
    fraction = ('' + number).match(/\.\d*/)[0];
  }
  let string = '';
  while (integer > 0) {
    string = integer % x + string;
    integer = Math.floor(integer / x);
  }
  return fraction ? string + fraction : string;
}