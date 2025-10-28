// 🧪 Exercise 6.1: Simple Classes
// Learn how to create a class, constructor and instance methods.

// -------------------------
// ✅ Exercise: Simple Classes ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a class called `Person` with two properties: name (string) and age (number).
// 2. Add a constructor that accepts name and age and assigns them to the instance.
// 3. Add a method `greet()` that returns: `Hello, my name is <name> and I'm <age> years old`.
// 4. Create an instance of `Person` and print the result of `greet()`.

// -------------------------
// 📤 Expected Output (example):
// -------------------------
// "Hello, my name is Anna and I'm 30 years old"
// -------------------------

// 👇 Your code here 👇
class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    greet(): string {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old`
  }
}

const person = new Person("Anna", 30)
console.log(person.greet())
