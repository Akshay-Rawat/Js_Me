let str = "banana"
let substring=new Map()

for(let i =0;i<str.length;i++){
for(let j=i+1;j<=str.length;j++){
    let sub = str.slice(i,j)
 
    substring.set(sub,(substring.get(sub)||0)+1)
}
}
for (let [sub, count] of substring) {
  if (count >= 2 && sub.length>=3) {
    console.log(sub, "->", count);
  }
}  

