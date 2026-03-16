let n =5
let num =0
for(let i =1;i<=n;i++){
    let str = ""
    if(i%2==0){
        num =0
    }else{
       num =1
    }
    for(let j =1;j<=i;j++){
        str +=num
        num = 1-num
    }
    console.log(str)
}