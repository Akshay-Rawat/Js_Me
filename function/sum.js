function sum(a){
    let summ = 0
    while(a>0){
      last = a%10
      summ+=last
      a = Math.floor(a/10)
      
    }
    return summ
  }
  console.log(sum(100))