function push(arr, item) {
  //   arr.length = arr.length + 1;
  arr[arr.length] = item;
  return arr.length;
}

function pop(arr) {
  const lastItem = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastItem;
}

function unshift(arr, item) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = item;
  return arr.length;
}

function shift(arr, item) {
  const firstItem = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return firstItem;
}

function hasDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let x = 0; x < arr.length; x++) {
      if (arr[i] === arr[x] && x !== i) {
        return true;
      }
    }
  }
  return false;
}

function countLetters(arr) {
  let letterCount = {};
  for (let i = 0; i < arr.length; i++) {
    const letter = arr[i];
    if (!letterCount[`${letter}`]) {
      letterCount[`${letter}`] = 1;
    } else {
      letterCount[`${letter}`]++;
    } 
  }
  return letterCount;
}

module.exports = { push, pop, unshift, shift, hasDuplicates, countLetters };
