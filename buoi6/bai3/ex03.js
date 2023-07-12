var arr = [1, 2, 1, 3, 4, 3, 5, 6, 3, 4, 8, 5, 4, 1, 1, 2, 0, 20, 5, 6];
var newArr = [];
var index;

var isDuplicated = function (index) {
  for (var j = 0; j < newArr.length; j++) {
    if (arr[index] === newArr[j]) return true;
  }

  return false;
};

for (index in arr) {
  if (isDuplicated(index) === true) continue;
  else newArr[newArr.length] = arr[index];
}

console.log(newArr);
