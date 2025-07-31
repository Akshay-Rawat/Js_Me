const prompt = require("prompt-sync")();
let arr= new Array(5);

for(let  i =0;i < arr.length ; i++){
    arr[i] = Number(prompt("enter a number: "))
}

console.log(arr);