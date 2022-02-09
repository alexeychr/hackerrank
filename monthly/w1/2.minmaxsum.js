// 1:44
function miniMaxSum(arr) {
    const range = [0, 0]

    // arr = arr.map(v => parseInt(v))
    arr.sort((a, b) => a - b)
    const sum = arr.reduce((a, b) => a + b)

    range[0] = sum - arr[arr.length - 1]
    range[1] = sum - arr[0]


    console.log(range.join(' '))
}


//4:21


function miniMaxSum(arr) {
    let min = -1
    let max = 0;

    let sum = 0
    for (let i = 0; i <= arr.length - 1; i++) {
        let v = arr[i]
        if (min == -1) min = v;
        else min = Math.min(min, v)
        max = Math.max(max, v)
        sum += v;
    }

    const range = [0,0]
    range[0] = sum - max
    range[1] = sum - min


    console.log(range.join(' '))
}