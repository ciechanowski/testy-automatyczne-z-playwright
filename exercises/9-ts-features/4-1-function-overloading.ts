// 🧪 Exercise 5.1: Function overloading
// This exercise will help you practice function overloading in TypeScript.

// -------------------------
// ✅ Exercise: Function overloading ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create function overloads for a function called `combine`
// 2. First overload: combine(string, string) returns string
// 3. Second overload: combine(number, number) returns number
// 4. Implement the function to handle both cases
// 5. Call the function with two strings and two numbers
// 6. Print both results

// 💭 Questions to think about:
// - What happens if you call combine with a string and a number?
// - How does TypeScript choose which overload to use?
// - What's the difference between function overloading and union types?
// - When would you prefer function overloading over union types?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Combined strings: HelloWorld"
// "Combined numbers: 15"
// -------------------------

// 👇 Your code here 👇 
function combine(a: string, b: string): string 
function combine(a: number, b: number): number 
function combine(a: any, b: any): any {
    if (typeof a === "string" && typeof b === "string") {
        return a + b
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b
    }
}

const combinedStrings = combine("Hello", "World") 
console.log("Combined strings: " + combinedStrings) 
const combinedNumbers = combine(7, 8) 
console.log("Combined numbers: " + combinedNumbers) 
