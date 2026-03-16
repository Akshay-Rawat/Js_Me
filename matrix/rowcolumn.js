let mat = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
]

for(let row = 0;row<mat.length;row++){
    console.log(mat[row][mat.length-1-row])
    // console.log(mat[row][row])
}