1. **Palette**: Navy `#0A2234`/`#071A27`/`#0F2A6B`, Cyan `#0284A8`/`#1BB3D1`, Royal Blue `#2B50E8`, Aqua `#EDF7F9`, Cloud `#F3F4F6`, Carbon `#0B1528`.
2. **Sharp Geometry**: Public site `border-radius: 0 !important`; Admin UI `4px`; Hairlines `#E2E8F0`; Offset shadow `0 4px 0 rgba(10,34,52,0.12)`.
3. **No Blurs**: Zero soft blur shadows; `backdrop-filter: blur(12px)` restricted solely to sticky header.
4. **Signature Datum**: Solid square (`14px` desktop / `10px` mobile, `#2B50E8`) preceding headlines (RTL right-margin, LTR left-margin).
5. **Typography**: Display: `Montserrat` (EN) / `Cairo` (AR); Body: `IBM Plex Sans` (EN) / `IBM Plex Sans Arabic` (AR, +15% line-height).
6. **Tabular Specs**: Tech metrics & seat numbers strictly in `Inter` / `JetBrains Mono` with `tnum` and slashed `zero`.
7. **Motion Physics**: Easing `cubic-bezier(0.22, 1, 0.36, 1)`; Duration 700–900ms; Stagger 80–120ms; Entrance masks & clip-paths.
8. **Lenis & GSAP Sync**: Lenis smooth scroll (`duration: 1.2`) synced to GSAP ScrollTrigger via `gsap.ticker.add`.
9. **React-Bits Skills**: Spotlight radial gradient cards (`.spotlight-card`), magnetic kinetic buttons (`.magnetic-btn`).
10. **Accessibility**: Strict WCAG 2.1 AA `:focus-visible` outline (`2px solid #0891B2`), `prefers-reduced-motion` fallbacks.
11. **Bilingual Parity**: Full RTL/LTR mirror, vertical sliding language toggle, preserves active section position across language switch.
12. **Scope Rules**: No forms, no shopping carts, no prices, no video, no floating WhatsApp; Cairo branch has NO WhatsApp (Riyadh branch retains it).
13. **Navigation Rules**: Zero "Seats" link in Navbar; Telescopic section has NO "View our projects" button; Footer has FB + X + Instagram.
14. **Seats Grid Flow**: 4 initial seats, Load More (+4), and "Load Less" button appears when all 10 seats load to reset to 4.
15. **Admin Security & State**: Dual route `/admin` & `#/admin`; Shared `localStorage`; Wrong login shows disguised authentic 404 page.
