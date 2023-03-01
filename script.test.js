const {
  sum,
  stringLength,
  reverseString,
  Calculator,
  capString,
} = require("./script");

test("sum number of letters in string", () => {
  //arrange
  const string = "abraham";

  //assert
  expect(stringLength(string)).toBe(7);
}); //5

test("Should return Error if string count isnt between 0 & 10", () => {
  //arrange
  const string = "helloworldhowareyou";
  //act
  const actual = () => {
    stringLength(string);
  };

  //assert
  expect(actual).toThrowError();
}); //this is a function that throws an error

test("should reture reversed strings", () => {
  const string = "hello world";

  const actual = reverseString(string);
  //assert
  expect(actual).toBe(reverseString(string));
});

test("1 + 2 should return 2", () => {
  //arrange
  const num1 = 1;
  const num2 = 2;
  //act
  const calculator = new Calculator(num1, num2);
  const actual = calculator.add();
  //assert
  expect(actual).toBe(3);
});

test("2 - 1 should return 1", () => {
  //arrange
  const num1 = 2;
  const num2 = 1;
  //act
  const calculator = new Calculator(num1, num2);
  const actual = calculator.subtract();
  //assert
  expect(actual).toBe(1);
});
