import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function TelescopicPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const isAr = locale === 'ar';

  const systems = [
    {
      code: 'SYS-TEL-AUTO',
      title: isAr ? 'المدرجات الكهربائية ذاتية الفتح (Motorized Bleachers)' : 'Motorized Retractable Bleachers',
      desc: isAr ? 'أنظمة آلية بالكامل تفتح وتغلق بلمسة زر عبر محركات كهربائية متزامنة، مثالية للصالات الرياضية الكبرى والمساحات متعددة الأغراض.' : 'Fully automated motorized bleachers retracting in minutes with synchronized multi-drive motors.',
      specs: [isAr ? 'حمل تشغيلي يصل إلى 5 kN/m²' : 'Live load capacity up to 5 kN/m²', isAr ? 'نظام تحكم لاسلكي آمن' : 'Encrypted wireless pendant control', isAr ? 'فرامل كهرومغناطيسية مزدوجة' : 'Dual electromagnetic safety brakes']
    },
    {
      code: 'SYS-TEL-MAN',
      title: isAr ? 'المدرجات اليدوية التلسكوبية (Manual Retractable)' : 'Manual Telescopic Systems',
      desc: isAr ? 'حلول اقتصادية مرنة للقاعات المتوسطة ومدرجات المدارس والجامعات مع عجلات بولي يوريثان لحماية أرضيات الباركيه.' : 'Cost-effective modular systems for schools and universities featuring non-marking polyurethane wheels.',
      specs: [isAr ? 'عجلات بولي يوريثان غير معلمة' : 'Non-marking floor protection wheels', isAr ? 'سحب سلس بمجهود فردي بسيط' : 'Low-friction individual roll-out effort', isAr ? 'أقفال ميكانيكية ذاتية في كل صف' : 'Automatic mechanical row interlocks']
    },
    {
      code: 'SYS-TEL-CHAIR',
      title: isAr ? 'مدرجات الكراسي الفردية القابلة للطي (Fold-Down Chairs)' : 'Fold-Down Auditorium Bleachers',
      desc: isAr ? 'تجمع بين راحة كراسي المسارح الفاخرة ومرونة المساحات التلسكوبية، حيث تنطوي المقاعد آلياً داخل عمق الصف عند الإغلاق.' : 'Combines theater-grade cushioned chair comfort with retractable storage depth.',
      specs: [isAr ? 'مقاعد مبطنة مع مساند للأذرع' : 'Fully upholstered chairs with folding armrests', isAr ? 'طي شبه آلي أو آلي بالكامل' : 'Semi-automatic or fully automated seat fold-down', isAr ? 'متوافقة مع اشتراطات الدفاع المدني' : 'Strict egress clear pathway compliance']
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
              <span>{t('telescopic.eyebrow')}</span>
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
              {t('telescopic.title')}
            </h1>
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.85,
                color: 'rgba(255, 255, 255, 0.8)'
              }}
            >
              {t('telescopic.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Systems Grid */}
      <section style={{ padding: '6rem 0', background: 'var(--surface-white)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '2.5rem'
            }}
          >
            {systems.map((sys) => (
              <div
                key={sys.code}
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
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-readable)', color: 'var(--cyan-500)', fontWeight: 700, marginBottom: '0.5rem' }}>
                    {sys.code}
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '1rem' }}>
                    {sys.title}
                  </h2>
                  <p style={{ fontSize: 'var(--font-size-readable)', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                    {sys.desc}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {sys.specs.map((sp, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--font-size-readable)', color: 'var(--carbon-900)' }}>
                        <span style={{ width: '6px', height: '6px', background: 'var(--cyan-500)', flexShrink: 0 }} />
                        <span>{sp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-hairline)' }}>
                  <Button href="/contact" variant="primary" style={{ width: '100%' }}>
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
