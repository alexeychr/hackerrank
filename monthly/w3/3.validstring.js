// 19:00
// забыл что кол-во символов может быть 1
function isValid(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const map = Array.from({length: alphabet.length}).fill(0)
    for (let i = 0; i < s.length; i++) {
        let chr = s[i];
        let idx = alphabet.findIndex(v => v == chr)
        map[idx]++;
    }
    console.log(map)
    let x1 = 0;
    let x2 = 0;
    for (let i = 0; i < map.length; i++) {
        let v = map[i]
        if (v > 0) {
            if (x1 == 0 || x1 == v) {x1 = v}
            else if (x2 == 0) {
                if (
                    v > 1
                    && Math.abs(v - x1) > 1
                ) {
                    console.log("N1", {v, x1, x2})
                    return 'NO'
                }
                x2 = v;
            }
            else {
                console.log("n2", {v, x1, x2})
                return 'NO'
            }
        }

    }

    return 'YES'

}