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
        var fac=1;
        for(var i=1;i<=a;i++){
            fac *=i;
        }
        console.log(fac);
    }
    else{
        console.log("should add more than 0");
    }
}