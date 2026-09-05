/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if(num == 0) throw new Error("Division by 0 not allowed");
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(str) {
    const updatedStr = str.replaceAll(' ', '');

    let numbers = [];
    let operators = [];

    function precedence(operator) {
      if(operator == '+' || operator == '-') return 1;
      if(operator == '*' || operator == '/') return 2;

      return 0;
    }

    function performOperation() {
      const b = numbers.pop();
      const a = numbers.pop();
      const operator = operators.pop();

      if(a == undefined || b == undefined) throw new Error("Invalid expression");

      if(operator == '+') numbers.push(a + b);
      else if(operator == '-') numbers.push(a - b);
      else if(operator == '*') numbers.push(a * b);
      else if(operator == '/') {
        if(b == 0) throw new Error("Division by 0 not allowed");
        numbers.push(a / b);
      }
    }

    let i = 0;
    while(i < updatedStr.length) {
      const ch = updatedStr[i];

      // if it's a number
      if((ch >= '0' && ch <= '9') || (ch == '.')) {
        let numStr = '';
        let decimalCnt = 0;
        
        // capture the whole number
        while(i < updatedStr.length && ((updatedStr[i] >= '0' && updatedStr[i] <= '9') || updatedStr[i] == '.')) {
          if(updatedStr[i] == '.') {
            decimalCnt++;
            if(decimalCnt > 1) throw new Error("Invalid decimal number");
          }

          numStr += updatedStr[i];
          i++;
        }

        const number = Number(numStr);
        if(Number.isNaN(number)) throw new Error("Invalid number");

        numbers.push(number);
      }

      // if it's an opening parentheses
      else if(ch == '(') {
        operators.push('(');
        i++;
      }

      // if it's a closing parentheses
      else if(ch == ')') {
        // solve the bracket
        while(operators.length > 0 && operators[operators.length - 1] != '(') {
          performOperation();
        }

        if(operators.length == 0 || operators[operators.length - 1] != '(') throw new Error("Invalid parentheses");
        operators.pop();   // removing opening parentheses as the bracket is solved now
        i++;
      }

      // if it's an operator
      else if(ch == '+' || ch == '-' || ch == '*' || ch == '/') {
        // perform operation till a bracket if found
        while(operators.length > 0 && operators[operators.length - 1] != '(' && precedence(operators[operators.length - 1]) >= precedence(ch)) {
          performOperation();
        }

        operators.push(ch);
        i++;
      }

      // if it's an invalid char
      else {
        throw new Error("Invalid character: " + ch);
      }
    }

    // perform remaining operations
    while(operators.length > 0) {
      if(operators[operators.length - 1] == '(') throw new Error("Invalid parentheses");
      performOperation();
    }

    if(numbers.length != 1) throw new Error("Invalid expression");
    return this.result = numbers[0];
  }
}

module.exports = Calculator;