const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    if (num == 0) {
        return 0;
    }
    else if (num == 1) {
        return 1;
    } 
    else {
        let arr = [];
            arr[0] = 0;
            arr[1] = 1;
        for (i = 2; i < num; i++) {
            arr[i] = arr[i - 2] + arr[i - 1];
        }
        let lastItem = arr.length;
        return (arr[lastItem - 2] + arr[lastItem - 1]);
    }
};

// Do not edit below this line
module.exports = fibonacci;
