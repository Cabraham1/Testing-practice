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


test('should reture reversed strings', () => {
  const string = "hello world"

  const actual = reverseString(string);
  //assert
  expect(actual).toBe(reverseString(string));
})
