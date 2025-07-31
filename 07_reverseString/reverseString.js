const reverseString = function(str) {
    let strArr = Array.from(str);
    strArr.reverse();
    return strArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
