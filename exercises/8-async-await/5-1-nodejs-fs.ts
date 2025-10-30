// 🧪 Exercise 5.1: Node.js File System
// This exercise will help you practice using Node.js built-in async functions.

// -------------------------
// ✅ Exercise: Node.js File System ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Import the fs module with promises: `import { promises as fs } from 'fs'`
// 2. Create an async function called `readAndWriteFile`
// 3. Use await with fs.writeFile() to create 'test.txt' with content "Hello from Node.js!"
// 4. Use await with fs.readFile() to read the file back (with 'utf8' encoding)
// 5. Print "File content: " + the content that was read
// 6. Call the function and handle any errors with try-catch

// 💭 Questions to think about:
// - What happens if the file doesn't exist when you try to read it?
// - What's the difference between fs.writeFile and fs.writeFileSync?
// - Why do we use 'utf8' encoding when reading files?
// - What's the purpose of the try-catch block in async operations?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "File content: Hello from Node.js!"
// "File operations completed successfully!"
// -------------------------

// 👇 Your code here 👇
import { promises as fs } from "fs"

async function readAndWriteFile() {
    try {
        await fs.writeFile("test.txt", "Hello from Node.js!") 
        const content = await fs.readFile("test.txt", "utf8") 
        console.log("File content: " + content) 
        console.log("File operations completed successfully!")
    } catch (error: any) {
        console.log("Error: " + error.message)
    }
}

readAndWriteFile()
