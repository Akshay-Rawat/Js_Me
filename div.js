const prompt = require("prompt-sync")();
var a = Number(prompt("enter number for answer"))

if(a===null){
    console.log("undefined")
}

if(isNaN(a)){
    console.log("Invalid")
}
else{
    if(a>0){
       for(var i=1;i<=Math.floor(a/2);i++){
        if(a%i ===0){
            console.log(i)
        }
        }
        console.log(a)
    }
    else{
        console.log("should add more than 0");
    }
}