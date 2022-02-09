// 2:10

function balancedSums(arr) {
    // Write your code here
    let rightSum = arr.reduce((a, b) => a + b)
    let leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let v = arr[i];
        rightSum -= v;
        if (leftSum == rightSum) return 'YES'
        leftSum += v;
    }

    return 'NO'

}