# MTI Project State (v3.0 Multi-page)
**المرجع الحاكم:** مواصفات v3.0 تلغي أي قرارات سابقة. الحفاظ البصري الصارم على index.original.html كمرجع تصميمي.

## 1. القرارات الحاكمة وقواعد الـ UI
- **الهيكل:** Multi-page حقيقي كامل عبر صفحات HTML مستقلة لكل رابط بالهيدر (index, about, theater-solutions, seats, telescopic, options, projects, downloads, contact) بالإضافة لـ Next.js 16 App Router.
- **الفروع:** فرع مصر بدون واتساب، فرع الرياض برابط واتساب صريح في صفحة Contact والفوتر فقط.
- **الأيقونات والتصميم:** جميع الأيقونات SVG خطية أحادية اللون من Lucide، هيدر شبه شفاف بتأثير متدرج بدون خطوط، ومؤشر انزلاقي 2px نشط على رابط الصفحة الحالية فقط.

## 2. حالة التنفيذ (Tasks Status)
- **المهام المنتهية:** 
  - Backend: T01–T03، T04–T10 (Schemas, Validators, Redirects 301, Publish Gate).
  - Frontend: T13–T16 (Tokens, Components, i18n, Layout).
  - صفحات كاملة مستقلة لكل رابط: index.html, about.html, theater-solutions.html, seats.html, telescopic.html, options.html, projects.html, downloads.html, contact.html.
  - مسارات Next.js المقابلة T17–T24 في src/app/[locale].
- **المهمة التالية:** T25 وT26 (Side Panels / Drawers للمقاعد والخدمات) ثم T11–T12 (أمان واستكمال الأدمن).
