// 36:00
function maxMin(k, arr) {

    arr.sort((a, b) => a - b);
    let acc = Number.MAX_VALUE;

    let i = 0;
    do {
        let min = arr[i]
        let max = arr[i + k - 1];
        acc = Math.min(max - min, acc);
        i++;
    }
    while (i + k <= arr.length);

    return acc;



    // Write your code here
    // arr.sort((a, b) => a - b);
    // console.log({arr})
    // console.log({k, len: arr.length})

    // const t1 = arr[k - 1] - arr[0]
    // console.log({t1, v0: arr[0], v1: arr[k-1]})

    // // const t0 = arr[k] - arr[0]
    // const t2 = arr[arr.length - 1] - arr[arr.length - k ]
    // console.log({t2, v0: arr[arr.length - k ], v1: arr[arr.length - 1]})

    // return Math.min(t1, t2)

    // let min = Number.MAX_VALUE;
    // for (let i = 0; i < arr.length; i++) {
    //     let v1 = arr[i]
    //     for (let j = i + 1; j < arr.length; j++) {
    //         // if (j == i) continue;
    //         let v2 = arr[j];
    //         let vmin = Math.min(v1, v2)
    //         let vmax = Math.max(v1, v2)
    //         min = Math.min(min, vmax - vmin)
    //         console.log({vmin, vmax, res: vmax - vmin})
    //     }
    // }
    // console.log({min})
    // return min

}
