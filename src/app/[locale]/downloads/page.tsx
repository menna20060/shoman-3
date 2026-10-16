import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function DownloadsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const isAr = locale === 'ar';

  const downloads = [
    {
      id: 1,
      title: isAr ? 'كتالوج كراسي القاعات والمسارح الكامل (Performer Collection)' : 'Performer Collection Master Catalog 2026',
      type: 'PDF',
      size: '14.8 MB',
      date: '2026-02'
    },
    {
      id: 2,
      title: isAr ? 'المواصفات الفنية لأنظمة المدرجات التلسكوبية (A-System Telescopic)' : 'A-System Telescopic Technical Datasheets',
      type: 'PDF',
      size: '8.4 MB',
      date: '2026-01'
    },
    {
      id: 3,
      title: isAr ? 'تقرير اختبارات العزل والامتصاص الصوتي المعملي (Acoustic Lab Report)' : 'Acoustic Sound Absorption Laboratory Report (ISO 354)',
      type: 'PDF',
      size: '3.2 MB',
      date: '2025-11'
    },
    {
      id: 4,
      title: isAr ? 'شهادات الاعتماد لمقاومة الحريق (NFPA 701 & EN 1021 Fire Certs)' : 'Fire Safety Retardancy Certificates (NFPA & CE)',
      type: 'PDF',
      size: '2.9 MB',
      date: '2025-10'
    },
    {
      id: 5,
      title: isAr ? 'كتالوج حلول هندسة المسارح والصوتيات والإضاءة (Theater Solutions)' : 'Turnkey Theater & Stage Engineering Brochure',
      type: 'PDF',
      size: '11.5 MB',
      date: '2026-03'
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
              <span>{t('downloads.eyebrow')}</span>
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
              {t('downloads.title')}
            </h1>
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.85,
                color: 'rgba(255, 255, 255, 0.8)'
              }}
            >
              {isAr
                ? 'تحميل الملفات الفنية المعتمدة، الكتالوجات الشاملة، وشهادات الاختبارات المعملية الصادرة للاستشاريين والمعماريين.'
                : 'Download certified technical specifications, product catalogs, and certified test reports for architects and specifiers.'}
            </p>
          </div>
        </div>
      </section>

      {/* Downloads List */}
      <section style={{ padding: '6rem 0', background: 'var(--surface-white)' }}>
        <div className="container">
          <div className="downloads-list" style={{ maxWidth: '880px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {downloads.map((d) => (
              <div
                key={d.id}
                className="download-card"
                style={{
                  background: 'var(--surface-blueprint)',
                  border: '1px solid var(--border-hairline)',
                  padding: '1.75rem 2rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', maxWidth: '620px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'var(--aqua-mist)',
                      color: 'var(--cyan-500)',
                      flexShrink: 0
                    }}
                  >
                    <Icon name="i-file" size="md" />
                  </div>
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.35rem' }}>
                      {d.title}
                    </h2>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-readable)', color: 'var(--slate-500)' }}>
                      {d.type} · {d.size} · {t('common.officialRelease')} ({d.date})
                    </div>
                  </div>
                </div>

                <Button
                  href={`#download-${d.id}`}
                  variant="secondary"
                  className="download-button"
                >
                  <span>{isAr ? 'تحميل' : 'Download'}</span>
                  <Icon name="i-download" size="sm" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
