var array = [1, 9, 5, 11, 3, 20, 16, 12, 8, 40, 22, 32, 19];

array.sort((a, b) => a - b);
console.log(`Số lớn nhất trong mảng là ${array[array.length - 1]}`);
console.log(`Số nhỏ nhất trong mảng là ${array[0]}`);
