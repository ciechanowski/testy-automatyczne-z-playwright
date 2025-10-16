// 🧪 Exercise 1.2: Modulo operator
// This exercise will help you practice the modulo operator.

// -------------------------
// ✅ Exercise: Modulo operator ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a variable `dividend` and assign it the value 17
// 2. Create a variable `divisor` and assign it the value 5
// 3. Calculate the remainder using the modulo operator (%)
// 4. Store the result in a variable called `remainder`
// 5. Print the result using template literals or string concatenation

// 💭 Questions to think about:
// - What happens if the divisor is 0?
// - What is the result when dividend < divisor?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "The remainder of 17 divided by 5 is 2"
// -------------------------

// 👇 Your code here 👇 
const dividend = 17
const divisor = 5

const remainder = dividend % divisor
console.log(`The remainder of ${dividend} divided by ${divisor} is ${remainder}`)
