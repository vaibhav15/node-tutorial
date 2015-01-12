var path = require('path');
var fs = require('fs');
var path = process.argv[2];
var ext = process.argv[3].toString;
fs.readdir(path.toString(),function callback (err,list));


function callback (err,list)
{   
    var result = {};
    var count = list.length;
    for (var i = 0 ; i <= count ;i++)
    {
        result[i] = list[i];
        if (path.extname(result[i]) == "."+ext)
        {
        console.log(result[i]);
        }
    }
}   
    
