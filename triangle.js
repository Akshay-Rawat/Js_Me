var prompt = require("prompt-sync")()

let a = Number(prompt("Enter value"))
let b = Number(prompt("Enter value"))
let c = Number(prompt("Enter value"))

sum = a+b+c

if(sum == 180 && a>0 && b>0 && c>0){
    console.log("Valid")
    if(a==b && b==c ){
        console.log("Equilateral triangle")
    }
    else if(a==b || a==c || b==c ){
        console.log("isoceles")
    }
    else {
        console.log("Scalene")
    }
}else{
    console.log("invalid")
}