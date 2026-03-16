let random =  Math.floor(Math.random()*100 +1)
console.log(random);

let guess=-1;
while(guess !== random){
    guess = Number(prompt("Guess number"))
    if(isNaN(guess) || guess<1 || guess>100){
        console.log("try again 1- 100")
        continue
    }
    if(guess>random){
        console.log("too high")
    }else if(guess<random){
        console.log("too low")
    }else{
        console.log("congo");
        
    }
}