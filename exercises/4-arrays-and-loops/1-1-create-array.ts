// 🧪 Exercise 1.1: Create array
// This exercise will help you practice creating arrays.

// -------------------------
// ✅ Exercise: Create array ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an array called `fruits` with values: ["apple", "banana", "orange"]
// 2. Access the first element using index 0: fruits[0]
// 3. Access the last element using index fruits.length - 1
// 4. Get the total number of fruits using fruits.length
// 5. Print each result using console.log()

// 💭 Questions to think about:
// - What happens if you try to access fruits[5]?
// - How would you add a fourth fruit to the array?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "First fruit: apple"
// "Last fruit: orange"
// "Total fruits: 3"
// -------------------------

// 👇 Your code here 👇 
let fruits: string[] = ["apple", "banana", "orange"]

const firstFruit = fruits[0]
const lastFruit = fruits[fruits.length - 1]
const totalFruits = fruits.length

console.log("First fruit: " + firstFruit)
console.log("Last fruit: " + lastFruit)
console.log("Total fruits: " + totalFruits) 
