function sum(...numbers) {
  var total = 0;
  for (var element of numbers) {
    if (typeof element !== "number") {
      throw new Error("Dữ liệu truyền vào không hợp lệ");
    }
    total += element;
  }
  return total;
}
