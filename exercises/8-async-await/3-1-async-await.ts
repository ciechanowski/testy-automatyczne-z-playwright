// 🧪 Exercise 3.1: Async-await
// This exercise will help you practice async-await syntax.

// -------------------------
// ✅ Exercise: Async-await ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a function called `delay` that returns a new Promise
// 2. Use setTimeout() inside the Promise to resolve after 100ms
// 3. Create an async function called `processData`
// 4. Inside processData, print "Processing..."
// 5. Use await to wait for the delay function
// 6. After the delay, print "Done!"

// 💭 Questions to think about:
// - What happens if you remove the await keyword?
// - How would you handle errors in an async function?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Processing..."
// "Done!"
// -------------------------

// 👇 Your code here 👇 
function delay() {
  return new Promise((resolve) => {
    setTimeout(resolve, 100)
  })
}
async function processData() { 
  console.log("Processing...") 
  await delay() 
  console.log("Done!") 
}
processData() 
