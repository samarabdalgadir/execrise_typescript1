// ------------------------
// Part A: Object Type Annotations
// ------------------------

const book: {
  title: string;
  author: string;
  pages: number;
  isPublished?: boolean;
} = {
  title: "The TypeScript Handbook",
  author: "TypeScript Team",
  pages: 120,
  isPublished: true,
};

console.log(book);

// ❌ أخطاء TypeScript (تعليق فقط)
// console.log(book.genre); // Property 'genre' does not exist
// book.pages = "many";     // Type 'string' is not assignable to type 'number'

// ------------------------
// Part B: Type Aliases and Interfaces
// ------------------------

type ProductType = {
  id: number;
  name: string;
  price: number;
  description?: string;
};

interface IProduct {
  id: number;
  name: string;
  price: number;
  description?: string;
}

const product1: ProductType = {
  id: 1,
  name: "Laptop",
  price: 1500,
};

const product2: IProduct = {
  id: 2,
  name: "Phone",
  price: 800,
  description: "Latest model",
};

console.log(product1);
console.log(product2);

/*
🔹 Similarity:
Both can define object shapes.

🔸 Difference:
Interfaces support declaration merging; types can define unions and primitives.
*/

// ------------------------
// Part C: Readonly Properties and Index Signatures
// ------------------------

interface AppConfig {
  readonly apiKey: string;
  appName: string;
  version?: string;
}

const config: AppConfig = {
  apiKey: "12345-ABCDE",
  appName: "MyApp",
  version: "1.0",
};

// config.apiKey = "newKey"; // ❌ Error: Cannot assign to 'apiKey' because it is a read-only property

interface UserSettings {
  [key: string]: string;
}

const settings: UserSettings = {
  theme: "dark",
  fontSize: "16px",
};

settings.language = "en";
console.log(settings);

// ------------------------
// Part D: Extending Interfaces
// ------------------------

interface Vehicle {
  brand: string;
  startEngine(): void;
}

interface Car extends Vehicle {
  numberOfDoors: number;
}

interface Motorcycle extends Vehicle {
  hasSidecar: boolean;
}

const myCar: Car = {
  brand: "Toyota",
  numberOfDoors: 4,
  startEngine: () => console.log("Car engine started"),
};

const myBike: Motorcycle = {
  brand: "Harley-Davidson",
  hasSidecar: true,
  startEngine: () => console.log("Motorcycle engine started"),
};

function displayVehicleInfo(vehicle: Vehicle): void {
  console.log(`Brand: ${vehicle.brand}`);
  vehicle.startEngine();
}

displayVehicleInfo(myCar);
displayVehicleInfo(myBike);
