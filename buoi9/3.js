//Bai 3
var arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
Array.prototype.filter2 = function (callback) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr[arr.length] = this[i];
    }
  }
  return arr;
};
var result = arr.filter2(function (element, i, result) {
  console.log(result);
  return element > 15;
});
console.log(result);
