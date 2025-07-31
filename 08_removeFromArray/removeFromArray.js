/* const removeFromArray2 = function(arr, item) {
    let array = Array.from(arr)
    for (i=0; i < arr.length; i++) {
        if (String(item) == String(arr[i])) {
            console.log(true);
            array.splice(i, 1);
        }
    }
    return array
}; */

const removeFromArray = function(arr, ...args) {
    let array = [];

    for (const arrItem of arr) {
        if (!args.includes(arrItem)) {
            array.push(arrItem);
        }
    }
    return array
};

console.table(removeFromArray([1,2,3,3,5],2,3));

// Do not edit below this line
module.exports = removeFromArray;
