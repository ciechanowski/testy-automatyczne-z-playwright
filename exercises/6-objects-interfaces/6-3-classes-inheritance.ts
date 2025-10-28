// 🧪 Exercise 6.3: Classes and Inheritance
// Create a base class and extend it.

export {}

// Steps:
// 1. Create a class `Animal` with a protected property `species` (string) and a constructor to set it.
// 2. Add a method `describe()` that returns `This is a <species>`.
// 3. Create a subclass `Dog` that extends `Animal` and adds a method `bark()` returning `Woof!`.
// 4. Create an instance of `Dog` with species `dog` and print `describe()` and `bark()`.

// 📤 Expected output:
// "This is a dog"
// "Woof!"

// 👇 Your code here 👇
class Animal {
    protected species: string

    constructor(species: string) {
        this.species = species 
    }

    describe(): string {
        return `This is a ${this.species}`
    }
}

class Dog extends Animal {
    bark(): string {
        return "Woof!"
    }
}

const dog = new Dog("dog")
console.log(dog.describe())
console.log(dog.bark())
