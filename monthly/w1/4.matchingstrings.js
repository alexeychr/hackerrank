// 3:34

function matchingStrings(strings, queries) {
    // Write your code here
    const res = Array.from({length: queries.length}).fill(0);

    const map = {}
    for (let i = 0; i <= strings.length-1; i++) {
        let v = strings[i]
        if (!map[v]) map[v] = 0;
        map[v]++;
    }

    for (let j = 0; j <= queries.length -1; j++) {
        let q = queries[j];
        res[j] = map[q] || 0;
    }

    return res;
}