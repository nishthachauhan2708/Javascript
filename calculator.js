function calculator(num1, num2, operator){
    switch(operator){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1/num2 : "Cannot divide by Zero";
        default:
            return "Invalid Operator";
        
    }
}
console.log(calculator(5,7, '+'));
console.log(calculator(12,8, '-'));
console.log(calculator(4,16, '*'));
console.log(calculator(2,18, '/'));