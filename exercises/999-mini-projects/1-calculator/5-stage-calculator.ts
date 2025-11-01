// 🧪 Exercise 5: Calculator Stage 5 - Advanced Calculator with Enums
// This exercise will help you practice creating a calculator class with memory and history features using enums.
// We'll build this step by step to make it easier to understand.

// -------------------------
// ✅ Exercise: Advanced Calculator Class with Enums ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. First, create an enum called `Operation` with values: Add, Subtract, Multiply, Divide
//    (This is the same enum we used in previous stages)

// 2. Create a basic Calculator class with just the constructor and one operation method:
//    - Create class `Calculator`
//    - Add a private property `history: string[] = []` to store operation records
//    - Add method `add(a: number, b: number): number` that:
//      * Calculates the result
//      * Adds a record to history like "Add: 5 + 3 = 8"
//      * Returns the result

// 3. Test the basic calculator:
//    - Create an instance: `const calc = new Calculator()`
//    - Test: `console.log(calc.add(5, 3))` should print 8
//    - Test: `console.log(calc.getHistory())` should print ["Add: 5 + 3 = 8"]

// 4. Add more operation methods:
//    - Add `subtract(a: number, b: number): number`
//    - Add `multiply(a: number, b: number): number`
//    - Add `divide(a: number, b: number): number` (with division by zero check)

// 5. Add memory functionality:
//    - WHY MEMORY? Memory allows you to store a number for later use!
//      * Real calculators have M+ (memory plus), M- (memory minus), MR (memory recall), MC (memory clear)
//      * Useful for: storing intermediate results, constants, running totals
//      * Example: Calculate 5 + 3, store result (8), then use it in next calculation like 8 * 2
//    - Add private property `memory: number = 0`
//    - Add method `storeInMemory(value: number): void`
//    - Add method `recallMemory(): number`
//    - Add method `clearMemory(): void`

// 6. Add the getHistory method:
//    - Method `getHistory(): string[]` that returns the history array

// 7. Final testing - comprehensive verification:
//    - Test basic add: calc.add(5, 3) should return 8
//    - Test history: getHistory() should show ["Add: 5 + 3 = 8"]
//    - Test memory: storeInMemory(10), recallMemory() should return 10
//    - Test memory usage: multiply(recallMemory(), 2) should work and return 20
//    - Test more operations: subtract(10, 4) should update history to ["Add: 5 + 3 = 8", "Multiply: 10 * 2 = 20", "Subtract: 10 - 4 = 6"]
//    - Test error handling: divide(10, 0) should show "Division by zero!" on console
//    - Test complete workflow: add → store → recall → multiply

// 💭 Questions to think about:
// - How do classes help organize related functionality?
// - What does 'private' mean for class properties?
// - Why is memory useful in calculators?
// - How does history tracking work?

// -------------------------
// 📤 Expected Output:
// -------------------------
// 8
// [ 'Add: 5 + 3 = 8' ]
// 10
// [ 'Add: 5 + 3 = 8', 'Multiply: 10 * 2 = 20' ]
// [ 'Add: 5 + 3 = 8', 'Multiply: 10 * 2 = 20', 'Subtract: 10 - 4 = 6' ]
// Division by zero!
// 8
// [
//   'Add: 5 + 3 = 8',
//   'Multiply: 10 * 2 = 20',
//   'Subtract: 10 - 4 = 6',
//   'Add: 5 + 3 = 8',
//   'Multiply: 8 * 2 = 16'
// ]
// -------------------------

// 👇 Your code here 👇
enum Operation {
    Add,
    Subtract,
    Multiply,
    Divide
}

class Calculator {
    private history: string[] = []
    private memory: number = 0

    add(a: number, b: number): number {
        const result = a + b
        this.history.push(`${Operation[Operation.Add]}: ${a} + ${b} = ${result}`)
        return result
    }

    subtract(a: number, b: number): number {
        const result = a - b
        this.history.push(`${Operation[Operation.Subtract]}: ${a} - ${b} = ${result}`)
        return result
    }

    multiply(a: number, b: number): number {
        const result = a * b
        this.history.push(`${Operation[Operation.Multiply]}: ${a} * ${b} = ${result}`)
        return result
    }

    divide(a: number, b: number): number {
        if (b === 0) {
            console.log("Division by zero!")
            return 0
        }
        const result = a / b
        this.history.push(`${Operation[Operation.Divide]}: ${a} / ${b} = ${result}`)
        return result
    }

    storeInMemory(value: number): void {
        this.memory = value
    }

    recallMemory(): number {
        return this.memory
    }

    clearMemory(): void {
        this.memory = 0
    }

    getHistory(): string[] {
        return this.history
    }
}

const calc = new Calculator()

console.log(calc.add(5, 3)) 
console.log(calc.getHistory()) 

calc.storeInMemory(10) 
console.log(calc.recallMemory()) 

const memoryValue = calc.recallMemory() 
calc.multiply(memoryValue, 2) 
console.log(calc.getHistory()) 

calc.subtract(10, 4) 
console.log(calc.getHistory()) 

calc.divide(10, 0) 

calc.clearMemory() 
const result = calc.add(5, 3) 
console.log(result) 
calc.storeInMemory(result)
calc.multiply(calc.recallMemory(), 2)
console.log(calc.getHistory()) 
