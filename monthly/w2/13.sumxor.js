// 20:00 + help

function slow(n) {
    let acc = 0;
    for (let x = 0; x <= n; x++) {
        let c1 = n + x;
        let c2 = n ^ x;
        if (c1 == c2) acc++
    }
    return acc
}

function fast_1(n) {
    let acc = 0
    while(n > 0){
        if (n % 2 === 0) acc++;
        n = parseInt(n / 2);
    }
    acc = Math.pow(2, acc);
    return acc
}

function fast_2(n) {
    const na = Number(n).toString(2);
    if(na.length === 1) return 1
    return 2 ** na.match(/0/g).length
}

function sumXor(n) {
    return fast_1(n)
}