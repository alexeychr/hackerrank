// 4:10
function birthday(s, d, m) {
    let acc = 0;
    for (let i = 0; i < s.length ; i++) {
        let sub = s.slice(i, i + m );
        let sum = sub.reduce((a, b) => a + b)
        if (sum == d && sub.length == m) acc++;
    }

    return acc
}