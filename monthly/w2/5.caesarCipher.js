// 9:00
function caesarCipher(s, k) {
    // Write your code here
    const alpha = 'abcdefghijklmnopqrstuvwxyz';

    if (k == 0) return s;
    if (k > alpha.length) {
        k -= Math.floor(k / alpha.length) * alpha.length;
    }

    const cipher = [alpha.slice(k), alpha.slice(0, k)].join("")

    const _from = [alpha, alpha.toUpperCase()].join("")
    const _to = [cipher, cipher.toUpperCase()].join("")
    const ret = [];
    for (let i = 0; i < s.length; i++) {
        let v = s[i];
        let idx = _from.indexOf(v);
        if (idx === -1) ret.push(v)
        else ret.push(_to[idx])

    }

    return ret.join("")

}