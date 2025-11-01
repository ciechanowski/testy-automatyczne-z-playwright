// 🧪 Exercise 5.1: Union Types with Type Checking
// This exercise will help you practice using union types and typeof for handling different test input types.

// -------------------------
// ✅ Exercise: Test Data Validation ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a type alias called `TestInput` that can be: string | number | boolean
// 2. Create a function `processTestInput(input: TestInput): string` that:
//    - If input is a string, returns "Text input: " + input
//    - If input is a number, returns "Numeric input: " + input
//    - If input is a boolean, returns "Boolean input: " + input
//    - Use typeof operator to check the input type
// 3. Use console.log to test processTestInput with: "hello", 42, and true
// 4. Create a type alias `TestResult` that can be: "pass" | "fail" | "skip"
// 5. Create a function `getResultMessage(result: TestResult): string` that returns:
//    - "✅ Test passed successfully" for "pass"
//    - "❌ Test failed" for "fail"
//    - "⏭️ Test was skipped" for "skip"
// 6. Use console.log to test getResultMessage with "pass" and "fail"
// 7. Create a variable that can hold either a string or number for user ID
// 8. Set it to a string value, then console.log it
// 9. Set it to a number value, then console.log it

// 💭 Questions to think about:
// - How do union types help handle different kinds of test data?
// - Why use typeof to check types at runtime?
// - When are union types better than using 'any'?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Text input: hello"
// "Numeric input: 42"
// "Boolean input: true"
// "✅ Test passed successfully"
// "❌ Test failed"
// -------------------------

// 👇 Your code here 👇
type TestInput = string | number | boolean

function processTestInput(input: TestInput): string {
    if (typeof input === "string") {
        return "Text input: " + input
    } else if (typeof input === "number") {
        return "Numeric input: " + input
    } else if (typeof input === "boolean") {
        return "Boolean input: " + input
    } else {
        return "Unknown input type"
    }
}

type TestResult = "pass" | "fail" | "skip"

function getResultMessage(result: TestResult): string {
    switch (result) {
        case "pass":
            return "✅ Test passed successfully"
        case "fail":
            return "❌ Test failed"
        case "skip":
            return "⏭️ Test was skipped"
        default:
            return "Unknown result"
    }
}

console.log(getResultMessage("pass"))
console.log(getResultMessage("fail"))

let userId: string | number

userId = "user_123"
console.log(userId)

userId = 12345
console.log(userId)
