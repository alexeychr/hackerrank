// 4:26
function timeConversion(s) {
    let [hh_, mm_, end] = s.split(':')
    let ss_ = end.slice(0, 2)
    let ampm = end.slice(-2)

    if (ampm == "PM") {
        if (hh_ < 12) hh_ = parseInt(hh_, 10) + 12;
    }
    else {
        if (hh_ == 12) hh_ = '00';
    }

    return [hh_, mm_, ss_].join(":")
}