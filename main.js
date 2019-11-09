const http = require('http');
var myLogModule = require('./log.js');
var fsReadModule = require('./readingFile');
var fsWriteModule = require('./writingFile');
//let test = 'C:\\Temp\\Data.txt';


const app = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'content-Type': 'application/json' });
    res.write(JSON.stringify({ message: ' Hello World ' }));
    //let t = fsWriteModule.fsWrite();
    let t =fsReadModule.fsRead();
    console.log(t);
    //res.write(JSON.stringify({Hello: t}));
    res.end();
  } else if (req.url == '/student') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: 'Hello Student page' }));
    res.end();
  } else if (req.url == '/admin') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: 'Hello admin page' }));
    //fsReadModule.fsRead();
    res.end();
  } else {
    res.end('Invalid Request');
    myLogModule.error('This is the error please make sure you have enterd right URL')
  }
});
app.listen(3000);
console.log('Node.js web server at port 5000 is running');