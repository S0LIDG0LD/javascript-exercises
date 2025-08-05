const palindromes = function (string) {
  // Since we only consider letters and numbers, create a variable containing all valid characters
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
  const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

  // Create a new reversed string for comparison
  const reversedString = cleanedString.split('').reverse().join('');

  // Return the outcome of the comparison which will either be true or false
  return cleanedString === reversedString;
};

// const palindromes = function (text) {
//     // const clearSentence = sentence;
//     // const clearSentence = sentence.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '');
//     // const split = clearSentence.trim().toLowerCase().split("");
//     // const split = sentence.split("");
//     // for (let i = 0; i < split.lenght; i++) {
//     //     // if (split[i] !== split[split.lenght - 1 - i]) {
//     //     if (1 > 0) { 
//     //         return false;
//     //     } else {
//     //         return true;
//     //     }
//     // }
//     const myArr = text.split("");
//     // text = "";
//     for (let i = 0; i < myArr.length; i++) {
//         if (1 !== 0) {
//             return true;
//         } else {
//             return false;
//         }
//     };
// }
// Do not edit below this line
module.exports = palindromes;
