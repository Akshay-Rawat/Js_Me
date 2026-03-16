let arr = ["orange", "apple", "banana", "orange", "apple", "banana", "grapes", "apple", "banana", "orange", "apple", "grapes"]

// const result = arr.reduce((acc,cur)=>{
//     if(acc.hasOwnProperty(cur))
//         acc[cur]++;
//     else
//         acc[cur]=1;
//     return acc
// },{})
const result = arr.reduce((acc, cur) => {
    acc.hasOwnProperty(cur) ? acc[cur]++ : acc[cur] = 1;
    return acc
}, {})

console.log(result)