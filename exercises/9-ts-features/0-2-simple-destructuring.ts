// 🧪 Exercise 0.2: Simple Destructuring (Beginner Friendly)
// This exercise will help you understand what destructuring is in simple terms.

import { userInfo } from "os"

// -------------------------
// ✅ Exercise: Simple Destructuring ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a simple object called `person` with one property: name (string)
// 2. Give the person a name (e.g., "Alice")
// 3. Use destructuring to extract the name: const { name } = person
// 4. Print "Hello, " + name

// 💭 Questions to think about:
// - What is destructuring? (Think of it like "unpacking" an object)
// - Why use destructuring? (To get values out of objects more easily)

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Hello, Alice"
// -------------------------

// 👇 Your code here 👇 
const person = { name: "Alice" } 
const { name } = person 
console.log("Hello, " + name) 
