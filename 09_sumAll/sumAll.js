const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b) || Number.isNaN(a) || Number.isNaN(b)) {
        return "ERROR";
    }
    let total = 0;
    if (a > b) {
        [a, b] = [b, a]
    }
    for (i = a; i <= b; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
