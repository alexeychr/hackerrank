
function sockMerchant(n, ar) {
    // Write your code here
    let acc = 0;
    const map = [];
    for (let i = 0; i < ar.length; i++) {
        let v = ar[i];
        if (map[v] == 1) { // has pair
            map[v] = 0;
            acc++;
        }
        else {
            map[v] = 1;
        }
    }

    return acc;

}
