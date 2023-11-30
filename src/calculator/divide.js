/**
 * Division
 */
function divide(firstNum, secondNum) {
    if (secondNum !== 0) {
      return firstNum / secondNum;
    } else {
      throw new Error("Cannot divide by zero");
    }
  }
  
  module.exports = divide;
  