
//.////////////////////////////////// ملف src/main.ts


// === Part A: Basic app.ts code ===
console.log("App is running!");

// === Part B: experiment.ts code with improvements ===

// حساب مساحة مستطيل
function calculateArea(width: number, height: number): number {
  return width * height;
}

let result = calculateArea(5, 10);
console.log(`The area is ${result}`);

// اختبار دالة مع أنواع خاطئة (لو فعلنا noImplicitAny=true)
// function wrongArea(w, h) {
//   return w * h; // خطأ: param types implicit any غير مسموح
// }





.///////////////////////////////////////////////////////// ملف tsconfig.json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "noImplicitAny": true,
    "sourceMap": true,
    "removeComments": false
  },
  "include": ["src"]
}



////////////////////////////////////////////////////////// خطوات التشغيل:///////
tsc

node dist/main.js
