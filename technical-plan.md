# MTI Website – Technical Plan

**النسخة:** 2.0 (Multi-page) · **التاريخ:** أكتوبر 2026
**المصادر الداخلية:** Project Requirements · User Journey & Flows · Frontend Design Brief · Data Model, Data Flow & Responsibilities (كلهم نسخة 3.0) · DESIGN.md («MTI Structural Precision»)

الملف ده المرجع التقني للتنفيذ. أي حاجة مكتوبة «يتأكد» معناها معلومة خارجية مأخوذة من ملخص بحث ولازم تتراجع من التوثيق الرسمي قبل الاعتماد.

---

## 1. المبادئ الحاكمة

1. **موقع تعريفي بلا بيانات زوار:** مفيش حسابات ولا فورمات ولا Newsletter. قاعدة البيانات بتحفظ المحتوى وحسابات الأدمن فقط.
2. **كل المحتوى من اللوحة:** أي نص أو صورة أو رقم ظاهر للزائر بيتعدل من /admin. ممنوع محتوى مكتوب في الكود.
3. **عربي أولًا (RTL-first)** ولغتين من أول إطلاق (/ar و/en).
4. **Multi-page مع Panels بروابط حقيقية:** كل قسم صفحة مستقلة، والمنتجات والخدمات والصفحات القانونية بتتفتح في Panels فوق الصفحة ولكل Panel رابط حقيقي.
5. **Mobile-first وPerformance-first:** LCP أقل من 3 ثواني، وحركة بـ transform/opacity فقط.
6. **Accessibility:** WCAG 2.1 AA، والكيبورد وقارئ الشاشة في كل Overlay.
7. **Secure by default:** الأدمن مخفي، وأي فشل دخول بيظهر 404 بدون أي تلميح.

---

## 2. Tech Stack

| الطبقة | الاختيار | السبب | البديل |
| --- | --- | --- | --- |
| Framework | **Next.js 16** (App Router) + React + TypeScript (strict) | SSR/ISR وMetadata API وRouting لكل لغة. Next.js 15 بينتهي دعمه 21 أكتوبر 2026 | Astro، Nuxt |
| CMS + Admin | **Payload CMS 3** جوه نفس مشروع Next | Drafts وVersions وLocalization وAccess control وHooks جاهزين. يدعم Next 16 من 3.73 مع Next 16.2+ (يتأكد) | Strapi 5، Backend مخصص (Laravel/Django) |
| Database | **PostgreSQL** | علاقات M:N كتير وJSONB للـ Snapshots | MongoDB |
| ORM / Adapter | `@payloadcms/db-postgres` (Drizzle) | جاهز مع Payload، وMigrations مدمجة | — |
| Media | S3-compatible Storage (مثل Cloudflare R2) + `sharp` | CDN وVersioning وتحويل WebP/AVIF | تخزين محلي على السيرفر |
| Styling | **Tailwind CSS** + Design Tokens كـ CSS variables | Logical properties للـ RTL وBundle صغير | CSS Modules |
| UI primitives | **Radix UI** (وshadcn/ui اختياريًا) | Focus trap وaria وكيبورد جاهزين | Headless UI، Ark UI |
| i18n | **next-intl** | Routing وhreflang وتكامل مع App Router (يتأكد التوافق مع Next 16) | Paraglide |
| Hosting | Docker (VPS أو Cloud) + **Cloudflare** (CDN وWAF) | تكلفة ثابتة وRate limit على /admin ومفيش Lock-in | Vercel، Fly.io |
| Analytics | GA4 عبر `@next/third-parties` | KPIs من Requirements | — |

**سياسة الإصدارات:** نثبّت أحدث إصدارات مستقرة وقت بدء المشروع في `package.json` (بدون `^` للـ Payload وNext)، ونحدّث بشكل مقصود بعد اختبار.

---

## 3. Libraries

| الغرض | المكتبة | ملاحظات |
| --- | --- | --- |
| CMS | `payload` · `@payloadcms/next` · `@payloadcms/db-postgres` | |
| محرر النصوص | `@payloadcms/richtext-lexical` | لأقسام الـ Side Panel |
| تخزين الملفات | `@payloadcms/storage-s3` | |
| معالجة الصور | `sharp` | أحجام متعددة وWebP/AVIF |
| مكونات | `@radix-ui/react-dialog` · `-navigation-menu` · `-tabs` · `-accordion` | Dialog للـ Panels والـ Lightbox. التأكد من دعم `dir=rtl` في كل مكون |
| Slider / Gallery | `embla-carousel-react` | Hero وGallery (يتأكد دعم الاتجاه) |
| حركة | CSS أولًا. `motion` فقط لو لازم | بدون مكتبات حركة ثقيلة |
| خطوط | `next/font` | Montserrat · IBM Plex Sans / Arabic · Inter |
| i18n | `next-intl` | |
| SEO | Metadata API · `schema-dts` | JSON-LD |
| Validation | `zod` | |
| تحليلات | `@next/third-parties` | |
| اختبارات | `vitest` · `@playwright/test` · `@axe-core/playwright` · Lighthouse CI | |
| جودة الكود | ESLint · Prettier · `typescript` strict | |
| مراقبة | `@sentry/nextjs` | |

