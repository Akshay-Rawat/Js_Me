// for(let i = 1; i <= 3; i++) {
//     for(let j = 1; j <= i; j++) {
//         process.stdout.write(j + " ");
//     }
//     console.log();
// }
//  output : 1
//           12
//           123

//!
// for(let i = 1; i <= 5; i++) {
//     let str=""
//     for(let j = 5; j >=i ;j--) {
//        str+="*"
//     }
//    console.log(str)
// }

//! 
// true

//!
// const arr = [2, 4, 3, 5, 7, 8, 1];
// const target = 9;
// const map = new Map()

// for(let i =0;i<arr.length;i++){
//     const comp= target-arr[i];

//     if(map.has(comp)){
//         console.log(`Found a pair ${comp}+${arr[i]}==${target}`)
//     }
//     map.set(arr[i],i);
// }
// Output: [[2,7], [4,5], [8,1]]

//!

// function isPalindrome(str){
//     let i = 0
//     let j = str.length-1
//     let Palindrome=true
//     while(i<j){
//         if(str[i]!=str[j]){
//             Palindrome=false;
//             break;
//         }
//         i++;
//         j--
//     }
//     return Palindrome
// }

// let hehe= isPalindrome("())(")
// console.log(hehe)

//!

// const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

// const map = new Map();

// for (let word of words) {
//     const key = word.split("").sort().join("");
//     if (!map.has(key)) map.set(key, []);
//     map.get(key).push(word);
// }

// console.log([...map.values()]);

// let set =  words.map(word=>word.split("").sort().join(""))
// console.log(set)

// const obj = {}

// for(let i =0;i<words.length;i++){
//     if(!obj[set[i]])  obj[set[i]]= [words[i]]; 
//     else obj[set[i]].push(words[i])
// }

// const result =Object.values(obj)
// console.log(result)


//!
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

//! access element ,No of Rows,No of Columns
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         if(matrix[i][j]===6)
//         console.log(`${i},${j}`)
//     }
// }
// console.log(matrix.length)
// console.log(matrix[0].length)

//!primary diagonal
// let sum = 0
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//         if (i == j) {
//             sum += matrix[i][j]
//         }
//     }
// }
// console.log(sum)

//!

// let mat = [
//     [1, 2, 3],
//     [4, 5, 6]
// ]
// let mat2=[]
// for (let i = 0; i < mat.length; i++) {
//     for (let j = 0; j < mat[0].length; j++) {

//         if(!mat2[j]){
//             mat2[j]=[]
//         }
//             mat2[j][i]=mat[i][j]
//     }

// }
// console.log(mat2)

//  Output:
//  [[1,4],
//  [2,5],
//  [3,6]]


//! Q10. True/False: matrix.length gives total elements in a 2D array.
// FAlse

//!Q11 What's the time complexity?

//! - Linear Search: O(N)
//! - Binary Search: O(LogN)

//!Q12. Why does Binary Search require a sorted array?
// Beacause it divides the array in half and if values is less then mid we goes left and if value is higher than mid we go to right side

//!Q13 Implement Binary Search:

//!Q14. What will `binarySearch([1,3,5,7,9], 5)` return after how many comparisons?

// function binarySearch(arr, target) {
//     let start = 0
//     let end = arr.length-1
//     let mid = Math.floor((start+end)/2)

//     while(start<=end){
//         if(arr[mid]==target) return mid;
//         else if(arr[mid]<target)  start = mid+1
//         else end=mid-1
//     }
//     return -1
// }

// let ans = binarySearch([1,3,5,7,9], 5)
// console.log(ans)


//!Q15 Find first and last occurrence of an element in sorted array:


// const arr = [1, 2, 2, 2, 3, 4, 5];
// const target = 2;
// console.log(arr.indexOf(target));
// console.log(arr.lastIndexOf(target))
// let first = -1;
//     let last = -1;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             if (first === -1) first = i; 
//             last = i; 
//         }
//     }

//     console.log( first, last );


//!Q16.** Fill in the blanks:


// const map = new Map();
// map.set("name", "John");     // Add
// map.get("name");             // Get value
// map.has("name");             // Check exists
// map.size;                     // Get size
// map.delete("name");             // Remove

//!Q18. Convert this to use Set for O(n) time:

// const arr = [1, 2, 3, 2, 4, 3, 5];

// let a = new Set()
// let dup =  new Set()

// for(let num of arr){
//     if(a.has(num)){
//         dup.add(num)
//     }else{
//         a.add(num)
//     }
// }
// console.log([...dup])

// !Q19.** True/False:

// - Set maintains insertion order: yes
// - Map can have objects as keys: yes
// - Set automatically removes duplicates: yes

//!Q20. Find first non-repeating character using Map:
// function firstUnique(str) {
//  const map=new Map();

