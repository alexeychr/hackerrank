// 20:00
function pageCount(n, p) {
    if (n % 2 == 0) n++; // страниц может быть нечетное кол-во!
    if (p <= 1 || p >= n - 1) return 0; // кейсы когда переворачивать ничего не нужно

    // Write your code here
    const isEven = p % 2 === 0;
    const turn1 =
        isEven
            ? (p / 2)
            : (p - 1) / 2;

    const turn2 =
        isEven
            ? ((n - 1) - p) / 2
            : Math.floor((n - p) / 2)

    return Math.min(turn1, turn2)

}

const r = pageCount(6,5)
console.log(r)