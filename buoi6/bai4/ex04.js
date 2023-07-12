var number = [1, 10, 4, 16, 20, 7];
var element = 8;
var newNumber = [];

number.sort((a, b) => a - b);

for (var i in number) {
  if (number[i] >= 8) break;
}
newNumber = number
  .slice(0, i)
  .concat(element)
  .concat(number.slice(-1 - i));
console.log(newNumber);