//  for(let ch of str){
//     map.set(ch,(map.get(ch)||0)+1)
//  }

//  for(let ch of str){
//     if(map.get(ch)==1){
//         return ch
//     }
//  }
// }

// let a = firstUnique("aabbcdd")

//!21 
//!22
//!23

// function bubbleSort(a) {
//     for(let i=0;i<a.length;i++){

//        for(let j=0;j<a.length-i-1;j++){
//          if(a[j]>a[j+1]){
//              [a[j], a[j + 1]]= [a[j+1], a[j]]
//          }
//        }
//     }
//     return a
// } 
// let v =bubbleSort([5,2,4,1,3])
// console.log(v)

//!24 const arr = [3, 1, 4, 1, 5];
// arr.sort();
// console.log(arr);

//!25 Sort objects by age descending:
// const users = [
//     {name: "John", age: 25},
//     {name: "Jane", age: 30},
//     {name: "Bob", age: 20}
// ];
// let a = users.sort((a,b)=>b.age-a.age);
// console.log(a)

//!Q26. True/False: JavaScript's default .sort() converts elements to strings before comparing. true

//27
//!28 if base is missing function call itswlf forever which cause stack overflow

//!Q29.** Write recursive function for:
// Sum of digits: sumDigits(1234) = 10

// function sumDigits(n) {
//     if(n==0) return 0 ;
//     let last  = n%10
//      return last + sumDigits(Math.floor(n/10))
// }
// let a = sumDigits(1234)
// console.log(a)

//!30 recurive of power

// function powerRecursive(base, exp) {
//     // Your code
//     if(exp==0) return 1
//     return base * powerRecursive(base,exp-1)
// }
// console.log(powerRecursive(2,3))

//!Q31. Trace the calls for `fibonacci(5)`:

// function fibonacci(n) {
//     if(n <= 1) return n;
//     return fibonacci(n-1) + fibonacci(n-2);
// }

//!Q32. Reverse a string recursively:

// function reverseStr(str) {

//     if (str === "") return "";
//     return reverseStr(str.slice(1)) + str[0];
// }

// console.log(reverseStr("hello"));

//!33 A callback function is a function passed into another function as an argument and executed later.

//!Q34. What will this output?
// function greet(name, callback) {
//     console.log("Hi " + name);
//     callback();
// }
// greet("Abhishek", function() {
//     console.log("Callback executed");
// });

//!35
//!36 Convert using map:
// const nums = [1, 2, 3, 4, 5];

// let a  = nums.map(value=>value*value)
// console.log(a)

//!Q37. Convert using filter:
// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// let a = nums.filter(value=>value%2==0 && value>4)
// console.log(a)

// !Q38. What will this return?

// const arr = [1, 2, 3, 4];
// const result = arr.reduce((acc, curr) => acc + curr, 10);

//!39. Chain map, filter, reduce:

// const products = [
//     {name: "Phone", price: 500, inStock: true},
//     {name: "Laptop", price: 1000, inStock: false},
//     {name: "Tablet", price: 300, inStock: true},
//     {name: "Watch", price: 200, inStock: true}
// ];

// let a = products.filter(value=> value.inStock==1).map(value=>value.price).reduce((acc,curr)=>acc+curr,0)
// console.log(a)

//! Q40. Difference between find and filter?
// const nums = [1, 2, 3, 4, 2, 5];
// a=nums.find(x => x === 2);    // Returns: ___
// b= nums.filter(x => x === 2);  // Returns: ___
// console.log(a,b)

//!Q41. Implement your own map function:

//  function myMap(arr, callback) {
//       let result=[]

//       for(let i = 0;i<arr.length;i++){
//         result.push(callback(arr[i],i,arr))
//       }
//       return result
//  }

//  let num = myMap([1,2,3,4],function(x){
//     return x*2;
//  })
//  console.log(num)

//!Q42. What's wrong here?
// const nums = [1, 2, 3];
// const doubled = nums.forEach(x => x * 2);
// console.log(doubled);
 
//!Q43. Group array elements by frequency using reduce and Map
// const arr = [1, 2, 2, 3, 3, 3, 4];

// let b = arr.reduce((acc,curr)=>{
//     acc[curr]=(acc[curr]||0)+1;
//     return acc;
// },{})

// console.log(b)

//!44 Flatten 2D array using reduce:
// const matrix = [[1, 2], [3, 4], [5, 6]];
// let c = matrix.reduce((acc,curr)=>acc.concat(curr),[])
// console.log(c)

// !Q45. Sort strings by length, then alphabetically:
// const words = ["cat", "elephant", "dog", "ant", "bear"];

// words.sort((a, b) => {
//   if (a.length !== b.length) {
//     return a.length - b.length
//   }  
//   return a.localeCompare(b);      
// });

// console.log(words);