**قاعدة إضافة مكتبة:** قبل ما نضيف أي Dependency نتأكد: (1) بتدعم RTL لو UI، (2) حجمها على الـ Bundle العام، (3) مصانة وعليها تحديثات، (4) مفيش بديل أبسط في الموجود.

---

## 4. هيكل المشروع

```
src/
  app/
    (frontend)/[locale]/
      layout.tsx                         # Header + Footer ثابتين + Skip link + {children}{panel}
      page.tsx                           # Home: Hero + ملخصات
      about/page.tsx
      theater-solutions/page.tsx         # 6 Blocks
      seats/page.tsx                     # Grid + Load More + بانر الروابط
      telescopic/page.tsx
      options/page.tsx
      projects/page.tsx
      downloads/page.tsx
      contact/page.tsx
      privacy/page.tsx · terms/page.tsx
      @panel/                            # Parallel slot للـ Panels
        default.tsx
        (.)theater-solutions/[slug]/     # Intercepting: Side Panel الخدمة
        (.)seats/[slug]/                 # Intercepting: Product Panel
        (.)privacy/ · (.)terms/          # Legal Overlay
      theater-solutions/[slug]/page.tsx  # صفحة كاملة للخدمة (فتح مباشر)
      seats/[slug]/page.tsx              # صفحة كاملة للمنتج (فتح مباشر)
      not-found.tsx · error.tsx
    (payload)/admin/                     # لوحة Payload
    api/public/                          # Endpoints قراءة محدودة (Load More)
    sitemap.ts · robots.ts
  collections/                           # Pages, Products, Projects, Downloads, Brands, Media, Admins, AuditLogs…
  globals/                               # SiteSettings, Navigation, Telescopic, UiStrings…
  components/                            # layout/ · sections/ · overlays/ · ui/
  lib/                                   # payload client, seo, i18n, validation, errors, env
  hooks/                                 # Payload hooks (audit, revalidate, redirects)
messages/                                # Fallback للنصوص الثابتة (تتزامن من UiStrings)
```

---

## 5. الروابط والـ Routing (قرار معتمد: Multi-page)

كل قسم **صفحة مستقلة**. أي Panel له محتوى بيتفهرس له **رابط حقيقي**.

| العنصر | الرابط (عربي) | النوع |
| --- | --- | --- |
| Home | `/ar` · `/en` | صفحة |
| About Us | `/ar/about` | صفحة |
| Theater Solutions | `/ar/theater-solutions` | صفحة |
| Block خدمة | `/ar/theater-solutions#pro-audio` | Anchor داخل الصفحة |
| Side Panel الخدمة | `/ar/theater-solutions/pro-audio` | Panel + صفحة SSR |
| Seats | `/ar/seats` | صفحة |
| Product Panel | `/ar/seats/ch-005` | Panel + صفحة SSR |
| Telescopic | `/ar/telescopic` | صفحة |
| Options & Tablets | `/ar/options` | صفحة |
| Our Projects | `/ar/projects` | صفحة |
| Downloads | `/ar/downloads` | صفحة |
| Contact Us | `/ar/contact` | صفحة |
| Privacy / Terms | `/ar/privacy` · `/ar/terms` | صفحة + Overlay من الفوتر |
| Lightbox المشاريع | بدون رابط | Overlay فقط |

**التنفيذ:** `Layout` مشترك فيه Header وFooter و**Parallel slot** `@panel` للـ Panels، و**Intercepting routes**.

- التنقل بين الصفحات بـ `next/link` مع Prefetch عند Hover/Focus، وانتقال Fade خفيف.
- الـ Panel بيتفتح فوق أي صفحة (Seats أو Home)، والـ URL بيتغير، ومكان الـ Scroll بيتحفظ، وبعد الإغلاق الزائر يفضل في الصفحة اللي كان فيها.
- فتح رابط Panel مباشرة (جوجل أو مشاركة أو Refresh): صفحة SSR كاملة بنفس المحتوى مع زر «الرجوع إلى Seats» أو «الرجوع إلى Theater Solutions».
- زر Back في المتصفح بيقفل الـ Panel أولًا.
- الصفحة الحالية مُضاءة في الـ Header بـ `aria-current` (من الـ Route الحالي، بدون Scroll-spy).
- (يتأكد) سلوك الـ Intercepting routes مع Slot موجود في Layout الـ `[locale]` عشان الـ Panel يفتح من أي صفحة.

