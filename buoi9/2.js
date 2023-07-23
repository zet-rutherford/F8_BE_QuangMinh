//Bai2
Array.prototype.reduce2 = function (callback, initialValue) {
  if (initialValue === undefined) {
    initialValue = this[0];
    if (initialValue) {
      for (var i = 0; i < this.length - 1; i++) {
        initialValue = callback(initialValue, this[i + 1], i + 1, this);
      }
    }
    return initialValue;
  } else {
    if (initialValue) {
      for (var i = 0; i < this.length; i++) {
        initialValue = callback(initialValue, this[i], i, this);
      }
    }
    return initialValue;
  }
};

var arr = [1, 3, 2, 5, 7, 4];
var result = arr.reduce2(function (prev, current, a, b) {
  console.log(prev, current);
  return current;
}, 20);
console.log(result);
