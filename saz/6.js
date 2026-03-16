let n=5
for(let i=1;i<=2*n-1;i++){
    let str = ""
    
    let star = i

    if(i>n) {star=2*n-i}

    for(let j = 1;j<=star;j++){
        str+="*"
    }
    console.log(str)
}