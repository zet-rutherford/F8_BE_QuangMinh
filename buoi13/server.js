console.log(__dirname);
console.log(__filename);

const http = require("http");

const hostname = "127.0.0.1";
const port = 6996;

let Render = require("./src/render/Render");
const data = require("./src/data/data");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  Data.index(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
