// 🧪 Exercise 5.1: Assignment operators
// This exercise will help you practice assignment operators.

// -------------------------
// ✅ Exercise: Assignment operators ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a variable `score` and assign it the initial value 10
// 2. Print the initial score: "Initial score: [score]"
// 3. Add 5 to score using += operator
// 4. Print: "After adding 5: [score]"
// 5. Subtract 3 from score using -= operator
// 6. Print: "After subtracting 3: [score]"
// 7. Multiply score by 2 using *= operator
// 8. Print: "After multiplying by 2: [score]"
// 9. Divide score by 4 using /= operator
// 10. Print: "After dividing by 4: [score]"

// 💭 Questions to think about:
// - What happens if you use /= 0?
// - How is += different from = +?

// -------------------------
// 📤 Example Output:
// -------------------------
// "Initial score: 10"
// "After adding 5: 15"
// "After subtracting 3: 12"
// "After multiplying by 2: 24"
// "After dividing by 4: 6"
// -------------------------

// 👇 Your code here 👇 
let score = 10
console.log("Initial score: " + score)

score += 5
console.log("After adding 5: " + score)

score -= 3
console.log("After subtracting 3: " + score)

score *= 2
console.log("After multiplying by 2: " + score)

score /= 4
console.log("After dividing by 4: " + score)
