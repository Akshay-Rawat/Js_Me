var a = Number(prompt("Enter no"));

if(a===null){
    console.log("cancelled");
    
}

if(isNaN(a)){
    console.log("invalid")
}
else{
    if(a>0){
        let sum = 0;
        for(let i =1;i<=a;i++){
            sum +=  i
        }
        console.log(sum);
    }
    else{
        console.log("should be positive more than 0");
    }
}