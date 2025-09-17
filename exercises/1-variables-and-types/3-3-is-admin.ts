// 🧪 Exercise 3.3: Is admin?
// This exercise will help you practice type inference with booleans.

// -------------------------
// ✅ Exercise: Is admin? ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a variable called `isAdmin` using const (without type annotation)
// 2. Assign it a boolean value (true or false)
// 3. Let TypeScript automatically infer the type as boolean
// 4. Use console.log() to print "Admin access: " + isAdmin
// 5. Try using template literals: `Admin access: ${isAdmin}`

// 💭 Questions to think about:
// - What happens if you assign a number like 1 or 0?
// - How does TypeScript handle truthy/falsy values?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Admin access: true"
// "Admin access: true"
// -------------------------

// 👇 Your code here 👇
const isAdmin = true
console.log("Admin access: " + isAdmin)
console.log(`Admin access: ${isAdmin}`)
