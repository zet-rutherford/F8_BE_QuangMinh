var fibonacci = function (n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};
for (let index = 1; index <= 10; index++) {
  console.log(fibonacci(index));
}
