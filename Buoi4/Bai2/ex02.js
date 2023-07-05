var reverseNumber = function (number) {
  var stringNumber = number.toString();
  if (stringNumber.length === 1) {
    return stringNumber;
  }
  var stringNumber_ = stringNumber.substring(0, stringNumber.length - 1);
  var reversedNumber = reverseNumber(stringNumber_);

  return stringNumber[stringNumber.length - 1] + reversedNumber;
};
console.log(reverseNumber(123456));
