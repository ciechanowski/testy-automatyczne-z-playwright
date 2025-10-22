// 🧪 Exercise 2.1: Array methods
// This exercise will help you practice array methods.

// -------------------------
// ✅ Exercise: Array methods ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an array `numbers` with values [1, 2, 3, 4, 5]
// 2. Use push(6) to add 6 to the end of the array
// 3. Use pop() to remove and return the last element (6)
// 4. Use shift() to remove and return the first element (1)
// 5. Print the final array using console.log()

// 💭 Questions to think about:
// - What does pop() return if the array is empty?
// - What's the difference between pop() and shift()?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Final array: [2, 3, 4, 5]"
// -------------------------

// 👇 Your code here 👇 
const numbers = [1, 2, 3, 4, 5]

numbers.push(6)
numbers.pop()
numbers.shift()

console.log("Final array: [" + numbers.join(", ") + "]")
