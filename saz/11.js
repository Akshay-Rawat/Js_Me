    let n =5
    for(let i =0;i<n;i++){
    let str=""
    let ch = String.fromCharCode(65+i)

    for(j=0;j<n-i-1;j++){
        str+=" "
    }
    for(let j=0;j<2*i+1;j++){
        str+= ch;
 
    }
        console.log(str)
}