// 🧪 Exercise 6.2: Classes and Access Modifiers
// Practice public/private/protected modifiers and read-only properties.

export {}

// Steps:
// 1. Create class `Counter` with a private property `count` (number) initialized to 0.
// 2. Add a public method `increment()` that increases `count` by 1.
// 3. Add a public method `getCount()` that returns the current count.
// 4. Add a readonly property `id` set via constructor parameter.
// 5. Create an instance and call increment a few times, then print `getCount()` and `id`.

// 📤 Expected output (example):
// 3
// "counter-1"

// 👇 Your code here 👇
class Counter {
    private count: number = 0

    readonly id: string

    constructor(id: string) {
        this.id = id
    }

    increment(): void {
        this.count += 1 
    }

    getCount(): number {
        return this.count
    }
}

const counter = new Counter("counter-1")

counter.increment()
counter.increment()
counter.increment()

console.log(counter.getCount())
console.log(counter.id)
