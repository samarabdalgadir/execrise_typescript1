// --- Part A: Function Type Annotations ---

function addNumbers(a: number, b: number): number {
    return a + b;
}

function concatStrings(str1: string, str2: string): string {
    return str1 + str2;
}

function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    return sum / numbers.length;
}

function logMessage(message: string): void {
    console.log("Log:", message);
}

// ✅ Test Part A
console.log("🧮 Sum:", addNumbers(5, 7));
console.log("🔤 Concatenated:", concatStrings("Hello, ", "world!"));
console.log("📊 Average:", calculateAverage([10, 20, 30]));
logMessage("This is a test message");

// --- Part B: Optional, Default, and Rest Parameters ---

function createGreeting(name: string, title?: string): string {
    return title ? `Hello, ${title} ${name}!` : `Hello, ${name}!`;
}

function calculateOrderTotal(price: number, quantity: number = 1, discountCode?: string): number {
    let total = price * quantity;
    if (discountCode === "SAVE10") {
        total *= 0.9;
    }
    return total;
}

function sumAllNumbers(...numbers: number[]): number {
    return numbers.reduce((acc, val) => acc + val, 0);
}

// ✅ Test Part B
console.log("👋 Greeting 1:", createGreeting("Alice"));
console.log("👋 Greeting 2:", createGreeting("Alice", "Dr."));

console.log("💰 Total 1:", calculateOrderTotal(100));
console.log("💰 Total 2 (with qty):", calculateOrderTotal(100, 3));
console.log("💰 Total 3 (with discount):", calculateOrderTotal(100, 2, "SAVE10"));

console.log("➕ Sum All:", sumAllNumbers(1, 2, 3, 4, 5));

// --- Part C: Function Types and Higher-Order Functions ---

type ArithmeticOperation = (a: number, b: number) => number;

const add: ArithmeticOperation = (a, b) => a + b;
const subtract: ArithmeticOperation = (a, b) => a - b;
const multiply: ArithmeticOperation = (a, b) => a * b;
const divide: ArithmeticOperation = (a, b) => {
    if (b === 0) {
        console.warn("⚠️ Division by zero");
        return Infinity;
    }
    return a / b;
};

function executeOperation(a: number, b: number, operation: ArithmeticOperation): number {
    return operation(a, b);
}

// ✅ Test Part C
console.log("🔢 Add:", executeOperation(10, 5, add));
console.log("➖ Subtract:", executeOperation(10, 5, subtract));
console.log("✖️ Multiply:", executeOperation(10, 5, multiply));
console.log("➗ Divide:", executeOperation(10, 0, divide)); // handles division by zero
