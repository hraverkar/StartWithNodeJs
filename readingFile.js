var fs = require('fs');
let test = 'C:\\Temp\\Data.txt';
var fileRead = {
  fsRead: fs.readFile(test, 'utf-8', function (err, data) {
    if (err) throw err;
    console.log(data);
  })
}
module.exports = fileRead;