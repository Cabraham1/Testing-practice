// test 1

const stringLength=(string) => {
  if (string.length > 0 && string.length < 10) {
    return string.length;
  }
  else {
    throw new Error('string length is not between 0 to 10')
  }
}


const reverseString = (string) => {
  return string.split('').reverse().join('')
}

module.exports = { stringLength, reverseString };