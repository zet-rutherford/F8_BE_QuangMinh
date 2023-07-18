var customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

function Customer(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

var createCustomers = function (customers) {
  const customersObj = customers.map(
    (customer) => new Customer(customer.name, customer.age, customer.address)
  );

  //sắp xếp tăng dần
  customersObj.sort((a, b) => a.age - b.age);

  customersObj.forEach((customer) => {
    var arrayName = customer.name.split(" ");
    arrayName.splice(1, 1);
    customer.shortName = arrayName.join(" ");
  });

  return customersObj;
};

console.log(createCustomers(customers));
