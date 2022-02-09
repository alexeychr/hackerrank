// 1:01
function countingSort(arr) {
    let res = Array.from({length:100}).fill(0);
    for (let i = 0; i < arr.length; i++) {
        let v = arr[i]
        if (v < 100) res[v]++
    }
    return res;
}