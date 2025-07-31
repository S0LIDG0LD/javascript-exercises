str = "hey"
num = 3

const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR"
    }
    let finalStr = ""
    for (i=0; i < num; i++) {
        finalStr += str;
    }
    return finalStr
};

// Do not edit below this line
module.exports = repeatString;
