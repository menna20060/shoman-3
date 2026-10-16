import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const isAr = locale === 'ar';

  const heroSlides = [
    {
      id: 1,
      badge: isAr ? 'PERFORMER COLLECTION' : 'PERFORMER COLLECTION',
      title: isAr
        ? 'كراسي مسارح وقاعات مؤتمرات فاخرة بهندسة صوتية دقيقة'
        : 'Auditorium & Theater Seating Engineered for Pristine Acoustics',
      desc: isAr
        ? 'تصاميم مريحة معتمدة دولياً ومجهزة بآليات الحركة الصامتة وخيارات عزل صوتي متطورة حتى 86%.'
        : 'Globally certified comfort equipped with silent gravity counterweight tip-up and laboratory acoustic absorption.',
      img: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=1920&q=80',
      ctaText: isAr ? 'استكشف كراسي القاعات' : 'Explore Auditorium Seats',
      ctaLink: '/seats'
    }
  ];

  const currentSlide = heroSlides[0];

  const services = [
    { id: 'arch', name: 'i-architecture', title: isAr ? 'التصميم المعماري والعزل' : 'Architecture & Acoustics', desc: isAr ? 'تصميم وتنفيذ كامل للمسارح ومواد ماصة للصوت.' : 'Full theater design and acoustic wall cladding.' },
    { id: 'audio', name: 'i-audio', title: isAr ? 'الأنظمة الصوتية Pro Audio' : 'Pro Audio Systems', desc: isAr ? 'أنظمة صوت احترافية وسماعات Line Array وميكسرات.' : 'Professional sound reinforcement and Line Arrays.' },
    { id: 'lighting', name: 'i-lighting', title: isAr ? 'إضاءة المسارح Pro Lighting' : 'Stage Lighting Systems', desc: isAr ? 'كشافات LED Moving Lights وFresnel وطاولات DMX.' : 'DMX automated lighting and theatrical luminaires.' },
    { id: 'visual', name: 'i-visual', title: isAr ? 'شاشات العرض والبروجكتور' : 'LED Walls & Projection', desc: isAr ? 'شاشات LED فائقة الدقة وأجهزة عرض سينمائية.' : 'Fine-pitch LED video displays and laser projection.' },
    { id: 'mech', name: 'i-mechanism', title: isAr ? 'الميكانيزم والجمالونات' : 'Stage Mechanics & Trusses', desc: isAr ? 'محركات رفع آمنة وهياكل ألومنيوم معتمدة.' : 'Motorized hoists and certified aluminum trusses.' },
    { id: 'care', name: 'i-care', title: isAr ? 'باقات الصيانة السنوية' : 'Annual Care Packages', desc: isAr ? 'صيانة وقائية دورية وتأمين فوري لقطع الغيار.' : 'Preventative maintenance and emergency spare parts.' }
  ];

  return (
    <div>
      {/* 01 · Hero Section */}
      <section
        style={{
          position: 'relative',
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          background: `linear-gradient(rgba(10, 34, 52, 0.75), rgba(7, 26, 39, 0.88)), url('${currentSlide.img}') center/cover no-repeat`,
          color: '#FFFFFF',
          padding: '4rem 0'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '780px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.4rem 0.85rem',
                background: 'rgba(2, 132, 168, 0.2)',
                border: '1px solid rgba(2, 132, 168, 0.4)',
                color: 'var(--cyan-500)',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--font-size-readable)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                marginBottom: '1.5rem'
              }}
            >
              <span style={{ width: '8px', height: '8px', background: 'var(--cyan-500)' }} />
              <span>{currentSlide.badge}</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 900,
                lineHeight: 1.2,
                color: '#FFFFFF',
                marginBottom: '1.5rem'
              }}
            >
              {currentSlide.title}
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.85)',
                marginBottom: '2.5rem'
              }}
            >
              {currentSlide.desc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Button href={currentSlide.ctaLink} variant="primary">
                <span>{currentSlide.ctaText}</span>
              </Button>
              <Button href="/contact" variant="secondary" style={{ color: '#FFFFFF', borderColor: '#FFFFFF' }}>
                <span>{t('nav.contact')}</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics Strip */}
      <section
        style={{
          background: 'var(--surface-white)',
          borderBottom: '1px solid var(--border-hairline)',
          padding: '2.5rem 0'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2rem'
            }}
          >
            {[
              { num: '2009', label: t('home.trust1') },
              { num: 'BIFMA', label: t('home.trust2') },
              { num: '86%', label: t('home.trust3') },
              { num: '+150', label: t('home.trust4') }
            ].map((metric, idx) => (
              <div key={idx} style={{ borderInlineStart: '3px solid var(--primary-blue)', paddingInlineStart: '1.25rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--navy-900)' }}>
                  {metric.num}
                </div>
                <div style={{ fontSize: 'var(--font-size-readable)', color: 'var(--text-muted)', marginTop: '4px' }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{ padding: '6rem 0', background: 'var(--surface-cloud)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-readable)', color: 'var(--cyan-500)', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              {t('theater.eyebrow')}
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '1rem' }}>
              {t('theater.title')}
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
              {t('theater.desc')}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '1.5rem'
            }}
          >
            {services.map((srv) => (
              <div
                key={srv.id}
                style={{
                  background: 'var(--surface-white)',
                  padding: '2.25rem',
                  border: '1px solid var(--border-hairline)',
                  transition: 'transform 250ms, box-shadow 250ms',
                  cursor: 'pointer'
                }}
              >
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
                  <Icon name={srv.name} size="lg" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.75rem' }}>
                  {srv.title}
                </h3>
                <p style={{ fontSize: 'var(--font-size-readable)', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {srv.desc}
                </p>
                <a
                  href="/theater-solutions"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--primary-blue)',
                    fontWeight: 700,
                    fontSize: 'var(--font-size-readable)',
                    textDecoration: 'none'
                  }}
                >
                  <span>{t('common.viewDetails')}</span>
                  <span>{isAr ? '←' : '→'}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
