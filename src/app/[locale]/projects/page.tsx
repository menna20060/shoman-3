import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/Button';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProjectsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const isAr = locale === 'ar';

  const projects = [
    {
      id: 1,
      title: isAr ? 'قاعة الاحتفالات والمؤتمرات الكبرى' : 'Grand Opera & Conference Center',
      sector: isAr ? 'المسارح والقاعات' : 'Auditorium & Opera',
      year: '2023',
      seats: '1,450',
      img: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=800&q=80',
      location: isAr ? 'القاهرة الجديدة، مصر' : 'New Cairo, Egypt'
    },
    {
      id: 2,
      title: isAr ? 'الصالة الرياضية والمدرجات التلسكوبية الأولمبية' : 'Olympic Arena Telescopic Bleachers',
      sector: isAr ? 'الصالات الرياضية' : 'Sports & Arenas',
      year: '2024',
      seats: '2,800',
      img: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=800&q=80',
      location: isAr ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'
    },
    {
      id: 3,
      title: isAr ? 'مدرج المسرح الجامعي المركزي' : 'Central University Lecture Theatre',
      sector: isAr ? 'الجامعات والمدارس' : 'Educational & Universities',
      year: '2023',
      seats: '850',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      location: isAr ? 'مدينة السادس من أكتوبر، مصر' : '6th of October City, Egypt'
    },
    {
      id: 4,
      title: isAr ? 'مسرح المركز الثقافي الوطني' : 'National Cultural Center Theater',
      sector: isAr ? 'المسارح والقاعات' : 'Auditorium & Opera',
      year: '2022',
      seats: '1,100',
      img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
      location: isAr ? 'جدة، المملكة العربية السعودية' : 'Jeddah, Saudi Arabia'
    },
    {
      id: 5,
      title: isAr ? 'صالة الألعاب الرياضية الجامعية' : 'University Sports Complex',
      sector: isAr ? 'الصالات الرياضية' : 'Sports & Arenas',
      year: '2024',
      seats: '1,600',
      img: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80',
      location: isAr ? 'الدمام، المملكة العربية السعودية' : 'Dammam, Saudi Arabia'
    },
    {
      id: 6,
      title: isAr ? 'مجمع قاعات التدريب والمؤتمرات' : 'Executive Training Auditorium',
      sector: isAr ? 'الجامعات والمدارس' : 'Educational & Universities',
      year: '2023',
      seats: '650',
      img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
      location: isAr ? 'الإسكندرية، مصر' : 'Alexandria, Egypt'
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
              <span>{t('projects.eyebrow')}</span>
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
              {t('projects.title')}
            </h1>
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.85,
                color: 'rgba(255, 255, 255, 0.8)'
              }}
            >
              {isAr
                ? 'أكثر من 150 مشروعاً تم تسليمها بنجاح بأعلى المواصفات المعمارية والصوتية في مصر والمملكة العربية السعودية والخليج.'
                : 'Over 150 projects successfully delivered with premier architectural and acoustic standards across the Middle East.'}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: '6rem 0', background: 'var(--surface-white)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '2.5rem'
            }}
          >
            {projects.map((proj) => (
              <div
                key={proj.id}
                style={{
                  background: 'var(--surface-blueprint)',
                  border: '1px solid var(--border-hairline)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                  <img
                    src={proj.img}
                    alt={proj.title}
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
                      padding: '0.35rem 0.65rem'
                    }}
                  >
                    {proj.sector}
                  </div>
                </div>

                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.5rem' }}>
                      {proj.title}
                    </h2>
                    <div style={{ fontSize: 'var(--font-size-readable)', color: 'var(--slate-500)', marginBottom: '1.25rem' }}>
                      {proj.location}
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        background: 'var(--surface-white)',
                        border: '1px solid var(--border-hairline)',
                        padding: '0.75rem 1rem',
                        fontSize: 'var(--font-size-readable)',
                        fontFamily: 'var(--font-mono)',
                        marginBottom: '1.5rem'
                      }}
                    >
                      <div>
                        <span style={{ color: 'var(--slate-500)' }}>{isAr ? 'السنة: ' : 'Year: '}</span>
                        <span style={{ fontWeight: 700, color: 'var(--navy-900)' }}>{proj.year}</span>
                      </div>
                      <div>
                        <span style={{ color: 'var(--slate-500)' }}>{isAr ? 'السعة: ' : 'Seats: '}</span>
                        <span style={{ fontWeight: 700, color: 'var(--primary-blue)' }}>{proj.seats} {isAr ? 'مقعد' : 'seats'}</span>
                      </div>
                    </div>
                  </div>

                  <Button href="/contact" variant="secondary" style={{ width: '100%' }}>
                    <span>{t('common.inquiry')}</span>
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
