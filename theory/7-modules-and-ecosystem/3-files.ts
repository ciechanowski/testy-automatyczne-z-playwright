// 📘 Lesson: Working with files (read & write)
// In this lesson, you'll learn how to read and write files in TypeScript.

// First - reading from text files

console.log("\n-------------------------")
console.log("📖 Reading from a file")
console.log("-------------------------\n")

// First we need to import the fs (file system) module
import * as fs from "fs"

// Now we can use the fs module to read a file
// We will use fs.readFileSync
// - synchronous method
// - blocks the execution until the file is read
// - returns the file content as a string

const data = fs.readFileSync("theory/7-modules-and-ecosystem/test-data/example.txt", "utf-8")
console.log("File content:")
console.log(data)

// -------------------------
// 🧠 Summary:
// -------------------------
// - File system operations are essential for reading and writing data
// - Use `fs.readFileSync` to read files synchronously
// - Use `fs.writeFileSync` to write files synchronously
// - Always handle errors using try-catch
// - Use absolute paths to avoid issues with relative paths!

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • File System: https://www.typescriptlang.org/docs/handbook/2/file-system.html
// • Node.js File System: https://nodejs.org/api/fs.html
// • Path Module: https://nodejs.org/api/path.html

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
