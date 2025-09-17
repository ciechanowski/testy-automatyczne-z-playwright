// 🧪 Exercise 3.2: Years of experience
// This exercise will help you practice type inference with numbers.

// -------------------------
// ✅ Exercise: Years of experience ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a variable called `years` using const (without type annotation)
// 2. Assign it a number value (e.g., 3)
// 3. Let TypeScript automatically infer the type as number
// 4. Use console.log() to print "I have " + years + " years of experience"
// 5. Try using template literals: `I have ${years} years of experience`

// 💭 Questions to think about:
// - What happens if you assign a decimal number like 3.5?
// - Can you perform arithmetic operations with this variable?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "I have 3 years of experience"
// "I have 3 years of experience"
// -------------------------

// 👇 Your code here 👇
const years = 3
console.log("I have " + years + " years of experience")
console.log(`I have ${years} years of experience`)
