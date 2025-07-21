var ans = Number(prompt("what is your age?"));

if(isNaN(ans)){
    console.log("wrong input");
}

else if(ans>=18){
    console.log("you can vote" );
}
else{
    console.log("you cannot vote");
}