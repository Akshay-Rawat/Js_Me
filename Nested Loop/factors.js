let n =100
for(let i=1;i<Math.floor(Math.sqrt(n));i++){
    if(n%i==0){
        console.log(i)
         if (i !== n / i) {
            console.log(n / i);
        }

    }
}