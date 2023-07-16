var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var result = arrB.reduce((acc, cur) => {
  if (arrA.includes(cur)) {
    acc.push(cur);
  }
  return acc;
}, []);

console.log(result);
