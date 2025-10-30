// 🧪 Exercise 4.1: Error handling in async functions
// This exercise will help you practice error handling with async/await.

// -------------------------
// ✅ Exercise: Error handling in async functions ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a function called `riskyOperation` that returns a new Promise
// 2. Use Math.random() to randomly resolve or reject the Promise
// 3. Create an async function called `handleRiskyOperation`
// 4. Use try-catch block to await the riskyOperation
// 5. In the try block, print "Success!"
// 6. In the catch block, print "Error: " + error.message

// 💭 Questions to think about:
// - What happens if you don't use try-catch with async functions?
// - How can you handle different types of errors differently?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Success!" or "Error: Something went wrong!"
// -------------------------

// 👇 Your code here 👇 
function riskyOperation() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve("Success!")
        } else {
            reject(new Error("Something went wrong!"))
        }
    })
}

async function handleRiskyOperation() {
    try {
        const result = await riskyOperation()
        console.log(result)
    } catch (error: any) {
        console.log("Error: " + error.message)
    }
}

handleRiskyOperation()
