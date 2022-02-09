// 6:20


function dynamicArray(n, queries) {
    let lastAnswer = 0;
    let arr = Array.from({length: n}).fill(0).map(v => []);
    let answers = []

    for (let i = 0; i < queries.length; i++) {
        let v = queries[i];
        let [type, x, y] = v;
        if (type == 1) {
            let idx = (( x ^ lastAnswer ) % n )
            arr[idx].push(y);
        }
        else if (type == 2) {
            let idx = (( x ^ lastAnswer ) % n)
            let val = arr[idx][y % arr[idx].length]
            lastAnswer = val;
            answers.push(val)

        }
        else {
            console.log("O_o", { type, v })
            return;
        }
    }

    return answers
}