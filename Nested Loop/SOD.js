
var a = Number(prompt("enter number for answer"))
    if (a > 0) {
        var sum = 0
        while (a > 0) {
            var rem = a%10;
            sum = sum +rem;
            a=Math.floor(a/10);
        }
        console.log((sum));
    } else{
        console.log("eter positive")
    }