**قواعد الروابط:**

1. الـ slugs إنجليزية ثابتة في اللغتين، وبتتحدد من اللوحة، وفريدة داخل الـ Collection.
2. تغيير slug بيعمل سجل `Redirect` (301) تلقائي من الرابط القديم.
3. لكل رابط: Canonical لنفسه + hreflang بين AR وEN + إدخال في `sitemap.ts`.
4. صفحة أو منتج أو خدمة مخفية أو محذوفة ← 404 (ومن الـ Sitemap والـ Header).
5. `/admin` مستبعد من الفهرسة (`noindex`) ومن الـ Sitemap، ومفيش أي لينك ليه.

---

## 6. Data Handling

### 6.1 ربط الـ Data Model بـ Payload

| Entity | التنفيذ |
| --- | --- |
| Product · ProductCategory · OptionalFeature · TabletOption · Brand · Project · Download | Collections (نصوص `localized`، وDrafts للمنتجات والمشاريع والخدمات) |
| TheaterService + TheaterSection | Collection `theater-services` فيها Array للأقسام الفرعية |
| TelescopicTab + TelescopicItem | Global `telescopic` فيه 5 تبويبات كـ Array |
| Page · HeroSlide · TrustMetric | Collection `pages` (home، about، theater، seats، telescopic، options، projects، downloads، contact) بحقول Title وIntro وSEO لكل لغة. HeroSlide وTrustMetric Arrays داخل `home` |
| Branch · SocialLink · SiteSettings | Global `site-settings` (الفروع والسوشيال Arrays) |
| NavItem · LegalDocument · Translation | Globals: `navigation` (الهدف Route) · `legal` · `ui-strings` |
| MediaAsset | Upload collection `media` |
| Redirect | Collection `redirects` |
| AdminUser | Auth collection `admins` |
| ContentVersion | Versions المدمجة في Payload (مش Entity مخصصة) |
| AuditLog | Collection `audit-logs` تتكتب من Hooks فقط |
| AdminSession · LoginAttempt | يتأكد دعم Payload في الإصدار المستخدم، وإلا Collections مخصصة |

### 6.2 قواعد البيانات

1. **اللغات:** كل نص ظاهر للزائر `localized` (ar/en). الاعتماد على Fallback ممنوع في الإنتاج: النشر بيتمنع لو لغة ناقصة (قسم 8).
2. **الحالات:** `draft` ← `published`، مع `hidden` للإخفاء بدون حذف. الزائر يشوف `published` فقط.
3. **Versions:** حفظ نسخة عند كل نشر، وحد أقصى للنسخ لكل مستند، والرجوع لنسخة سابقة بيعمل نسخة جديدة.
4. **مصدر واحد للحقيقة:** الفروع والتليفونات في `site-settings` بس، وبتتقرا في Contact والفوتر وSchema (LocalBusiness).
5. **Seed / Import:** سكريبت Import للكتالوج (10 موديلات) والخدمات الست بيشتغل عبر Local API، وبيدخل البيانات الناقصة كـ Draft.
6. **Migrations:** كل تغيير Schema بـ Migration مكتوب ومتراجع. ممنوع `push` في الإنتاج.
7. **Backups:** `pg_dump` يومي + Versioning على Bucket الصور، ونسخة خارج مزوّد الاستضافة، وتجربة استرجاع دورية.

### 6.3 القراءة والـ Caching

- الصفحات بتقرا من Payload بالـ **Local API** (بدون HTTP داخلي) في Server Components.
- ISR بـ Tags (مثل `page:seats`, `products`, `product:ch-005`, `site-settings`).
- Hook `afterChange` و`afterDelete` بيعمل `revalidateTag` للصفحات المتأثرة ويحدّث الـ Sitemap.
- **Preview:** Draft Mode في Next مع Payload Drafts، بمقاسات ديسكتوب وموبايل، ومن غير ما الزائر يشوفه.
- **Load More:** الدفعة = `site-settings.batch_size` (افتراضي 4).

### 6.4 الصور والملفات

- الرفع بيعدّي على Media Pipeline: فحص النوع والحجم ← أحجام متعددة WebP/AVIF ← Storage ← سجل `media` بـ alt عربي/إنجليزي.
- الصور عبر `next/image` بـ `sizes` صحيحة. صورة Hero الأولى فقط `priority`، والباقي Lazy.
- الـ Downloads (PDF) مفتوحة بدون تسجيل، بتتحمل من Storage مباشرة، والحدث `catalog_download` بيروح GA4.

