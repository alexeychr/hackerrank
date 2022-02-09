

const global = {
    grid: null
}

function gridmap(fn) {
    for (let i = 0; i < global.grid.length; i++) {
        for (let j = 0; j < global.grid[i].length; j++) {
            global.grid[i][j] = fn(global.grid[i][j], i, j)
        }
    }
}

function gridreplace(i, j, v) {
    if (
        i < 0
        || j < 0
        || i >= global.grid.length
        || j >= global.grid[0].length
    ) {
        console.log("OO'", { i, j, h: global.grid.length, w: global.grid[0].length})
    };

    global.grid[i][j] = v;
}

function getgrid() {
    return global.grid.map(row => row.map(v => v > 0? 'O' : '.').join(''))
}

function printgrid() {
    const grid = global.grid
        .map(row => console.log(
            row
                    .map(v => v > 0 ? ` ${v} ` : `${v} `)
                    .join('')
        )
                    )
    console.log()
}

function bomberMan(n, grid) {
    global.grid = grid.map(row => row.split(''));
    // console.log(global.grid)
    gridmap((v, i, j) => v == '.' ? 2 : -3)
    // console.log(global.grid)

    for (let min = 0; min < n; min++) {
        grid = gridmap((v, i, j) => {
            if (v > 0) {
                v--;
                if (v == 0) { // boom
                    v = -3;
                    gridrepl(i + 1, j, v)
                    gridrepl(i - 1, j, v)
                    gridrepl(i, j + 1, v)
                    gridrepl(i, j - 1, v)
                }
            }
            else if (v < 0) {
                v++
                if (v == 0) { // setup
                    v = 3;
                }
            }
            printgrid()
        })
    }

    return getgrid()


}