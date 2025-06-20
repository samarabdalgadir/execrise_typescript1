# Part A - التحقق من وجود الأدوات
node -v
npm -v
tsc -v

# إذا لم يكن tsc مثبتًا، شغّلي:
npm install -g typescript

# Part B - إعداد مشروع TypeScript جديد
mkdir my-ts-project
cd my-ts-project
npm init -y

//npm install --save-dev typescript

//npx tsc --init

mkdir src

// إنشاء ملف index.ts
# ملاحظة: هذا الأمر يعمل على Linux/macOS، لو كنتِ على Windows اكتبي الأمر اللي بعده
touch src/index.ts

// على Windows:
// echo.> src\index.ts

// تعديل tsconfig.json (تعديله يدويًا)
// افتحي الملف وأضيفي التالي داخل compilerOptions:


{
#   "compilerOptions": {
#     "target": "es2020",
#     "module": "commonjs",
#     "rootDir": "./src",
#     "outDir": "./dist",
#     "strict": true,
#     "esModuleInterop": true
#   }
# }

# مثال تجريبي داخل src/index.ts
echo console.log(\"Hello, TypeScript!\"); > src/index.ts

# تجميع المشروع
npx tsc

# تشغيل الملف الناتج
node dist/index.js
