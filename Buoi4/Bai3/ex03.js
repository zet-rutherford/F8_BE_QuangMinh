var convertNumber = function (number) {
  if (number === 0) {
    return "Không";
  }
  var stringNumber = number.toString();

  var makeText = function (digit) {
    switch (digit) {
      case "0":
        return `Không`;
        break;
      case "1":
        return `Một`;
        break;
      case "2":
        return `Hai`;
        break;
      case "3":
        return `Bar`;
        break;
      case "4":
        return `Bốn`;
        break;
      case "5":
        return `Năm`;
        break;
      case "6":
        return `Sáu`;
        break;
      case "7":
        return "Bảy";
        break;
      case "8":
        return "Tám";
        break;
      case "9":
        return "Chín";
        break;
    }
  };
  if (number >= 1000 && number <= 9999) {
    var thousand = makeText(stringNumber[0]);
    var hundred = makeText(stringNumber[1]);
    var dozen = makeText(stringNumber[2]);
    var unit = makeText(stringNumber[3]);

    if (((stringNumber[1] === stringNumber[2]) === stringNumber[3]) === "0") {
      return `${thousand} Ngàn`;
    }
    if ((stringNumber[2] === stringNumber[3]) === "0") {
      return `${thousand} Ngàn ${hundred} Trăm`;
    }
    if (stringNumber[2] === "0" && stringNumber[3] !== "0") {
      return `${thousand} Ngàn ${hundred} Trăm Linh ${unit}`;
    }
    if (stringNumber[3] === "0" && stringNumber[2] !== "0") {
      return `${thousand} Ngàn ${hundred} Trăm ${dozen} Mươi`;
    }
    if (
      stringNumber[0] !== "0" &&
      stringNumber[1] !== "0" &&
      stringNumber[2] !== "0" &&
      stringNumber[3] !== "0"
    ) {
      return `${thousand} Ngàn ${hundred} Trăm ${dozen} Mươi ${unit}`;
    }
  }

  if (number >= 100 && number <= 999) {
    var hundred = makeText(stringNumber[0]);
    var dozen = makeText(stringNumber[1]);
    var unit = makeText(stringNumber[2]);
    if ((stringNumber[1] === stringNumber[2]) === "0") {
      return `${thousand} Trăm`;
    }
    if (stringNumber[1] === "0") {
      return `${hundred} Trăm Linh ${unit}`;
    }
    if (stringNumber[2] === "0") {
      return `${hundred} Trăm ${dozen} Mươi`;
    }
    return `${hundred} Trăm ${dozen} Mươi ${unit}`;
  }

  if (number >= 10 && number <= 99) {
    var dozen = makeText(stringNumber[0]);
    var unit = makeText(stringNumber[1]);
    if (stringNumber[0] === "1" && stringNumber[1] !== "0") {
      return `Mười ${unit}`;
    }
    if (stringNumber[0] === "1" && stringNumber[1] === "0") {
      return `Mười`;
    }
    return `${dozen} Mươi ${unit}`;
  }
  if (number >= 0 && number <= 9) {
    return makeText(number[0]);
  }
};
console.log(convertNumber(100));