### 6.5 المحتوى الناقص (Content completeness)

**المبدأ:** أي حاجة ناقصة مش بتوقف البناء ولا الإطلاق، والأدمن يكملها بنفسه من اللوحة.

1. **حد أدنى للنشر:** العناوين وslug والنصوص المعروضة بالعربي والإنجليزي + alt للصور. أي حقل تاني اختياري.
2. **الواجهة بتخفي الفاضي:** أي قسم أو عنصر أو حقل فاضي ما بيتعرضش (بدون Placeholder فاضي)، ويظهر أول ما الأدمن يضيفه.
3. **إضافة بدون كود:** المنتجات والمشاريع والماركات والتحميلات والفروع والشرائح ومقاييس الثقة والتبويبات والأقسام الفرعية كلها Collections أو Arrays قابلة للإضافة والترتيب من اللوحة.
4. **مواصفات حرة:** `Product.extra_specs` (Array: اسم عربي/إنجليزي + قيمة + وحدة اختيارية) عشان أي مواصفة مش في الحقول الثابتة (مثل Fire Rating) تتضاف بدون تعديل Schema. بتظهر في الـ Spec Table بعد الحقول الثابتة.
5. **لوحة «اكتمال المحتوى»:** Custom view في Dashboard Home بتقرا بالـ Local API. بتعرض لكل Entity: العناصر الناقصة (مثل منتج من غير أبعاد أو مشروع من غير دولة)، ونسبة الاكتمال، ولينك مباشر لشاشة التعديل. الحقول اللي بتتحسب فيها معلّمة في الـ Config (`custom.completeness: true`).
6. **التسليم:** قائمة المحتوى الناقص وقت الإطلاق بتتسلم للعميل مع شرح إضافتها من اللوحة.

---

## 7. API والـ Data Access

**المبدأ:** الصفحات مش بتعتمد على HTTP API داخلي. الـ API العام محدود جدًا.

### 7.1 Endpoints العامة (قراءة فقط)

| Method | المسار | الغرض | Params |
| --- | --- | --- | --- |
| GET | `/api/public/products` | Load More | `locale` · `offset` · `limit` |
| GET | `/api/public/projects` | فلترة المشاريع (Should) | `locale` · `sector` · `offset` · `limit` |

- الـ Panels والصفحات الكاملة بتتولد بـ Server Components، فمفيش Endpoint ليها.
- ترجع `published` فقط، بحد أقصى `limit` (مقترح 24)، وبـ `Cache-Control: public, s-maxage=…, stale-while-revalidate=…`.
- **Payload REST/GraphQL التلقائي:** يتقفل على العامة. بس `/api/public/*` المسموحة، ولوحة الأدمن بتستخدم Endpoints Payload بجلسة أدمن. GraphQL يتعطل في الإنتاج لو مش مستخدم.

### 7.2 شكل الاستجابة

```json
{ "data": [], "meta": { "total": 10, "offset": 4, "limit": 4, "nextOffset": 8 } }
```

وللخطأ:

```json
{ "error": { "code": "VALIDATION_ERROR", "message": "Invalid query", "requestId": "…" } }
```

### 7.3 Rate limiting (أرقام مقترحة، تتضبط وقت التنفيذ)

| المسار | الحد |
| --- | --- |
| `/api/public/*` | 60 طلب/دقيقة لكل IP (Cloudflare + التطبيق) |
| محاولات Login | 5 محاولات ثم قفل 15 دقيقة |
| رفع الملفات في اللوحة | حسب الجلسة |

---

## 8. Authentication & Authorization

### 8.1 مسار دخول الأدمن

```
GET /admin
 ├─ جلسة صالحة (Cookie) ........................ Dashboard مباشرة
 └─ لا .......................................... شاشة Login (إيميل + باسورد)
      ├─ بيانات صحيحة ......................... جلسة جديدة + Cookie + Dashboard
      └─ أي فشل ................................ 404 (نفس صفحة «غير موجودة» العامة)
أي مسار /admin/* أو /api تابع للوحة بدون جلسة ..... 404
```

**قاعدة 404 الموحّدة:** إيميل غير مسجل، باسورد غلط، أدمن معطّل، أو حساب مقفول: **نفس الاستجابة بالظبط** (Status وBody وزمن متقارب). التحقق من الباسورد بيتنفذ حتى لو الإيميل مش موجود (Dummy hash) لتفادي كشف وجود الحساب بالتوقيت.

### 8.2 الجلسة

