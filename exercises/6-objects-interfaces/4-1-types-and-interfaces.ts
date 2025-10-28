// 🧪 Exercise 4.1: Types and interfaces
// This exercise will help you practice types and interfaces.

// -------------------------
// ✅ Exercise: Types and interfaces ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a type called `Status` using the type keyword
// 2. Define it as a union type: 'active' | 'inactive' | 'pending'
// 3. Create an interface called `Account` using the interface keyword
// 4. Define properties: id (number), name (string), status (Status type)
// 5. Create an account object that matches the Account interface
// 6. Print the account information using template literals

// 💭 Questions to think about:
// - What happens if you try to assign an invalid status value?
// - What's the difference between type and interface?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Account 123: John Doe is active"
// -------------------------

// 👇 Your code here 👇 
type Status = "active" | "inactive" | "pending"

interface Account {
    id: number
    name: string
    status: Status
}

const account: Account = {
    id: 123,
    name: "John Doe",
    status: "active"
}

console.log(`Account ${account.id}: ${account.name} is ${account.status}`)
