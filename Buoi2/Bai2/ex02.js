var electricity = 305;
var price;
if (electricity > 0) {
  if (0 < electricity <= 50) {
    price = electricity * 1678;
  }
  if (50 < electricity <= 100) {
    price = (electricity - 50) * 1734 + 50 * 1678;
  }
  if (100 < electricity <= 200) {
    price = (electricity - 100) * 2014 + 50 * (1678 + 1734);
  }
  if (200 < electricity <= 300) {
    price = (electricity - 200) * 2536 + 100 * 2014 + 50 * (1678 + 1734);
  }
  if (300 < electricity <= 400) {
    price =
      (electricity - 300) * 2834 + 100 * 2536 + 100 * 2014 + 50 * (1678 + 1734);
  }
  if (400 < electricity) {
    price =
      (electricity - 400) * 2927 +
      100 * 2834 +
      100 * 2536 +
      100 * 2014 +
      50 * (1678 + 1734);
  }
  console.log(`Tiền điện cần trả = ${price}`);
} else {
  console.log(`Nhập lại số điện đê`);
}
