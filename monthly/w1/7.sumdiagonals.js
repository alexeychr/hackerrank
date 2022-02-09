// 9:15
function diagonalDifference(arr) {
    let left = 0 ;
    let right = 0;
    for (let r = 0; r < arr.length; r++) {
        let row = arr[r]
        left += row[r];
        right += row[row.length - 1 - r]
    }

    let res = Math.abs(left - right)
    return res;

}