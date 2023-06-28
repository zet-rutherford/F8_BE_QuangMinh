var x = 3;
if (x < 0 && Number.isInteger(x) == false) {
  console.log(`Nhập lại x đê`);
} else if (x == 1 || x == 0) {
  console.log(`Không phải số nguyên tố`);
} else if ((x = 2)) {
  console.log(`chuẩn nguyên tố rồi đấy`);
} else {
  for (var i = 2; i < Math.sqrt(x); i++) {
    if (x % i == 0) {
      console.log(`Không phải nguyên tố nhé`);
    } else {
      console.log(`chuẩn nguyên tố rồi đấy`);
    }
  }
}
