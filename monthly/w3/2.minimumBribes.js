
// https://medium.com/@dwang0816/new-year-chaos-41e8e56cb342
function minimumBribes(q) {
    let acc = 0;
    let chaos = false
    for (let i = 0; i < q.length; i++) {
        let v = q[i];
        if (v - (i+1) > 2) chaos = true;
        for (let j = v - 2; j < i; j++) {
            if (q[j] > v) acc++;
        }
    }

    if (chaos) {
        console.log('Too chaotic')
    }
    else console.log(acc)

}