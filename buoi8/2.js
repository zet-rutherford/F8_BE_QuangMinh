function user(name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
}
var data = [];
var handleRegister = function (name, password, email, role) {
  if (!name || !password || !email) {
    console.log("Thông tin không đầy đủ");
    return;
  }

  var existingUser = data.find((user) => user.email === email);

  if (existingUser) {
    console.log("Email đã tồn tại trong hệ thống");
    return;
  }

  var newUser = new user(name, password, email, role);
  data.push(newUser);

  return newUser;
};

var handleLogin = function (email, password, role) {
  var loggedUser = data.find(
    (user) => user.email === email && user.password === password
  );

  if (role !== "user") {
    console.log("Bạn không phải là người dùng hợp lệ");
    return;
  }

  if (!loggedUser) {
    console.log("thông tin đăng nhập không hợp lệ");
    return;
  }
  return loggedUser;
};

const userA = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com",
  "user"
);

// Đăng nhập
const loggedInUser1 = handleLogin("nguyenvana@email.com", "123456", "user");
console.log("dataLogin =", loggedInUser1);
