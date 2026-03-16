// for(let i =0;i<5;i++){
//     let str=""
//     for(let ch=65;ch<=65+i;ch++){
//         str+= String.fromCharCode(ch);
//         }
//         console.log(str)
//     }
    
    let n =5
//     for(let i =0;i<n;i++){
//     let str=""
//     for(let ch=65;ch<=65 + (n-i-1);ch++){
//         str+= String.fromCharCode(ch);
//         }
//         console.log(str)
// }
    for(let i =0;i<n;i++){
    let str=""
    let ch = String.fromCharCode(65+i)
    for(let j=0;j<=i;j++){
        str+= ch;
 
    }
        console.log(str)
}