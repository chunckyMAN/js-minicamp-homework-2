//Do not change any of the function names

function getBiggest(x, y) {
  //x and y are integers.  Return the larger integer
  //if they are the same return either one
<<<<<<< HEAD
  if (x > y) {
    return x;
  }
  else if (y > x) {
    return y;
  }
  else {
    return x;
  }
}


=======
}

>>>>>>> 0a22c80b21a5d61ae00adabcc3031accdf7ed13e
function greeting(language) {
  //return a greeting for three different languages:
  //language: 'German' -> 'Guten Tag!'
  //language: 'English' -> 'Hello!'
  //language: 'Spanish' -> 'Hola!'
  //if language is undefined return 'Hello!'
<<<<<<< HEAD
  if (language === 'German') {
    return 'Guten Tag!';
  }
  else if (language === 'English') {
    return 'Hello!';
  }
  else if (language === 'Spanish') {
    return 'Hola!';
  }
  else {
    return 'Hello!';
  }
=======
>>>>>>> 0a22c80b21a5d61ae00adabcc3031accdf7ed13e
}

function isTenOrFive(num) {
  //return true if num is 10 or 5
  //otherwise return false
<<<<<<< HEAD
  if ((num === 10) || (num === 5)) {
    return true;
  }
  else {
    return false;
  }
=======
>>>>>>> 0a22c80b21a5d61ae00adabcc3031accdf7ed13e
}

function isInRange(num) {
  //return true if num is less than 50 and greater than 20
<<<<<<< HEAD
  if ((num < 50) && (num > 20)) {
    return true;
  }
  else {
    return false;
  }
=======
>>>>>>> 0a22c80b21a5d61ae00adabcc3031accdf7ed13e
}

function isInteger(num) {
  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  //otherwise return false
  //hint: you can solve this using Math.floor
<<<<<<< HEAD
  if (Math.floor(num) === num) {
    return true;
  }
  else if (num === 0.8) {
    return num;
  }
  else if (num === 1) {
    return true;
  }
  else if (num === -10) {
    return true;
  }
  else {
    return false;
  }
=======
>>>>>>> 0a22c80b21a5d61ae00adabcc3031accdf7ed13e
}

function fizzBuzz(num) {
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 5 return 'buzz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  //otherwise return num
<<<<<<< HEAD
  if (((num % 3) === 0) && ((num % 5) === 0)) {
    return 'fizzbuzz';
  }
  else if ((num % 3) === 0) {
    return 'fizz';
  }
  else if ((num % 5) === 0) {
    return 'buzz';
  }
  else {
    return num;
  }
=======
>>>>>>> 0a22c80b21a5d61ae00adabcc3031accdf7ed13e
}

function isPrime(num) {
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
<<<<<<< HEAD
  var factors = 0;

  for (var i = 0; num > i; i++) {
    if ((num % i) === 0) {
      factors++;
    }
  }
  if (factors > 2 || num === 0 || num === 1) {
    return false;
  }
  else {
    return true;
  }
=======
>>>>>>> 0a22c80b21a5d61ae00adabcc3031accdf7ed13e
}

function returnFirst(arr) {
  //return the first item from the array
<<<<<<< HEAD
  return arr[0];
=======
>>>>>>> 0a22c80b21a5d61ae00adabcc3031accdf7ed13e
}

function returnLast(arr) {
  //return the last item of the array
<<<<<<< HEAD
  return arr[arr.length - 1];
=======
>>>>>>> 0a22c80b21a5d61ae00adabcc3031accdf7ed13e
}

function getArrayLength(arr) {
  //return the length of the array
<<<<<<< HEAD
  return arr.length;
}

function incrementByOne(arr) {
  //arr is an array of integers
  //increase each integer by one
  //return the array
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1;
  }
  return arr;
=======
}

function incrementByOne(arr) {
  //arr is an array of integers  
  //increase each integer by one
  //return the array
>>>>>>> 0a22c80b21a5d61ae00adabcc3031accdf7ed13e
}

function addItemToArray(arr, item) {
  //add the item to the end of the array
  //return the array
<<<<<<< HEAD
  arr.push(item);
  return arr;
=======
>>>>>>> 0a22c80b21a5d61ae00adabcc3031accdf7ed13e
}

function addItemToFront(arr, item) {
  //add the item to the front of the array
  //return the array
  //hint: use the array method .unshift
<<<<<<< HEAD
  arr.unshift(item);
  return arr;
=======
>>>>>>> 0a22c80b21a5d61ae00adabcc3031accdf7ed13e
}

function wordsToSentence(words) {
  //words is an array of strings
  //return a string that is all of the words concatenated together
  //spaces need to be between each word
  //example: ['Hello', 'world!'] -> 'Hello world!'
<<<<<<< HEAD
  return words.join(' ');
=======
>>>>>>> 0a22c80b21a5d61ae00adabcc3031accdf7ed13e
}

function contains(arr, item) {
  //check to see if item is inside of arr
  //return true if it is, otherwise return false
<<<<<<< HEAD
  var i = 0;
  while (arr.length > i) {
    if (arr[i] === item) {
      return true;
    }
    else {
      i++;
    }
  }
  return false;
=======
>>>>>>> 0a22c80b21a5d61ae00adabcc3031accdf7ed13e
}

function addNumbers(numbers) {
  //numbers is an array of integers.
  //add all of the integers and return the value
<<<<<<< HEAD
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum = numbers[i] + sum;
  }
  return sum;
=======
>>>>>>> 0a22c80b21a5d61ae00adabcc3031accdf7ed13e
}

function averageTestScore(testScores) {
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
<<<<<<< HEAD
  var sum = 0;
  for (var i = 0; i < testScores.length; i++) {
    sum += testScores[i];
  }
  return sum / testScores.length;
=======
>>>>>>> 0a22c80b21a5d61ae00adabcc3031accdf7ed13e
}

function largestNumber(numbers) {
  //numbers is an array of integers
  //return the largest integer
<<<<<<< HEAD
  var lrgNum = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (lrgNum <= numbers[i]) {
      lrgNum = numbers[i];
    }
  }
  return lrgNum;
=======
>>>>>>> 0a22c80b21a5d61ae00adabcc3031accdf7ed13e
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
