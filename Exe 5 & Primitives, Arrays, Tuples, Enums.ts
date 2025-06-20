// --- Part A: Primitive Types, Arrays, Tuples, Enums ---

// number type
let myAge: number = 25; // Represents your age

// string type
let myName: string = "جيجي"; // Represents your name

// boolean type
let isLearningTS: boolean = true; // Whether you're currently learning TypeScript

// string[] type
let favoriteLanguages: string[] = ["TypeScript", "Python", "C#"]; // Favorite languages

// tuple type
let product: [string, number] = ["Laptop", 1500]; // Product name and price

// enum type
enum UserRole {
    Admin,
    Editor,
    Viewer
}

let myRole: UserRole = UserRole.Editor; // Assign role

// Template literal message
const message = `👋 Hello, my name is ${myName}, I am ${myAge} years old, and I am currently learning TypeScript: ${isLearningTS}`;
console.log(message);

// --- Part B: Type Inference ---

// TypeScript infers 'count' as type 'number' because it's initialized with a numeric literal.
let count = 10;
// count = "ten"; // ❌ Error

// TypeScript infers 'msg' as type 'string' because it's initialized with a string literal.
let msg = "Hello, TypeScript!";
// msg = 123; // ❌ Error

// TypeScript infers 'isActive' as type 'boolean'
let isActive = true;
// isActive = "yes"; // ❌ Error

// TypeScript infers 'scores' as number[]
let scores = [85, 92, 78, 90];
// scores = ["high", "low"]; // ❌ Error

// TypeScript infers userProfile as object { id: number, username: string }
let userProfile = { id: 1, username: "coder123" };
// userProfile = { id: "one", username: 123 }; // ❌ Error

// --- Part C: Enums Practice ---

// Numeric enum for order status
enum OrderStatus {
    Pending,
    Shipped,
    Delivered,
    Cancelled
}

// String enum for HTTP methods
enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}

// Function to describe order status
function getOrderStatusMessage(status: OrderStatus): string {
    return `🛒 Your order is currently ${OrderStatus[status]}.`;
}

// Function to handle HTTP method
function handleHttpMethod(method: HttpMethod): void {
    console.log(`🌐 Processing HTTP ${method} request.`);
}

// Test Part C
console.log(getOrderStatusMessage(OrderStatus.Pending));
console.log(getOrderStatusMessage(OrderStatus.Delivered));

handleHttpMethod(HttpMethod.GET);
handleHttpMethod(HttpMethod.POST);
