var prompt = require('prompt-sync')();
var n = prompt("Number likh = ")

for(let i =0;i<=n;i++){
    for(let j = 1;j<=2*n-1;j++){
        if(i==j || i+j==2*n){
            process.stdout.write("*")
        }
        else{
            process.stdout.write(" ")
        }
    }
    console.log()

}