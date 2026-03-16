let p = new Promise((resolve, reject) => {
    
    let n = 4

    if(n%2==0){
        // resolve("Even")
        setTimeout(()=>{
            resolve("Even")
        })
    }
    else{
        // reject("odd")
        setTimeout(()=>{
            reject("odd")
        })
    }
})

console.log(p)