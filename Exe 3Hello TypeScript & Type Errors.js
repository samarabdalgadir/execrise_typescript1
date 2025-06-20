// ✅ تعريف دالة greet تستقبل اسم وتعيد رسالة ترحيب
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// ✅ استدعاء الدالة باستخدام اسمك
const message = greet("جيجي");

// ✅ تعريف متغير من نوع string
let myMessage: string = "مرحبا جيجي";

// ✅ طباعة النتائج في الطرفية
console.log(message);
console.log(myMessage);


# ترجمة TypeScript إلى JavaScript
npx tsc

# تشغيل الناتج من مجلد dist
node dist/hello.js
