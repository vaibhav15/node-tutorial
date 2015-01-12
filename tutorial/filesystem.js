var fs = require('fs');
var path = process.argv;
var buff = fs.readFileSync(path[2].toString());
var arr = buff.toString();
var ch = arr.split('\n');
console.log(ch.length - 1);
