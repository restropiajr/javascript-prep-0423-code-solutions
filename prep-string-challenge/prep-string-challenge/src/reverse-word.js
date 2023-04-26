/* exported reverseWord */

function reverseWord(word) {
  const reverseArr = [];

  for (let i = word.length - 1; i >= 0; i--) {
    reverseArr.push(word[i]);
  }

  const reverseStr = reverseArr.join('');
  return reverseStr;
}
