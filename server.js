const mainPage = require('./module/html.js');
console.log(mainPage);

const http = require('http');

const server = http.createServer(function(request, response){
  response.statusCode = 200;
  response.setHeader('Content-Type','text/html');
  response.write('<p>test</p>');
  response.end(mainPage);
});

server.listen(2080, function(error) {
  if (error) {
    console.error('서버 안돌아감');
  } else {
    console.log('서버 돌아감');
  }
})