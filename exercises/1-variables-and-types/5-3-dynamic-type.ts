// 🧪 Exercise 5.3: Dynamic type with any
// This exercise will help you understand how `typeof` works with `any` type.

// -------------------------
// ✅ Exercise: Dynamic type with any ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a variable called `mystery` with `any` type: let mystery: any
// 2. Assign it a string value (e.g., "Hello")
// 3. Use typeof to check the type and print "Type of mystery: " + typeof mystery
// 4. Reassign it to a number value (e.g., 42)
// 5. Use typeof to check the type and print "Now the type of mystery: " + typeof mystery

// 💭 Questions to think about:
// - What happens to the typeof result when you change the value?
// - Why might using `any` type be risky in TypeScript?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Type of mystery: string"
// "Now the type of mystery: number"
// -------------------------

// 👇 Your code here 👇 
let mystery: any
mystery = "Hello"
console.log("Type of mystery: " + typeof mystery)

mystery = 42
console.log("Now the type of mystery: " + typeof mystery)
