// 🧪 Exercise 3: Calculator Stage 3 - Basic Operations with Enums
// This exercise will help you practice extending the calculator with multiplication functionality and using enums for operations.

// -------------------------
// ✅ Exercise: Calculator with Basic Operations using Enums ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an enum called `Operation` with values: Add, Subtract, Multiply
// 2. Create a function called `add` that takes two numbers and returns their sum
// 3. Create a function called `subtract` that takes two numbers and returns their difference
// 4. Create a function called `multiply` that takes two numbers and returns their product
// 5. Create a function called `calculate` that takes an Operation enum and two numbers
//    - Use a switch statement to handle different operations
//    - Call the appropriate function based on the operation
// 6. Test the functions with console.log:
//    - calculate(Operation.Add, 5, 3) should print 8
//    - calculate(Operation.Subtract, 10, 4) should print 6
//    - calculate(Operation.Multiply, 7, 3) should print 21
//    - calculate(Operation.Add, 12, 8) should print 20

// 💭 Questions to think about:
// - How do enums improve type safety compared to strings?
// - Why use switch statements with enums?
// - How do enums prevent typos in operation names?

// -------------------------
// 📤 Expected Output:
// -------------------------
// 8
// 6
// 21
// 20
// -------------------------

// 👇 Your code here 👇
enum Operation {
    Add, 
    Subtract, 
    Multiply
}

function add(a: number, b: number): number {
    return a + b
}

function subtract(a: number, b: number): number {
    return a - b
}

function multiply(a: number, b: number): number {
    return a * b
}

function calculate(operation: Operation, num1: number, num2: number): number {
    switch (operation) {
        case Operation.Add:
            return add(num1, num2)
        case Operation.Subtract:
            return subtract(num1, num2)
        case Operation.Multiply:
            return multiply(num1, num2)
        default:
            return 0
    }
}

console.log(calculate(Operation.Add, 5, 3))
console.log(calculate(Operation.Subtract, 10, 4))
console.log(calculate(Operation.Multiply, 7, 3)) 
console.log(calculate(Operation.Add, 12, 8)) 
