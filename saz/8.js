let n=5
let space = 2*(n-1)
for(let i=1;i<=n;i++){
    let str = ""
   //! number
    for(let j = 1;j<=i;j++){
        str+=j
    }
//! space 
for(let j=1;j<=space;j++){
    str+=" "
}
 //! number
    for(let j = i;j>=1;j--){
        str+=j
    }
    console.log(str)
    space -=2
}