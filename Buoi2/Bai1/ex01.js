var trip = 20;
var price;
if (trip > 0) {
  if (0 < trip <= 1) {
    price = 15000;
  }
  if (1 < trip <= 5) {
    price = trip * 13500;
  }
  if (5 < trip <= 120) {
    price = trip * 11000;
  }
  if (120 < trip) {
    price = 11000 * trip * 0.9;
  }
  console.log(`Số tiền cần trả ${price}`);
} else {
  console.log("Nhập lại quãng đường");
}
