// 4:50

function pangrams(s) {
    // Write your code here
    let alphas = 'A B C D E F G H I K L M N O P Q R S T V X Y Z'.split(' ');
    let map = Array.from({length: alphas.length}).fill(0)
    for (let i = 0; i < s.length; i++) {
        let v = s[i].toUpperCase()
        let idx = alphas.findIndex(_ => _ == v);
        if (idx >= 0) {
            map[idx]++;
        }
    }

    let hasZero = map.findIndex(v => v === 0)
    return hasZero == -1
        ? 'pangram'
        : 'not pangram'

}