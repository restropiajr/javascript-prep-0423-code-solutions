/* exported compact */

function compact(array) {
  const newArray = [];

  for (const el of array) {
    if (
      el !== null &&
      el !== undefined &&
      el !== false &&
      el !== 0 &&
      !Number.isNaN(el) &&
      el !== ''
    ) {
      newArray.push(el);
    }
  }
  return newArray;
}
