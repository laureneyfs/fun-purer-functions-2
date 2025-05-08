function removeLastNumber(arr) {
  const copyArr = [...arr];
  copyArr.pop();
  return copyArr;
}

module.exports = removeLastNumber;
