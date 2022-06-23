let number1 = window.prompt("Enter a your first number: ")
let operator = window.prompt("Enter your prefered operator[+,-,/,*,%]")
let number2 = window.prompt("Enter a your second number: ")
let output = undefined
number1 = parseInt(number1)
number2 = parseInt(number2)

switch (operator) {
    case ("+"):
        output = number1 + number2 
        break;
    case ("-"):
        output = number1 - number2 
        break
    case ("/"):
        output = number1 / number2 
        break
    case ("*"):
        output = number1 * number2 
        break
    case ("%"):
        output = number1 % number2 
        break
    default:
        output = "invalid operator"
        break;
}
 
alert("the output is: " + output )
