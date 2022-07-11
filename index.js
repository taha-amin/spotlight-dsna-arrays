function push(arr, item) {
  //   arr.length = arr.length + 1;
  arr[arr.length] = item;
  return arr.length;
}

function pop(arr) {
  arr.length = arr.length - 1
  return arr.length;
}

module.exports = { push, pop };
