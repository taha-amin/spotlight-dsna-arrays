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
  let arrTwo = [arr];
  console.log(arrTwo);
  for (let i = 0; i < arrTwo.length; i++) {
    arr[i + 1] = arrTwo[i];
  }
  arr[0] = item;
  return arr.length;
}

function shift(arr, item) {
  let arrTwo = [arr];
  for (let i = arrTwo.length; i >= 0; i--) {
    arr[i - 1] = arrTwo[i];
  }

  arr[0] = item;
  return arr.length;
}

module.exports = { push, pop, unshift, shift };
