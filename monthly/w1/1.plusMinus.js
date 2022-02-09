// 6:33

function plusMinus(arr) {
    const rescounter = [0,0,0]
    const len = arr.length
    arr = arr.map(v => parseInt(v))
    for (let i = 0; i <= arr.length - 1; i++) {
        let v = arr[i]
        if (v == 0) rescounter[2]++;
        else if (v < 0) rescounter[1]++;
        else rescounter[0]++;
    }
    rescounter
        .map(v => (v / len).toFixed(6))
        .forEach(v => console.log(v))
}