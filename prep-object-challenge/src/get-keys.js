/* exported getKeys */

function getKeys(object) {
  const propertyArr = [];

  for (const property in object) {
    propertyArr.push(property);
  }

  return propertyArr;
}
