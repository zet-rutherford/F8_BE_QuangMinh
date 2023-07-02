var sum = function (n) {
  var total = 0;
  for (let index = 1; index <= n; index++) {
    total += index * (index + 1);
  }
  return total;
};
console.log(sum(2));
