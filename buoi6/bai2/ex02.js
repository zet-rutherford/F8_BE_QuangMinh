var isPrime = function (x) {
  if (x <= 0 || x === 1) {
    return false;
  }
  if (x === 2 || x === 3) {
    return true;
  }
  for (let index = 2; index < Math.sqrt(x); index++) {
    if (x % index === 0) {
      return false;
    }
  }
  return true;
};

var arr = [1, 11, 22, 13, 44, 35, 9, 7, 56, 2, 3];
var sumPrime = 0;
var countPrime = 0;
for (var index in arr) {
  if (isPrime(arr[index]) === true) {
    sumPrime += arr[index];
    countPrime++;
  }
}
console.log(`Trung bình các số nguyên tố ${sumPrime / countPrime}`);
