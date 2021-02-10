function arithmeticOperations(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      return parseInt(firstNumber) + parseInt(secondNumber);
    case "-":
      return parseInt(firstNumber) - parseInt(secondNumber);
    case "*":
      return parseInt(firstNumber) * parseInt(secondNumber);
    case "/":
      return parseInt(firstNumber) / parseInt(secondNumber);
    default:
      return parseInt(firstNumber);
  }
}

export default arithmeticOperations;
