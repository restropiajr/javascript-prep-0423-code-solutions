/* exported capitalize */

function capitalize(word) {
  const lowerCaseString = word.toLowerCase();
  const capitalizedArray = [];

  for (let i = 0; i < lowerCaseString.length; i++) {
    if (i === 0) {
      const capitalizedLetter = lowerCaseString[i].toUpperCase();
      capitalizedArray.push(capitalizedLetter);
    } else {
      capitalizedArray.push(lowerCaseString[i]);
    }
  }

  const capitalizedWord = capitalizedArray.join('');
  return capitalizedWord;
}
