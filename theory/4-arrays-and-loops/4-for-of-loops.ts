// 📘 Lesson: For-of Loops in TypeScript - Basics
// In this lesson, you'll learn how to use for-of loops to iterate through arrays and other iterable objects.

// -------------------------
// 🔄 What is a for-of loop?
// -------------------------
// A for-of loop is a modern way to iterate through arrays and other iterable objects.
// It gives you direct access to the values (not the indices).

console.log("\n-------------------------")
console.log("🔄 Basic for-of loop")
console.log("-------------------------\n")

const colors = ["red", "green", "blue"]

// Using for-of to get each color directly
for (const color of colors) {
    console.log("I like", color)
}

// -------------------------
// 🔄 For-of vs traditional for loop
// -------------------------
console.log("\n-------------------------")
console.log("🔄 For-of vs traditional for")
console.log("-------------------------\n")

const fruits = ["apple", "banana", "orange"]

// Traditional for loop (using index)
console.log("Traditional for loop:")
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit at index", i, "is", fruits[i])
}

// For-of loop (direct value access)
console.log("For-of loop:")
for (const fruit of fruits) {
    console.log("Fruit:", fruit)
}

// -------------------------
// 🔄 For-of with strings
// -------------------------
console.log("\n-------------------------")
console.log("🔄 For-of with strings")
console.log("-------------------------\n")

const message = "Hello"

for (const letter of message) {
    console.log("Letter:", letter)
}

// -------------------------
// 🔄 For-of with numbers array
// -------------------------
console.log("\n-------------------------")
console.log("🔄 For-of with numbers")
console.log("-------------------------\n")

const numbers = [1, 2, 3, 4, 5]
let sum = 0

for (const num of numbers) {
    sum += num
    console.log("Adding", num, "- Total so far:", sum)
}

console.log("Final sum:", sum)

// -------------------------
// 🧠 When to use for-of?
// -------------------------
// Use for-of when:
// ✅ You need the values from an array (not the indices)
// ✅ You want simpler, more readable code
// ✅ You're working with modern JavaScript/TypeScript

// Use traditional for when:
// ✅ You need the index
// ✅ You need to iterate backwards
// ✅ You need to skip elements or break early

// -------------------------
// 🧠 Summary:
// -------------------------
// - For-of loops give you direct access to array values
// - Use `const` for the loop variable (recommended)
// - Works with arrays, strings, and other iterables
// - Simpler and more readable than traditional for loops
// - Use Object.values/keys/entries to iterate through objects

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • For...of loops: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// • Iteration protocols: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
// • Object methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {} 