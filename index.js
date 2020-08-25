const http = require("http");
const host = "localhost";
const port = 8000;
const requestListener = function (req, res) {
  switch (req.url) {
    case "/books":
      res.writeHead(200);
      res.end("Hello, World!");
      break;

    default:
      break;
  }
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
