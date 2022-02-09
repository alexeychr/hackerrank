// 6:54

function lonelyinteger(a) {
    // a.length guaranteed to be odd
    const arr = [...a]
        .map(v => parseInt(v, 10))
        .sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i += 2) {
        let [v1, v2] = [arr[i], arr[i + 1]]
        if (v1 != v2) {
            let v3 = arr[i+2];
            if (v1 == v3) return v2;
            else if (v2 == v3) return v1;
        }
    }

}