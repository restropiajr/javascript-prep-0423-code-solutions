/* Your JS goes in this file */

// Questions 5-7
const age = 27;

function isAdult(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}

console.log(isAdult(age));

// Questions 8-11
const student1Score = 90;

function didStudentPass(score) {
  if (student1Score >= 70) {
    return true;
  } else {
    return false;
  }
}

console.log(didStudentPass(student1Score));

// Questions 12-15
const student2Score = 105;

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else {
    return 'A++';
  }
}
console.log(gradeCalculator(student2Score));

// Questions 17-20
const season = 'spring';

function seasonMessenger(season) {
  if (season === 'summer') {
    return "it's hot today";
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return "it's cold today";
  } else {
    return 'please enter a valid season';
  }
}

console.log(seasonMessenger(season));

// Questions 21-23
const dayOfTheWeek = 'thursday';

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend!';
  } else {
    return "It's a weekday!";
  }
}

console.log(dayDetector(dayOfTheWeek));
