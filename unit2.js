let unit =300
let amount =0 
if(unit<=50){
    amount = unit *1
}
else if(unit<=150){
    amount = 50*1 + (unit -50)*2
}
else if( unit<=250){
    amount = 50*1 + 100*2 + (unit -150)*3
}
else{
    amount = 50*1 + 100*2 + 100*3 + (unit-250)*4 
}
console.log(amount)
if(amount >150){
    a = amount*0.2
    console.log(amount+a)
    console.log(a)
    
}