// test 1

const stringLength=(string) => {
  if (string.length > 0 && string.length < 10) {
    return string.length;
  }
  else {
    throw new Error('string length is not between 0 to 10')
  }
}

module.exports = {stringLength}