| البند | القاعدة |
| --- | --- |
| التخزين | Cookie بـ `HttpOnly` · `Secure` · `SameSite=Lax` · `Path=/` |
| المدة | **بدون انتهاء حسب القرار**. تقنيًا مدة طويلة جدًا (مثلًا 10 سنين) لأن Cookie بلا انتهاء بتتحول لـ Session cookie بتروح بقفل المتصفح. مطلوب موافقة (قسم 14) |
| المحتوى | رمز عشوائي مشفر. الإيميل والباسورد مش بيتخزنوا في المتصفح |
| السيرفر | بنخزن Hash الرمز في `AdminSession` (أو ما يعادله في Payload، يتأكد) |
| الإنهاء | Logout، أو مسح بيانات المتصفح، أو تعطيل/حذف الأدمن، أو تغيير باسورده (كل جلساته `revoked_at` فورًا) |
| إضافي (اختياري) | «إنهاء كل الجلسات»، وعرض الأجهزة المسجلة |

### 8.3 الباسوردات والحسابات

- التشفير: Argon2id أو bcrypt (أو الافتراضي في Payload بعد التأكد)، ومحدش يقدر يشوف الباسورد.
- إضافة أدمن: إيميل + باسورد مؤقت، `must_change_password = true`، والأدمن الجديد يغيره عند أول دخول.
- سياسة مقترحة: 12 حرف على الأقل، وبدون الباسوردات الشائعة.
- الأدمن الأول: يتعمل مرة واحدة من متغيرات البيئة أو سكريبت Seed عند الإطلاق.
- اختياري: 2FA أو تقييد `/admin` بـ IP (قرار مفتوح).

### 8.4 الصلاحيات (Access control)

| الطرف | قراءة منشور | قراءة Draft | كتابة | AuditLog |
| --- | --- | --- | --- | --- |
| Visitor | نعم | لا | لا | لا |
| Admin (كلهم نفس الصلاحيات) | نعم | نعم | نعم | قراءة فقط |

- كل Collection عليها `access.read` بشرط `_status = published` للعامة.
- `audit-logs`: ممنوع تعديل أو حذف أو إنشاء من الـ API. بتتكتب من Hooks بـ `overrideAccess` داخلي.

### 8.5 حماية إضافية

- **CSRF:** `SameSite` + فحص `Origin` للـ Server Actions + قائمة Origins المسموحة في Payload.
- **CORS:** مفيش. كل شيء Same-origin.
- **Headers:** `Strict-Transport-Security` · `X-Content-Type-Options` · `Referrer-Policy` · `Permissions-Policy` · **CSP** (تسمح بـ GA4 والخريطة والخطوط فقط) · `X-Robots-Tag: noindex` على /admin.
- **WAF:** Rate limit على `/admin` وقواعد Cloudflare ضد Bots.

---

## 9. Validation

### 9.1 الطبقات

| الطبقة | الأداة | تتحقق من إيه |
| --- | --- | --- |
| الواجهة (Admin) | حقول Payload Validation | صيغة الحقل وقت الكتابة |
| Endpoints العامة | `zod` | Query params (`locale` ∈ ar/en · `offset` ≥ 0 · `limit` 1–24) |
| Hooks السيرفر | دوال Validation | منع النشر لو ناقص أو غلط |
| البيئة | `zod` عند الإقلاع | متغيرات البيئة (فشل مبكر لو ناقصة) |

### 9.2 القواعد

| الحقل | القاعدة |
| --- | --- |
| slug | `^[a-z0-9]+(?:-[a-z0-9]+)*$` · فريد داخل الـ Collection · لا يتغير بدون Redirect |
| code (المنتج) | فريد، وبصيغة ثابتة مثل `CH 005` |
| absorption\_percent | رقم من 0 إلى 100 |
| dimensions | أرقام موجبة بوحدة mm، والـ inch محسوبة |
| email | صيغة صحيحة |
| phone | بصيغة E.164 للتخزين وللـ `tel:`، ونص عرض منفصل |
| URLs (سوشيال، خريطة) | `https://` فقط |
| الصور | JPEG/PNG/WebP/AVIF · حد أقصى مقترح 10 MB · **alt عربي وإنجليزي إجباري** |
| SVG | للوجوهات فقط ويتنضف قبل الحفظ |
| الملفات (Downloads) | PDF · حد أقصى مقترح 50 MB |
| Load More `limit` | 1–24، والافتراضي من `batch_size` |
| النص الغني | بيتعرض من JSON الخاص بالمحرر، ممنوع `dangerouslySetInnerHTML` (إلا JSON-LD المتسلسل بأمان) |

### 9.3 بوابة النشر (Publish gate)

لا يمكن نشر أي مستند إلا لو:
1. كل الحقول الإجبارية متعبية **بالعربي والإنجليزي**.
2. الصور المرتبطة ليها alt بلغتين.
3. الـ slug فريد وصحيح.
4. الحقول الاختيارية (بيانات المشاريع، أبعاد ناقصة) مسموح تفضل فاضية، والـ UI بيخفي ما هو فارغ.

