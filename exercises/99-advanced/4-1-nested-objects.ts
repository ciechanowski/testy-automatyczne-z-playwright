// 🧪 Exercise 4.1: Nested Objects for Test Configuration
// This exercise will help you practice working with nested objects for complex test configurations.

// -------------------------
// ✅ Exercise: Test Configuration Objects ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a type called `DatabaseConfig` with properties:
//    - host: string
//    - port: number
//    - username: string
// 2. Create a type called `BrowserConfig` with properties:
//    - name: string
//    - headless: boolean
//    - viewport: { width: number, height: number }
// 3. Create a type called `TestConfig` with properties:
//    - environment: string
//    - timeout: number
//    - database: DatabaseConfig
//    - browser: BrowserConfig
// 4. Create a test configuration object that matches the TestConfig type
// 5. Use console.log to print: "Environment: [environment]"
// 6. Use console.log to print: "Database: [host]:[port]" (access nested properties)
// 7. Use console.log to print: "Browser: [name] ([width]x[height])" (access nested properties)
// 8. Create a function `validateConfig` that takes TestConfig and checks:
//    - timeout is greater than 0
//    - database port is between 1000 and 9999
//    - browser viewport width and height are positive numbers
//    - Returns true if valid, false if not (and prints error message)
// 9. Use console.log to print the result: "Configuration is valid" or "Configuration has errors"

// 💭 Questions to think about:
// - How do nested types help organize complex test configurations?
// - Why is type safety important for configuration objects?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Environment: staging"
// "Database: localhost:5432"
// "Browser: chrome (1920x1080)"
// "Configuration is valid"
// -------------------------

// 👇 Your code here 👇
type DatabaseConfig = {
    host: string
    port: number
    username: string
}

type BrowserConfig = {
    name: string
    headless: boolean
    viewport: { width: number; height: number }
}

type TestConfig = {
    environment: string
    timeout: number
    database: DatabaseConfig
    browser: BrowserConfig
}

const testConfig: TestConfig = {
    environment: "staging",
    timeout: 30000,
    database: {
        host: "localhost",
        port: 5432,
        username: "testuser"
    },
    browser: {
        name: "chrome",
        headless: false,
        viewport: {
            width: 1920,
            height: 1080
        }
    }
}

console.log("Environment:", testConfig.environment)
console.log(`Database: ${testConfig.database.host}:${testConfig.database.port}`)
console.log(
    `Browser: ${testConfig.browser.name} (${testConfig.browser.viewport.width}x${testConfig.browser.viewport.height})`
)

function validateConfig(config: TestConfig): boolean {
    if (config.timeout <= 0) {
        console.log("Error: Timeout must be greater than 0")
        return false
    }

    if (config.database.port < 1000 || config.database.port > 9999) {
        console.log("Error: Database port must be between 1000 and 9999")
        return false
    }

    if (config.browser.viewport.width <= 0 || config.browser.viewport.height <= 0) {
        console.log("Error: Browser viewport dimensions must be positive")
        return false
    }

    return true
}

if (validateConfig(testConfig)) {
    console.log("Configuration is valid")
} else {
    console.log("Configuration has errors")
}
