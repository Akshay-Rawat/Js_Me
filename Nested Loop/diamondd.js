let  n =9
let star = 1
let space = parseInt(n/2)

for(let i =1;i<=n;i++){
    let str = ""
    for(let j =1;j<=space;j++){
        str+=" "
    }
    for(let j =1;j<=star;j++){
        str+="*"
    }
    console.log(str)

    if(i<=parseInt(n/2)){
        star+=2
        space-=1
    }
    else{
        star-=2
        space+=1
    }
}