لو فشل: رسالة تحدد الحقول الناقصة بالاسم واللغة.

---

## 10. Error Handling

### 10.1 الموقع العام

| الحالة | السلوك |
| --- | --- |
| رابط غير موجود أو منتج/خدمة مخفية | صفحة 404 مترجمة بروابط للأقسام الرئيسية |
| خطأ في قسم | `error.tsx` على مستوى القسم: القسم بس يظهر برسالة وزر إعادة المحاولة، وباقي الصفحة سليمة |
| فشل تحميل Overlay | رسالة داخل الـ Overlay + زر إعادة المحاولة (الـ Overlay يفضل مفتوح) |
| فشل Load More | رسالة تحت الزر، الكروت الموجودة تفضل، والزر يرجع شغال |
| فشل صورة | Placeholder محايد بنفس النسبة، بدون Layout shift |
| فشل الخريطة | رابط نصي لفتح الخريطة |
| GA4 محجوب أو فشل | لا تأثير على الموقع، بدون أخطاء ظاهرة |
| JavaScript معطل | المحتوى الأساسي والروابط الحقيقية تشتغل (SSR) |

### 10.2 الـ API

| الكود | HTTP | متى |
| --- | --- | --- |
| `VALIDATION_ERROR` | 400 | Params غير صحيحة |
| `NOT_FOUND` | 404 | مورد غير موجود أو غير منشور |
| `RATE_LIMITED` | 429 | تخطي الحد (مع `Retry-After`) |
| `INTERNAL_ERROR` | 500 | خطأ غير متوقع (رسالة عامة فقط) |

القاعدة: كل خطأ بيرجع `requestId` للتتبع، وممنوع تسريب Stack trace أو تفاصيل قاعدة البيانات.

### 10.3 لوحة الأدمن

| الحالة | السلوك |
| --- | --- |
| خطأ تحقق | رسالة جنب الحقل المعني (بالعربي/الإنجليزي) |
| فشل النشر لنقص بيانات | قائمة الحقول الناقصة |
| تعارض تعديل (أدمنين على نفس المستند) | تحذير «اتعدل بواسطة …» قبل الحفظ، وعدم الكتابة فوق تعديل أحدث |
| فشل رفع ملف | سبب واضح (النوع/الحجم) + إعادة المحاولة |
| جلسة ملغاة | الرجوع لشاشة Login على /admin |
| أي فشل دخول | 404 (قسم 8.1) |

### 10.4 التسجيل والمراقبة

- **Sentry** للأخطاء في الموقع واللوحة، مع إخفاء البيانات الشخصية (الإيميلات والـ IP) من التقارير.
- Logs منظّمة (JSON) بـ `requestId`.
- **AuditLog:** كتابته جزء من نفس العملية. لو فشل التسجيل تفشل العملية (للحفاظ على سلامة السجل).
- تنبيهات: ارتفاع معدل 5xx، موجة محاولات دخول فاشلة، فشل النسخ الاحتياطي، توقف الموقع (Uptime monitor).

---

## 11. Technical Rules

### 11.1 الواجهة وRTL

1. **Logical properties فقط** (`ms-` `me-` `ps-` `pe-` `start` `end`). ممنوع `left/right` و`ml/mr`.
2. `<html lang dir>` بيتغير حسب اللغة. الأرقام ومواصفات القياس (mm، dB، CH 005) داخل `dir=ltr` محليًا. ممنوع `letter-spacing` على النص العربي (بيكسر اتصال الحروف)، وهو للـ Labels اللاتينية فقط.
3. أيقونات الاتجاه (أسهم، Chevron) بتتعكس في RTL. الأيقونات المحايدة لا.
4. مكون جديد ما يتقبلش في الـ PR إلا بصور RTL وLTR.
5. ممنوع نصوص ثابتة في المكونات: كل النص من `ui-strings` أو من الـ CMS.
6. **Design Tokens** من DESIGN.md في ملف CSS variables واحد (قسم 15). ممنوع ألوان أو مسافات أو Radius أو ظلال مكتوبة مباشرة.

### 11.2 الأداء

7. هدف: LCP أقل من 3 ثواني، وCLS قريب من 0، مقاس بـ Lighthouse CI في كل PR.
8. كل صورة بأبعاد محجوزة (`width/height` أو `aspect-ratio`) و`sizes` صحيحة.
9. الأجزاء التقيلة (Seats، Projects) بـ Lazy-load و`content-visibility: auto`.
10. كود Payload والـ Admin **ممنوع** يدخل Bundle الموقع العام.
11. الحركة بـ `transform` و`opacity` فقط، وبتتقفل مع `prefers-reduced-motion`. ممنوع Scroll listeners (نستخدم CSS أو IntersectionObserver). الانتقال بين الصفحات Fade (150–200ms) بالـ CSS، والـ Prefetch للصفحات والـ Panels عند Hover/Focus فقط.
12. الخطوط: Subset (Latin + Arabic)، وأقل عدد أوزان ممكن، و`font-display: swap`.

