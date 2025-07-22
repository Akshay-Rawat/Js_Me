
var a = Number(prompt("enter number for answer"))
    if (a > 0) {
        var rev = 0
        while(a>0){
            var rem = a%10
            rev = rev*10+rem
            a = Math.floor(a/10)
        }
        console.log((rev));
    } else{
        console.log("eter positive")
    }