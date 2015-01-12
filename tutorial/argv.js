var i ;
var arg = [];
arg = process.argv;
var sum = 0 ;
for (i=2;i<=arg.length - 1;i++)
    {
        sum = sum + Number(arg[i]);
 
    }
console.log(sum);
