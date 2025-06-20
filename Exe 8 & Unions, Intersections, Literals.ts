// ----------------------
// Part A: Union Types and Type Narrowing
// ----------------------

function processInput(input: string | number | boolean): void {
  if (typeof input === "string") {
    console.log(`String length: ${input.length}`);
  } else if (typeof input === "number") {
    if (input > 0) {
      console.log("Number is positive");
    } else if (input < 0) {
      console.log("Number is negative");
    } else {
      console.log("Number is zero");
    }
  } else if (typeof input === "boolean") {
    console.log(`Input is ${input ? "true" : "false"}`);
  }
}

type ApiResponse =
  | { success: true; data: unknown }
  | { success: false; error: { code: number; message: string } };

function handleApiResponse(response: ApiResponse): void {
  if (response.success) {
    console.log(`Data received: ${JSON.stringify(response.data)}`);
  } else {
    console.log(`Error ${response.error.code}: ${response.error.message}`);
  }
}

// ----------------------
// Part B: Intersection Types
// ----------------------

interface Identifiable {
  id: string;
}

interface Timestamped {
  createdAt: Date;
  updatedAt: Date;
}

type UserLog = Identifiable &
  Timestamped & {
    userId: string;
    action: string;
  };

function createUserActivityLog(log: UserLog): void {
  console.log(
    `Log ${log.id} for user ${log.userId}: ${log.action} at ${log.createdAt.toISOString()}`
  );
}

// ----------------------
// Part C: Literal Types
// ----------------------

type LogLevel = "debug" | "info" | "warn" | "error";
type StatusCode = 200 | 400 | 404 | 500;

function logData(message: string, level: LogLevel): void {
  console.log(`[${level.toUpperCase()}]: ${message}`);
}

function handleStatus(status: StatusCode): string {
  switch (status) {
    case 200:
      return "OK";
    case 400:
      return "Bad Request";
    case 404:
      return "Not Found";
    case 500:
      return "Internal Server Error";
    default:
      return "Unknown Status";
  }
}

// ----------------------
// Part D: Optional Chaining and Nullish Coalescing
// ----------------------

interface UserProfile {
  id: number;
  username: string;
  preferences?: {
    theme?: "dark" | "light";
    notifications?: {
      email?: boolean;
      sms?: boolean;
    };
  };
}

function getUserTheme(user: UserProfile): string {
  return user.preferences?.theme ?? "light";
}

// ----------------------
// Testing All Parts
// ----------------------

// Part A Tests
console.log("=== Part A Tests ===");
processInput("hello");
processInput(42);
processInput(-10);
processInput(false);

handleApiResponse({ success: true, data: { name: "Alice" } });
handleApiResponse({
  success: false,
  error: { code: 500, message: "Server Error" },
});

// Part B Test
console.log("\n=== Part B Test ===");
const testLog: UserLog = {
  id: "log001",
  userId: "user123",
  action: "Logged in",
  createdAt: new Date("2025-06-10T08:00:00"),
  updatedAt: new Date("2025-06-10T09:00:00"),
};
createUserActivityLog(testLog);

// Part C Tests
console.log("\n=== Part C Tests ===");
logData("User created successfully", "info");
logData("Something is not right", "warn");
console.log(handleStatus(200));
console.log(handleStatus(404));

// Part D Tests
console.log("\n=== Part D Tests ===");
const user1: UserProfile = {
  id: 1,
  username: "admin",
  preferences: {
    theme: "dark",
    notifications: { email: true, sms: true },
  },
};

const user2: UserProfile = {
  id: 2,
  username: "guest",
  preferences: {
    notifications: { email: false },
  },
};

const user3: UserProfile = {
  id: 3,
  username: "anonymous",
};

console.log(`Theme for ${user1.username}: ${getUserTheme(user1)}`);
console.log(`Theme for ${user2.username}: ${getUserTheme(user2)}`);
console.log(`Theme for ${user3.username}: ${getUserTheme(user3)}`);
