// create your loops here.

// whileLoop1
function whileLoop1() {
  const array = [];
  let count = 0;

  while (count < 10) {
    array.push(count);
    count++;
  }
  return array;
}
console.log('whileloop1 output:', whileLoop1());

// whileLoop2
function whileLoop2() {
  const array = [];
  let count = 0;

  while (count < 20) {
    array.push(count);
    count += 2;
  }
  return array;
}
console.log('whileloop2 output:', whileLoop2());

// forLoop1
function forLoop1() {
  const array = [];

  for (let i = 0; i < 10; i++) {
    array.push(i);
  }
  return array;
}
console.log('forLoop1 output:', forLoop1());

// forLoop2
function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log(`Time till explosion: ${i}!`);
  }
}
forLoop2();

// forInLoop1
const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const array = [];

  for (const property in object) {
    array.push(property);
  }
  return array;
}
console.log('forInLoop1 output:', forInLoop1(object));

// forInLoop2
function forInLoop2(object) {
  const array = [];

  for (const property in object) {
    array.push(object[property]);
  }
  return array;
}
console.log('forInLoop2 output:', forInLoop2(object));
