var prompt = require('prompt-sync')();
var n = prompt("Number likh = ")

for(let i =0;i<=n;i++){
    for(let j = 1;j<=n;j++){
        if(i+j == 6 || i==j){
            process.stdout.write("*")
        }
        else{
            process.stdout.write(" ")
        }
    }
    console.log()

}