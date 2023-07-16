var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

var flatten = function (arr) {
  return arr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
};
var arr_2 = flatten(arr);
console.log(arr_2);

var numArr = [];
strArr = [];
boolArr = [];
for (let i = 0; i < arr_2.length; i++) {
  if (typeof arr_2[i] === "string") {
    strArr.push(arr_2[i]);
  }
  if (typeof arr_2[i] === "number") {
    numArr.push(arr_2[i]);
  }
  if (typeof arr_2[i] === "boolean") {
    boolArr.push(arr_2[i]);
  }
}
arr = [numArr, strArr, boolArr];
console.log(arr);
