/* exported getValues */
function getValues(object) {
  const valueArr = [];

  for (const property in object) {
    valueArr.push(object[property]);
  }

  return valueArr;
}
