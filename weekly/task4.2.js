function truckTour(petrolpumps) {
    // i - starting
    let i = -1, truck_v = 0, start = 0, len = 0;

    while (++len <= petrolpumps.length) {
        i++;
        if (i == petrolpumps.length) i = 0 ;

        let [round_v, round_d] = petrolpumps[i]
        truck_v += round_v - round_d;
        while (truck_v < 0) {
            truck_v -= petrolpumps[start][0] - petrolpumps[start][1]
            start++;
            len--;
        }
    }

    return start;
}