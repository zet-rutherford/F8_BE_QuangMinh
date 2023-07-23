//Bai4
var price = 120000;
Object.prototype.getCurrency = function (unit) {
  var digits = this.toString().split("");
  console.log(digits);

  for (var i = digits.length - 1; i >= 0; i -= 3) {
    console.log(digits[i]);
    if (i === digits.length - 1) {
      continue;
    }
    digits[i] += ",";
  }
  return digits.join("") + unit;
};

console.log(price.getCurrency("d"));
