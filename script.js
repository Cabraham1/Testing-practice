// test 1

const stringLength = (string) => {
  if (string.length > 0 && string.length < 10) {
    return string.length;
  } else {
    throw new Error("string length is not between 0 to 10");
  }
};

const reverseString = (string) => {
  return string.split("").reverse().join("");
};

class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    return this.num1 + this.num2;
  }
  subtract() {
    return this.num1 - this.num2;
  }
}

module.exports = { stringLength, reverseString, Calculator };
