var a = 1000000000000,
  b = 10000000,
  c = 1000;
if (a > b) {
  b = a + (a = b) - b; //đổi chỗ a và b
}
if (b > c) {
  c = b + (b = c) - c; //đổi chỗ b và c
}
if (a > b) {
  b = a + (a = b) - b; //đổi chỗ a và b trong trường hợp sau khi hoán đổi 2 lần thì a lại lớn hơn b
}
console.log(`Thứ tự của dãy sau khi sắp xếp là ${a} ${b} ${c}`);
