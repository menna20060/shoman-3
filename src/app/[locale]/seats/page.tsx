import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function SeatsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const isAr = locale === 'ar';

  const products = [
    {
      code: 'MTI-CH-001',
      title: isAr ? 'Performer Classic' : 'Performer Classic',
      category: isAr ? 'كراسي مسارح وقاعات' : 'Auditorium Seating',
      img: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=800&q=80',
      desc: isAr ? 'كرسي مسارح فاخر مزود بظهر وقاعدة من خشب الزان المعالج صوتياً، وآلية رفع ذاتية بالجاذبية الصامتة.' : 'Premier auditorium seat with acoustically curved beech plywood shell and silent counterweight tip-up.',
      specs: { width: '560 mm', depth: '720 mm', height: '960 mm', absorption: '82%', fire: 'NFPA 701 / BIFMA' }
    },
    {
      code: 'MTI-CH-002',
      title: isAr ? 'Acoustic Maestro' : 'Acoustic Maestro',
      category: isAr ? 'قاعات الموسيقى والأوبرا' : 'Concert & Opera Hall',
      img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
      desc: isAr ? 'تصميم مخصص لدور الأوبرا مع تجاويف صوتية سفلية مثقوبة لامتصاص الصدى ومطابقة نقاء الصوت.' : 'Engineered specifically for opera houses with micro-perforated acoustic cavities ensuring calibrated RT60.',
      specs: { width: '580 mm', depth: '740 mm', height: '980 mm', absorption: '86%', fire: 'EN 1021 Class 1' }
    },
    {
      code: 'MTI-CH-003',
      title: isAr ? 'Cinema Royale' : 'Cinema Royale',
      category: isAr ? 'صالات السينما الفاخرة' : 'Premium Cinema',
      img: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80',
      desc: isAr ? 'راحة استثنائية مع مساند رأس مريحة وحوامل أكواب مدمجة وإسفنج بولي يوريثان عالي الكثافة.' : 'Exceptional ergonomic contouring with integrated cup holders and high-resilience cold-molded foam.',
      specs: { width: '600 mm', depth: '780 mm', height: '1020 mm', absorption: '78%', fire: 'BIFMA X5.1' }
    },
    {
      code: 'MTI-CH-004',
      title: isAr ? 'Forum Executive' : 'Forum Executive',
      category: isAr ? 'قاعات المؤتمرات والندوات' : 'Conference & Lecture',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      desc: isAr ? 'مزود بطاولة كتابة خفية مضادة للذعر (Anti-Panic) تنطوي بالكامل داخل مسند الذراع دون إعاقة الممر.' : 'Equipped with a concealed anti-panic writing tablet folding flush inside the side armrest.',
      specs: { width: '550 mm', depth: '700 mm', height: '920 mm', absorption: '75%', fire: 'NFPA 701' }
    },
    {
      code: 'MTI-CH-005',
      title: isAr ? 'Lecture Compact Tip-Up' : 'Lecture Compact Tip-Up',
      category: isAr ? 'المدرجات الجامعية والتعليمية' : 'University Tiered Seating',
      img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
      desc: isAr ? 'هيكل مدمج يتيح أكبر سعة للمدرجات المائلة مع آلية رفع فائقة التحمل تناسب الاستخدام اليومي المكثف.' : 'Compact profile maximizing capacity on tiered floorings with ultra-durable heavy-duty steel pedestals.',
      specs: { width: '500 mm', depth: '640 mm', height: '880 mm', absorption: '70%', fire: 'CE / BIFMA' }
    },
    {
      code: 'MTI-CH-006',
      title: isAr ? 'VIP Suite Recliner' : 'VIP Suite Recliner',
      category: isAr ? 'المقصورات الملكية والـ VIP' : 'VIP & Royal Boxes',
      img: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=800&q=80',
      desc: isAr ? 'مقعد جلدي فخم مع مسند قدم آلي ومنافذ شحن مدمجة وتشطيبات خشبية راقية حسب الطلب.' : 'Luxury electric recliner in genuine top-grain leather with motorized footrest and bespoke woodwork.',
      specs: { width: '650 mm', depth: '850 mm', height: '1060 mm', absorption: '80%', fire: 'CAL 133' }
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
              <span>{t('seats.eyebrow')}</span>
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
              {t('seats.title')}
            </h1>
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.85,
                color: 'rgba(255, 255, 255, 0.8)'
              }}
            >
              {t('seats.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section style={{ padding: '6rem 0', background: 'var(--surface-white)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '2.5rem'
            }}
          >
            {products.map((prod) => (
              <div
                key={prod.code}
                style={{
                  background: 'var(--surface-blueprint)',
                  border: '1px solid var(--border-hairline)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                  <img
                    src={prod.img}
                    alt={prod.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      insetInlineEnd: '1rem',
                      background: 'var(--navy-900)',
                      color: 'var(--cyan-500)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--font-size-readable)',
                      fontWeight: 700,
                      padding: '0.35rem 0.65rem',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {prod.code}
                  </div>
                </div>

                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-readable)', color: 'var(--cyan-500)', fontWeight: 700, marginBottom: '0.35rem' }}>
                      {prod.category}
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.75rem' }}>
                      {prod.title}
                    </h2>
                    <p style={{ fontSize: 'var(--font-size-readable)', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                      {prod.desc}
                    </p>

                    {/* Specs Box */}
                    <div
                      style={{
                        background: 'var(--surface-white)',
                        border: '1px solid var(--border-hairline)',
                        padding: '1rem',
                        marginBottom: '1.5rem'
                      }}
                    >
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: 'var(--font-size-readable)', fontFamily: 'var(--font-mono)' }}>
                        <div>
                          <span style={{ color: 'var(--slate-500)' }}>{isAr ? 'الأبعاد:' : 'Dim:'} </span>
                          <span style={{ fontWeight: 700, color: 'var(--navy-900)' }}>{prod.specs.width}</span>
                        </div>
                        <div>
                          <span style={{ color: 'var(--slate-500)' }}>{isAr ? 'الامتصاص:' : 'Acoustics:'} </span>
                          <span style={{ fontWeight: 700, color: 'var(--primary-blue)' }}>{prod.specs.absorption}</span>
                        </div>
                        <div>
                          <span style={{ color: 'var(--slate-500)' }}>{isAr ? 'الارتفاع:' : 'Height:'} </span>
                          <span style={{ fontWeight: 700, color: 'var(--navy-900)' }}>{prod.specs.height}</span>
                        </div>
                        <div>
                          <span style={{ color: 'var(--slate-500)' }}>{isAr ? 'المعايير:' : 'Safety:'} </span>
                          <span style={{ fontWeight: 700, color: 'var(--navy-900)' }}>{prod.specs.fire}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <Button href="/contact" variant="primary" style={{ flexGrow: 1 }}>
                      <span>{t('common.consultation')}</span>
                    </Button>
                    <a
                      href="/downloads"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '46px',
                        background: 'var(--surface-white)',
                        border: '1px solid var(--border-hairline)',
                        color: 'var(--cyan-500)'
                      }}
                      title={t('common.downloadPdf')}
                      aria-label={t('common.downloadPdf')}
                    >
                      <Icon name="i-download" size="sm" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
