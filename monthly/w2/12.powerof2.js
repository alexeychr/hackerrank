// 40 min

// не достаточно быстр
function nearestPowerOf2(n) {
    let x = 2;
    do {
        x++;
        let r =  Math.pow(2, x);
        if (r > n) return Math.pow(2, x - 1)
    } while (true)
}

function nearestPowerOf2_fast(n) {
    return Math.pow(2, Math.floor(Math.log2(n)))
}

function powerOfTwo(x) {
    return Math.log2(x) % 1 === 0;
}

function counterGame(n) {
    let turn1 = true;
    while (true) {
        if (n == 1) {
            return turn1? 'Richard': 'Louise'
        }

        if (powerOfTwo(n)) {
            n /= 2;
        }
        else {
            let _n = nearestPowerOf2_fast(n)
            // let _n = nearestPowerOf2()
            if (!powerOfTwo(_n)) {
                console.log("O_o", {n, _n})
                return;
            }
            n -= _n;
        }
        turn1 = !turn1;
    }
}