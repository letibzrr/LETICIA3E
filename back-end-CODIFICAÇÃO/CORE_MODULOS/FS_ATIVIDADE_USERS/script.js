const fs = require("node:fs");
const http = require("node:http");

const PORT = 3333;

const server = http.createServer((request, response) => {
  const urlInfo = require("node:url").parse(request.url, true);
  const name = urlInfo.query.name;

  if (!name) {
    fs.readFile("index.html", (err, data) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      return response.end();
    });
  } else {
    const nameNewLine = name + ",\r\n";
    // writefile = só escrita
    // appendfile = escreve e junta
    fs.appendFile("file.txt", nameNewLine, (err) => {
      response.writeHead(302, {
        Location: "/",
      });
      return response.end();
    });
  }
});

server.listen(PORT, () => {
  console.log(`servidor on PORT: ${PORT}`);
});
