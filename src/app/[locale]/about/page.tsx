import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const isAr = locale === 'ar';

  const milestones = [
    { year: '2009', title: isAr ? 'تأسيس الشركة' : 'Company Foundation', desc: isAr ? 'انطلاق MTI بالقاهرة على يد كبار مهندسي واستشاريي الصوتيات والمرئيات.' : 'MTI launched in Cairo by senior audiovisual and architectural acoustic engineers.' },
    { year: '2014', title: isAr ? 'التوسع الإقليمي' : 'Regional Expansion', desc: isAr ? 'تنفيذ كبرى مشاريع المسارح الجامعية والاستادات الرياضية في مصر والخليج.' : 'Commissioning university auditoriums and sports arena contracts across MENA.' },
    { year: '2019', title: isAr ? 'شراكات أوروبية حصرية' : 'European Partnerships', desc: isAr ? 'توأمة صناعية مع كبرى مصانع كراسي المسارح وأنظمة المدرجات الإسبانية والإيطالية.' : 'Direct alliances with leading European theater seating and telescopic manufacturers.' },
    { year: '2023', title: isAr ? 'افتتاح فرع الرياض' : 'Riyadh Hub Opening', desc: isAr ? 'تأسيس المقر الإقليمي بالمملكة العربية السعودية دعماً للمشاريع الكبرى ورؤية 2030.' : 'Opening the Saudi Arabia regional headquarters in Riyadh supporting Vision 2030.' }
  ];

  const pillars = [
    {
      icon: 'i-architecture',
      title: isAr ? 'دقة التصنيع والاعتمادات' : 'Precision & Certifications',
      desc: isAr ? 'مطابقة كاملة لمعايير BIFMA وCE وNFPA 701 لمقاومة الحريق والسلامة الإنشائية.' : 'Full compliance with BIFMA, CE, and NFPA 701 fire retardancy and structural safety.'
    },
    {
      icon: 'i-audio',
      title: isAr ? 'الهندسة الصوتية المعملية' : 'Acoustic Engineering',
      desc: isAr ? 'اختبارات موثقة لمعاملات الامتصاص الصوتي (NRC) حتى 86% لضمان صفاء الترددات.' : 'Certified sound absorption testing (NRC up to 86%) ensuring pure acoustic clarity.'
    },
    {
      icon: 'i-mechanism',
      title: isAr ? 'الميكانيزم الصامت المتين' : 'Silent Mechanisms',
      desc: isAr ? 'أنظمة رفع ذاتية Tip-up تعمل بالجاذبية وبدون نوابض ميكانيكية لعمر افتراضي يتجاوز 20 عاماً.' : 'Maintenance-free gravity counterweight tip-up systems engineered for 20+ years of operation.'
    },
    {
      icon: 'i-care',
      title: isAr ? 'الالتزام والضمان الشامل' : 'Comprehensive Warranty',
      desc: isAr ? 'ضمان رسمي شامل مع باقات صيانة وقائية سنوية وفريق دعم هندسي ميداني.' : 'Full manufacturer warranty backed by preventative annual care contracts and field engineers.'
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
              <span>{t('about.eyebrow')}</span>
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
              {t('about.title')}
            </h1>
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.85,
                color: 'rgba(255, 255, 255, 0.8)'
              }}
            >
              {t('about.story')}
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Pillars */}
      <section style={{ padding: '5.5rem 0', background: 'var(--surface-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-readable)', color: 'var(--cyan-500)', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              {isAr ? 'معايير الجودة' : 'ENGINEERING STANDARDS'}
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--navy-900)' }}>
              {isAr ? 'ركائز الهندسة المعمارية في MTI' : 'Architectural Engineering Pillars'}
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem'
            }}
          >
            {pillars.map((p, idx) => (
              <div
                key={idx}
                style={{
                  padding: '2.25rem',
                  background: 'var(--surface-blueprint)',
                  border: '1px solid var(--border-hairline)',
                  borderTop: '3px solid var(--primary-blue)'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--aqua-mist)',
                    color: 'var(--cyan-500)',
                    marginBottom: '1.25rem'
                  }}
                >
                  <Icon name={p.icon} size="md" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.75rem' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 'var(--font-size-readable)', color: 'var(--text-muted)', lineHeight: 1.75 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Strip */}
      <section style={{ padding: '5.5rem 0', background: 'var(--surface-cloud)', borderTop: '1px solid var(--border-hairline)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-readable)', color: 'var(--cyan-500)', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              {isAr ? 'مسيرة الريادة' : 'OUR JOURNEY'}
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--navy-900)' }}>
              {isAr ? 'أكثر من 15 عاماً من الإنجاز المعماري' : '15+ Years of Architectural Milestones'}
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '2rem'
            }}
          >
            {milestones.map((m, idx) => (
              <div
                key={idx}
                style={{
                  padding: '2rem',
                  background: 'var(--surface-white)',
                  border: '1px solid var(--border-hairline)'
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.75rem', fontWeight: 900, color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>
                  {m.year}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.5rem' }}>
                  {m.title}
                </h3>
                <p style={{ fontSize: 'var(--font-size-readable)', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section style={{ padding: '4.5rem 0', background: 'var(--navy-900)', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>
            {isAr ? 'جاهز لتجهيز قاعتك بأعلى المعايير الهندسية؟' : 'Ready to Engineer Your Auditorium with Certified Precision?'}
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '640px', margin: '0 auto 2rem auto', lineHeight: 1.8 }}>
            {isAr ? 'تواصل مع مستشارينا الميدانيين في مصر والمملكة العربية السعودية للحصول على المواصفات المعمارية.' : 'Consult our architectural acoustic specialists in Egypt and Saudi Arabia.'}
          </p>
          <Button href="/contact" variant="primary" style={{ background: 'var(--primary-blue)', borderColor: 'var(--primary-blue)' }}>
            <span>{t('nav.consultation')}</span>
          </Button>
        </div>
      </section>
    </div>
  );
}
