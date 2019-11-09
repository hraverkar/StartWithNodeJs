var fs = require('fs');
let test = 'C:\\Temp\\Data.txt';
var fileWrite = {
  fsWrite : fs.appendFile(test, 'Testing done by Harshal Raverkar', function (err, data) {
    if (err) throw err;
    console.log('Write Operation Completed');
  })
}
module.exports = fileWrite;