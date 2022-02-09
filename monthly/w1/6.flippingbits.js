// 11:00
function flippingBits(n) {
    let n_dec = parseInt(n)
    let n_bin = n.toString(2)
    n_bin = Array.from({length:  32 - n_bin.length}).fill(0).join("")
        + n_bin
    let n_bin_converted = []
    for (let i = 0; i < n_bin.length; i++) {
        let v = n_bin[i]
        n_bin_converted.push(v == '1' ? '0' : '1')
    }

    let n_bin2 = n_bin_converted.join('')
    return parseInt(n_bin2, 2).toString(10)
}