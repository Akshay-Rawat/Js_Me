let prompt = require('prompt-sync')();
let n = Number(prompt("Number likh"))

for(let i =n;i>=1;i--){
    for(let j =1;j<=i;j++){
        process.stdout.write("*")
    }
    console.log();
}