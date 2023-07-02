var sumEvenOddNumber = function (a, b) {
  var sumEven = 0;
  var sumOdd = 0;
  for (let index = a; index <= b; index++) {
    if (index % 2 === 0) {
      sumEven += index;
    } else {
      sumOdd += index;
    }
  }

  console.log(`Tổng số chẫn là ${sumEven}`);
  console.log(`Tổng số lẻ là ${sumOdd}`);
};
sumEvenOddNumber(5, 9);
