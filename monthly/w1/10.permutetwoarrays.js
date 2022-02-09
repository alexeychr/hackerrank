// 2:02
function twoArrays(k, A, B) {
    A.sort((a, b) => a - b);
    B.sort((b, a) => a - b);

    for (let i = 0; i < A.length; i++) {
        let vA = A[i]
        let vB = B[i]
        let isSat = (vA + vB) >= k;
        if (!isSat) return 'NO'
    }

    return 'YES'

}