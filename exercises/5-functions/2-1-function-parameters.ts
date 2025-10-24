// 🧪 Exercise 2.1: Function parameters
// This exercise will help you practice function parameters.

// -------------------------
// ✅ Exercise: Function parameters ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a function called `calculateArea` using the function keyword
// 2. Add two parameters: `width` (number) and `height` (number)
// 3. Inside the function, calculate width * height
// 4. Return the calculated area
// 5. Call the function with arguments 5 and 3
// 6. Store the result and print it with the message

// 💭 Questions to think about:
// - What happens if you pass negative numbers?
// - What if you pass strings instead of numbers?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "The area is 15 square units"
// -------------------------

// 👇 Your code here 👇 
function calculateArea(width: number, height: number) {
    return width * height
}

const area = calculateArea(5, 3)
console.log(`The area is ${area} square units`)
