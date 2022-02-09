const data = require("./4.data")

// 30:00
function climbingLeaderboard(ranked, player) {
    const acc = []
    const state = {
        prev_v: null,
        rank: 0,
    }

    const proc = (v) => {
        if (v != state.prev_v) {
            state.rank++;
        }
        state.prev_v = v;
    }

    for (let i = 0; i < ranked.length; i++) {
        if (player.length == 0) break;

        let v = ranked[i]
        while (player[player.length - 1] >= v) {
            let x = player.pop()
            // state.prev_v = player.pop()
            // proc(player.pop())
            acc.push(state.rank + 1)
        }
        proc(v)
    }

    console.log({state}, player[player.length- 1])

    while (player.length > 0) {
        let v = player.pop()
        // proc(v)
        acc.push(state.rank + 1)
    }

    console.log({state})

    return acc.reverse()
}

