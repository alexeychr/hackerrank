// 3:03

function gridChallenge(grid) {
    grid = grid
        .map(row => row.split(''))
        .map(row => row.sort())
    // console.log(grid)
    for (let colId = 0; colId < grid[0].length; colId++) {
        let col = grid.map(row => row[colId])
        let col_s1 = col.join('');
        let col_s2 = [...col].sort().join('')
        if (col_s1 != col_s2) return 'NO'
    }
    return 'YES'

}
