function digit(n){
    let count = 0
    while(n>0){f
        count++
        n=Math.floor(n/10)
    }
    return count
}

function add(n){
   
    let sum = 0
    while(n>0){
        last = n%10
        sum = sum + (last**digit(n))
        n= Math.floor(n/10)
    }
    console.log(sum);
    
return  sum
}
add(153)
