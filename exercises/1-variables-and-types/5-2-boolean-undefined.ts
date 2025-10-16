// 🧪 Exercise 5.2: Boolean and undefined
// This exercise will help you practice checking types of boolean and undefined values.

// -------------------------
// ✅ Exercise: Boolean and undefined ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a variable called `isDone` and assign it a boolean value (e.g., true)
// 2. Create a variable called `notSet` without assigning any value: let notSet
// 3. Use typeof operator to check the type of isDone: typeof isDone and use console.log() to print it
// 4. Use typeof operator to check the type of notSet: typeof notSet and use console.log() to print it

// 💭 Questions to think about:
// - What does typeof return for undefined?
// - What's the difference between undefined and null?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Type of isDone: boolean"
// "Type of notSet: undefined"
// -------------------------

// 👇 Your code here 👇
const isDone = true
let notSet: any

console.log("Type of isDone: " + typeof isDone)
console.log("Type of notSet: " + typeof notSet)
