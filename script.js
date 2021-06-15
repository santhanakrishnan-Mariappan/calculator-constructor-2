function Calculator(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
Calculator.prototype = {

    clear() {
        this.currentOperand = " ";
        this.previousOperand = " ";
        this.operation = undefined;

    },

    delete() {
        console.log(this.currentOperand.toString().slice(0,-1));
        this.currentOperand= this.currentOperand.toString().slice(0,-1)

    },

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) {
            return
        }
        this.currentOperand = this.currentOperand.toString() + number;

    },

    chooseOperation(operation) {
       
        if (this.currentOperand===" "){return};
        if (this.previousOperand !==' '){
            this.compute();
        }
        
        this.operation = operation;
        this.previousOperand = this.currentOperand + operation;
        this.currentOperand = ' ';

    },

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        switch (this.operation){
            case '+':
                computation = prev + current;
                break
              case '-':
                computation = prev - current;
                break
              case '*':
                computation = prev * current;
                break
              case '÷':
                computation = prev / current;
                break
              default:
                return;

            }
            this.currentOperand= computation;
            this.operation=undefined;
            this.previousOperand= ''
        },

    

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;
    }

}


var numberButtons = document.querySelectorAll('[data-number]');
var operationButtons = document.querySelectorAll('[data-operation]');
var equalsButton = document.querySelector('[data-equals]');
var deleteButton = document.querySelector('[data-delete]');
var allClearButton = document.querySelector('[data-all-clear]');
var previousOperandTextElement = document.querySelector('[data-previous-operand]');
var currentOperandTextElement = document.querySelector('[data-current-operand]');

var calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    console.log(button);
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    })
})


operationButtons.forEach(button => {
    console.log(button);
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click',() => {
        calculator.compute();
        calculator.updateDisplay();
        
    })


allClearButton.addEventListener('click', () => {
        calculator.clear();
        calculator.updateDisplay();
        
    })

deleteButton.addEventListener('click', () => {
        calculator.delete();
        calculator.updateDisplay();
        
    })    
