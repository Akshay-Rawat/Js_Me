let mat = [
    [1, 3],
    [1, 5]
]
let m = mat.length
let n = mat[0].length
for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        if (i == 0, j == 0, i == m-1 || j == n-1) {

            console.log(mat[i][j])

        }
    }
}