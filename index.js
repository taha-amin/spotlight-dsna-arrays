function push(arr, item) {
  //   arr.length = arr.length + 1;
  arr[arr.length] = item;
  return arr.length;
}

module.exports = { push };