### 11.3 الوصولية

13. كل Overlay: Focus trap، إغلاق بـ ESC، رجوع الـ Focus لزر الفتح، قفل Scroll الخلفية.
14. الـ Dropdown والـ Tabs والـ Slider بيشتغلوا بالكيبورد وقارئ الشاشة.
15. أي محتوى متحرك (Hero Slider) لازم يقف عند Hover أو Focus وفيه زر إيقاف مؤقت.
16. التباين WCAG AA. الـ Cyan `#1BB3D1` على الأبيض أقل من 4.5:1، فمش بيتستخدم لنص (للأيقونات والخلفيات الغامقة والـ Highlight فقط). الروابط النصية Royal Blue `#2B50E8` (حوالي 6:1).
17. كل صورة معلوماتية لها alt بلغة الصفحة، والزخرفية `alt=""`.
18. Touch targets 44px على الأقل.

### 11.4 SEO

19. H1 واحد في كل صفحة، وH2 لكل قسم.
20. كل رابط: Title وMeta وCanonical وhreflang وOpen Graph بلغته.
21. Schema: Organization وLocalBusiness (الفرعين) وProduct (لكل موديل) وService (لكل خدمة).
22. Sitemap.xml وrobots.txt بيتولدوا من المحتوى المنشور، ومحدّثين بعد كل نشر.

### 11.5 الكود

23. TypeScript `strict`، ممنوع `any` بدون تعليق مبرر. أنواع Payload بتتولد تلقائيًا ومتعدلش يدويًا.
24. ممنوع Secrets في الكود. كل المتغيرات في `.env` ومتحقق منها بـ Zod عند الإقلاع.
25. كل Collection فيها `access` صريح. الافتراضي = مقفول.
26. أي تغيير Schema = Migration + مراجعة.
27. PR لازم يعدّي: Lint · Type-check · اختبارات · Lighthouse CI · فحص الوصولية.
28. تسمية Analytics ثابتة بالأحداث المعرّفة في Requirements، وبتتبعت من Helper واحد بس.

### 11.6 المحتوى

29. الأدمن مش بيكتب HTML خام. المحتوى منظم في حقول وBlocks.
30. حقول عربي/إنجليزي جنب بعض في كل شاشة تعديل، وإجبارية قبل النشر.
31. أي بيانات ناقصة (الأبعاد، المشاريع) حقول اختيارية والـ UI بيتعامل مع غيابها.

---

## 12. Testing & CI/CD

| النوع | الأداة | يغطي |
| --- | --- | --- |
| Unit | Vitest | Validation، Hooks، الـ Helpers |
| E2E | Playwright | رحلات Journey الأساسية: التنقل بين الصفحات، Dropdown ← Block ← Side Panel، Product Panel (من Seats ومن Home)، Load More، Back، تبديل اللغة |
| لوحة الأدمن | Playwright (Chrome + Safari) | Login، 404 عند الفشل، Draft ← Preview ← Publish، Version history، إضافة أدمن |
| RTL | Playwright Screenshots | لقطات AR وEN لكل قسم وOverlay |
| Accessibility | axe-core | كل صفحة وOverlay |
| الأداء | Lighthouse CI | ميزانية LCP وحجم الـ Bundle |

**CI/CD:** GitHub Actions: Lint ← Type-check ← Test ← Build Docker image ← Deploy. الـ Build بيتم في CI مش على السيرفر (Payload مع Next ممكن يستهلك ذاكرة كبيرة وقت الـ Build).

---

## 13. الاستضافة والبنية

- **Docker Compose:** تطبيق Next+Payload + PostgreSQL (أو Managed Postgres) خلف **Cloudflare** (CDN، WAF، SSL).
- **الـ Region:** أقرب منطقة لمصر والسعودية متاحة عند المزوّد (يتأكد الأنسب بالقياس الفعلي).
- **البيئات:** Local · Staging (نفس الإنتاج، Basic Auth، `noindex`) · Production.
- **النسخ الاحتياطي:** قسم 6.2 بند 7.
- **المراقبة:** Sentry + Uptime monitor + تنبيهات (قسم 10.4).

بديل أسرع للبداية: Vercel + Managed Postgres + R2. بيقلل التشغيل لكن بيحتاج مراجعة التكلفة والـ Region.

