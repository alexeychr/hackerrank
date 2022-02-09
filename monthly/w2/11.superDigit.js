// 4:50

function superDigit(n, k) {
    let initSum = n
        .toString()
        .split('')
        .map(v => parseInt(v, 10))
        .reduce((a, b) => a + b)
    let initDigit = parseInt(initSum) * k;

    while (initDigit > 9) {
        let _s = initDigit
            .toString()
            .split('')
            .map(v => parseInt(v, 10))
            .reduce((a, b) => a + b)
        initDigit = parseInt(_s)
    }

    return initDigit


}
