// 🧪 Exercise 3.2: For-of loop
// This exercise will help you practice for-of loops.

// -------------------------
// ✅ Exercise: For-of loop ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an array called `animals` with values: ["dog", "cat", "bird"]
// 2. Use a for-of loop: for (const animal of animals)
// 3. Inside the loop, print each animal with the message
// 4. Use template literals or string concatenation for the message

// 💭 Questions to think about:
// - What's the difference between for-of and for-in loops?
// - What happens if you try to modify the animal variable inside the loop?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "I like dog"
// "I like cat"
// "I like bird"
// -------------------------

// 👇 Your code here 👇 
const animals = ["dog", "cat", "bird"]

for (const animal of animals) {
    console.log(`I like ${animal}`)
}