---

## 14. قرارات مفتوحة وحاجات تتأكد

**قرارات:**

1. اعتماد Payload (أو Strapi / Backend مخصص) حسب خبرة المطور.
2. الاستضافة: Docker/VPS أو Vercel، والميزانية.
3. الجلسة: مدة طويلة جدًا بدل «بلا انتهاء» حقيقي.
4. اختياري: 2FA أو تقييد IP على /admin.
5. لغة واجهة الـ Admin: عربي وإنجليزي أم إنجليزي فقط.
6. اللوجو الأصلي وتأكيد ألوانه مع الباليت المعتمدة في DESIGN.md.
7. خريطة الصفحات المعتمدة (Home بملخصات، وTelescopic وOptions خارج الـ Header) وURL المنتج `/seats/…` بدل `/products/…`.
8. الانتقال بين الصفحات: Fade بسيط بالـ CSS أم View Transitions.

**يتأكد من التوثيق الرسمي قبل البدء:**

- توافق Payload وnext-intl وRadix مع إصدار Next.js المختار.
- دعم Payload لإلغاء الجلسات وقفل المحاولات (`AdminSession` / `LoginAttempt`) وإمكانية جعل الـ Login يرد 404.
- دعم Embla وRadix لاتجاه RTL.
- Bugs معروفة في Payload (مثل Autosave في Safari، وDrafts مع الـ Join على Postgres) والإصدار اللي بيعدّيها.
- الـ Region والـ CDN الأنسب لمصر والسعودية، ومتطلبات الخصوصية المحلية للـ Analytics والكوكيز.

---

## 15. Design Tokens (من DESIGN.md)

```css
:root {
  /* Colors */
  --color-primary: #2B50E8;
  --color-navy: #0F2A6B;
  --color-cyan: #1BB3D1;        /* أيقونات وخلفيات فقط، مش نص على الأبيض */
  --color-ink: #0B1528;
  --color-ink-muted: #444655;
  --color-surface: #FFFFFF;
  --color-cloud: #F3F4F6;
  --color-row-alt: #F8FAFC;
  --color-hairline: #E2E8F0;
  --color-hairline-strong: #CBD5E1;
  --color-success: #059669;
  --color-warning: #D97706;
  --color-error: #DC2626;

  /* Radius */
  --radius-sm: 4px;             /* أزرار، حقول، Dropdown، Chips */
  --radius-md: 8px;             /* كروت، Containers */
  --radius-lg: 12px;            /* Overlays */
  --radius-square: 0;           /* المربع الأزرق */

  /* Elevation */
  --shadow-1: 0 1px 3px rgba(11,21,40,.05), 0 1px 2px rgba(11,21,40,.03);
  --shadow-2: 0 4px 12px rgba(15,42,107,.08), 0 2px 4px rgba(15,42,107,.04);
  --shadow-3: 0 20px 35px -8px rgba(11,21,40,.16), 0 8px 12px -4px rgba(11,21,40,.08);

  /* Spacing (8px base) */
  --space-xs: .25rem; --space-sm: .5rem; --space-md: 1rem;
  --space-lg: 1.5rem; --space-xl: 2.5rem;

  /* Fonts */
  --font-display: Montserrat, 'IBM Plex Sans Arabic', Cairo, sans-serif;
  --font-body: 'IBM Plex Sans', 'IBM Plex Sans Arabic', sans-serif;
  --font-spec: Inter, sans-serif;  /* font-feature-settings: 'tnum', 'zero' */
}
```

| العنصر | القيمة |
| --- | --- |
| Type scale | display-xl 56/64 · headline-lg 36/44 · headline-md 24/32 · headline-sm 20/28 · title-md 18/26 · body-lg 18/28 · body-md 15/24 · body-sm 13/20 · spec-num 16/20 · label-caps 11/14 |
| Mobile | display-xl 36/44 · headline-lg 26/34 |
| العربي | body-lg 18/28 (Line-height الفعلي حوالي 32) للفقرات والأوصاف، وbody-md 15/24 للـ UI فقط (القوائم، الأزرار، الجداول، الفوتر) |
| Layout | Mobile: 4 أعمدة · Gutter 16 · هامش 20 / Tablet: 8 أعمدة · Gutter 24 · هامش 40 / Desktop: 12 عمود · أقصى 1360 · Gutter 32 / Wide: أقصى 1400 |
| Glass | الـ Header الثابت فقط: `rgba(255,255,255,.92)` + `blur(12px)` |

**ربط Tailwind:** الـ Tokens بتتعرّف في `theme.extend` من الـ CSS variables (ألوان، Radius، ظلال، خطوط)، وماحدش يكتب قيمة خام في المكونات.
