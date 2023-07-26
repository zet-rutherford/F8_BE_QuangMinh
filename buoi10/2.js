function openFile(fn) {
  setTimeout(() => {
    console.log("File đã được mở");
    fn();
  }, 2000);
}
function readFile(fn) {
  setTimeout(() => {
    console.log("F8 - Học lập trình để đi làm");
    fn();
  }, 1000);
}
function closeFile() {
  setTimeout(() => console.log("File đã đóng"), 1000);
}

//callback
openFile(() => readFile(() => closeFile()));

//promise
function openFile_() {
  var Promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`File đã được mở`);
    }, 2000);
  });
  return Promise1;
}
function readFile_() {
  var Promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`F8 - Học lập trình để đi làm`);
    }, 1000);
  });
  return Promise2;
}
function openFile_() {
  var Promise3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`File đã đóng`);
    }, 1000);
  });
  return Promise3;
}

openFile_()
  .then((response) => {
    console.log(response);
    return readFile_();
  })
  .then((response) => {
    console.log(response);
    return openFile_();
  })
  .then((response) => {
    console.log(response);
  });
