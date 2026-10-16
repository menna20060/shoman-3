import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function OptionsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const isAr = locale === 'ar';

  const options = [
    {
      icon: 'i-seat-number',
      title: isAr ? 'أرقام المقاعد (Seat Numbers)' : 'Seat Numbering Systems',
      desc: isAr ? 'ألومنيوم محفور بالليزر، نحاس مصقول كلاسيكي، أو أرقام فسفورية ذاتية الإضاءة في الظلام.' : 'Laser-etched anodized aluminum, polished architectural brass, or photoluminescent glow-in-the-dark numbering.',
      features: [
        isAr ? 'تثبيت غاطس بالمسند أو الظهر' : 'Flush inset into armrest or backrest',
        isAr ? 'مقاومة تامة للتآكل والخدش' : 'Scratch and corrosion-resistant alloy',
        isAr ? 'متطابقة مع أنظمة حجز التذاكر' : 'Direct mapping with ticketing layouts'
      ]
    },
    {
      icon: 'i-row-marker',
      title: isAr ? 'علامات الصفوف وإضاءة الممرات (Row Markers & LED)' : 'Row Markers & Aisle Light',
      desc: isAr ? 'إضاءة خافتة LED وعلامات صفوف متوافقة مع كود ADA العالمي لسهولة توجيه الجمهور في الظلام.' : 'Low-glare LED path illuminators and ADA-compliant aisle row identifiers.',
      features: [
        isAr ? 'إضاءة موجهة نحو الأرضية فقط' : 'Directed downward pathway beam without hall spill',
        isAr ? 'حروف أبجدية بارزة باللمس للمكفوفين (Braille)' : 'Tactile raised lettering with Braille support',
        isAr ? 'جهد منخفض 12V / 24V فائق الأمان' : 'Ultra-safe low voltage DC operation'
      ]
    },
    {
      icon: 'i-tablet',
      title: isAr ? 'طاولات الكتابة المتطورة (Writing Tablets)' : 'Writing Tablet Collection',
      desc: isAr ? 'طاولات خشبية وبلاستيك ABS مانعة للذعر Anti-Panic تنطوي تلقائياً داخل المسند عند مغادرة المقعد.' : 'Concealed anti-panic writing tablets engineered in solid wood or high-impact ABS.',
      features: [
        isAr ? 'آلية طي سريع عند الطوارئ' : 'Spring-loaded instant anti-panic folding',
        isAr ? 'حجم مدروس يتسع لأجهزة اللابتوب' : 'Ergonomic dimensions accommodating 15" laptops',
        isAr ? 'مفصلات ألومنيوم صب متينة للغاية' : 'Heavy-duty die-cast aluminum articulation'
      ]
    },
    {
      icon: 'i-moveable',
      title: isAr ? 'القواعد المتحركة وعربات التخزين (Moveable Base)' : 'Moveable Bases & Transport Carts',
      desc: isAr ? 'إمكانية تحريك وتخزين مقاعد القاعات بسهولة على عربات نقل مخصصة لإعادة تهيئة الصالة بسرعة.' : 'Modular multi-seat grouping on moveable steel skids with custom heavy-duty transport carts.',
      features: [
        isAr ? 'قواعد صفوف ثنائية وثلاثية ورباعية' : '2, 3, and 4-seat cluster interlinked sleds',
        isAr ? 'عربات تكديس وتخزين مدمجة' : 'High-density stacking storage trollies',
        isAr ? 'أقدام مطاطية مانعة للانزلاق' : 'Floor-protective heavy rubber stabilizing feet'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Strip */}
      <section
        style={{
          padding: '5rem 0 3.5rem 0',
          background: 'var(--navy-950)',
          color: '#FFFFFF',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.35rem 0.75rem',
                background: 'rgba(2, 132, 168, 0.15)',
                border: '1px solid rgba(2, 132, 168, 0.3)',
                color: 'var(--cyan-500)',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--font-size-readable)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                marginBottom: '1.25rem'
              }}
            >
              <span>{t('options.eyebrow')}</span>
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 4.5vw, 3.25rem)',
                fontWeight: 900,
                lineHeight: 1.25,
                color: '#FFFFFF',
                marginBottom: '1.5rem'
              }}
            >
              {t('options.title')}
            </h1>
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.85,
                color: 'rgba(255, 255, 255, 0.8)'
              }}
            >
              {t('options.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Options Grid */}
      <section style={{ padding: '6rem 0', background: 'var(--surface-white)' }}>
        <div className="container">
          <div
            className="options-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem'
            }}
          >
            {options.map((opt, idx) => (
              <div
                key={idx}
                className="option-card"
                style={{
                  background: 'var(--surface-blueprint)',
                  border: '1px solid var(--border-hairline)',
                  borderTop: '3px solid var(--primary-blue)',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'var(--aqua-mist)',
                      color: 'var(--cyan-500)',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <Icon name={opt.icon} size="lg" />
                  </div>

                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '1rem' }}>
                    {opt.title}
                  </h2>

                  <p style={{ fontSize: 'var(--font-size-readable)', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {opt.desc}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {opt.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--font-size-readable)', color: 'var(--carbon-900)' }}>
                        <span style={{ width: '6px', height: '6px', background: 'var(--primary-blue)', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-hairline)' }}>
                  <Button href="/contact" variant="secondary" style={{ width: '100%' }}>
                    <span>{t('common.consultation')}</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
