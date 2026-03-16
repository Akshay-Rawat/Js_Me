function custom(num,pre){
    const factor = Math.pow(10,pre);
    return Math.round(num*factor)/factor
}
console.log(custom(4.6877,2))