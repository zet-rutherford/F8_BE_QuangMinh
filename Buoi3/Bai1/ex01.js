function listEvenOddNumbers(num) {
  var evenNumber = "";
  var oddNumber = "";

  for (let i = 2; i < num; i += 2) {
    evenNumber += i + " ";
  }
  console.log("Danh sách các số chẵn:", evenNumber);

  for (let i = 1; i < num; i += 2) {
    oddNumber += i + " ";
  }
  console.log("Danh sách các số lẻ:", oddNumber);
}

// Ví dụ sử dụng

listEvenOddNumbers(10);
