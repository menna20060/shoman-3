import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Icon } from '@/components/ui/Icon';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const isAr = locale === 'ar';

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
              <span>{t('contact.eyebrow')}</span>
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
              {t('contact.title')}
            </h1>
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.85,
                color: 'rgba(255, 255, 255, 0.8)'
              }}
            >
              {isAr
                ? 'فريقنا الهندسي والاستشاري متواجد لخدمتكم وتقديم المقايسات الفنية والمخططات التنفيذية للمشاريع في مصر والمملكة العربية السعودية.'
                : 'Our architectural acoustics and seating engineering teams are at your disposal for tenders, CAD specifications, and field consultations.'}
            </p>
          </div>
        </div>
      </section>

      {/* Hubs Grid */}
      <section style={{ padding: '6rem 0', background: 'var(--surface-white)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
              gap: '3rem'
            }}
          >
            {/* Cairo HQ - Egypt */}
            <div
              style={{
                background: 'var(--surface-blueprint)',
                border: '1px solid var(--border-hairline)',
                borderTop: '3px solid var(--primary-blue)',
                padding: '3rem 2.5rem'
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  background: 'var(--navy-900)',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--font-size-readable)',
                  fontWeight: 700,
                  padding: '0.35rem 0.75rem',
                  letterSpacing: '0.08em',
                  marginBottom: '1.5rem'
                }}
              >
                {isAr ? 'مصر · المقر الرئيسي' : 'EGYPT · HEADQUARTERS'}
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '1.75rem' }}>
                {t('contact.cairoTitle')}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ color: 'var(--cyan-500)', marginTop: '2px' }}>
                    <Icon name="i-pin" size="md" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-readable)', color: 'var(--slate-500)', textTransform: 'uppercase' }}>
                      {t('contact.addressLabel')}
                    </div>
                    <div style={{ fontWeight: 600, color: 'var(--navy-900)', marginTop: '2px', lineHeight: 1.6 }}>
                      {isAr ? 'التجمع الخامس، القاهرة الجديدة، مصر' : '5th Settlement, New Cairo, Cairo, Egypt'}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ color: 'var(--cyan-500)', marginTop: '2px' }}>
                    <Icon name="i-phone" size="md" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-readable)', color: 'var(--slate-500)', textTransform: 'uppercase' }}>
                      {t('contact.phoneLabel')}
                    </div>
                    <div style={{ fontWeight: 600, color: 'var(--navy-900)', marginTop: '2px', direction: 'ltr', textAlign: isAr ? 'right' : 'left' }}>
                      <a href="tel:+20226178900" style={{ color: 'inherit', textDecoration: 'none' }}>+20 2 2617 8900</a>
                      <span style={{ margin: '0 8px', color: 'var(--border-variant)' }}>/</span>
                      <a href="tel:+201001234567" style={{ color: 'inherit', textDecoration: 'none' }}>+20 100 123 4567</a>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ color: 'var(--cyan-500)', marginTop: '2px' }}>
                    <Icon name="i-mail" size="md" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-readable)', color: 'var(--slate-500)', textTransform: 'uppercase' }}>
                      {t('contact.emailLabel')}
                    </div>
                    <div style={{ fontWeight: 600, marginTop: '2px' }}>
                      <a href="mailto:cairo@mti-me.com" style={{ color: 'var(--primary-blue)', textDecoration: 'none' }}>
                        cairo@mti-me.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Riyadh Hub - Saudi Arabia */}
            <div
              style={{
                background: 'var(--surface-blueprint)',
                border: '1px solid var(--border-hairline)',
                borderTop: '3px solid var(--tertiary-cyan)',
                padding: '3rem 2.5rem'
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  background: 'var(--navy-900)',
                  color: 'var(--cyan-500)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--font-size-readable)',
                  fontWeight: 700,
                  padding: '0.35rem 0.75rem',
                  letterSpacing: '0.08em',
                  marginBottom: '1.5rem'
                }}
              >
                {isAr ? 'المملكة العربية السعودية · فرع الرياض' : 'SAUDI ARABIA · RIYADH HUB'}
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '1.75rem' }}>
                {t('contact.riyadhTitle')}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ color: 'var(--cyan-500)', marginTop: '2px' }}>
                    <Icon name="i-pin" size="md" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-readable)', color: 'var(--slate-500)', textTransform: 'uppercase' }}>
                      {t('contact.addressLabel')}
                    </div>
                    <div style={{ fontWeight: 600, color: 'var(--navy-900)', marginTop: '2px', lineHeight: 1.6 }}>
                      {isAr ? 'طريق الملك فهد، الرياض، المملكة العربية السعودية' : 'King Fahd Road, Riyadh, Kingdom of Saudi Arabia'}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ color: 'var(--cyan-500)', marginTop: '2px' }}>
                    <Icon name="i-phone" size="md" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-readable)', color: 'var(--slate-500)', textTransform: 'uppercase' }}>
                      {t('contact.phoneLabel')}
                    </div>
                    <div style={{ fontWeight: 600, color: 'var(--navy-900)', marginTop: '2px', direction: 'ltr', textAlign: isAr ? 'right' : 'left' }}>
                      <a href="tel:+966114803210" style={{ color: 'inherit', textDecoration: 'none' }}>+966 11 480 3210</a>
                      <span style={{ margin: '0 8px', color: 'var(--border-variant)' }}>/</span>
                      <a href="tel:+966555555555" style={{ color: 'inherit', textDecoration: 'none' }}>+966 55 555 5555</a>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ color: 'var(--cyan-500)', marginTop: '2px' }}>
                    <Icon name="i-mail" size="md" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-readable)', color: 'var(--slate-500)', textTransform: 'uppercase' }}>
                      {t('contact.emailLabel')}
                    </div>
                    <div style={{ fontWeight: 600, marginTop: '2px' }}>
                      <a href="mailto:riyadh@mti-me.com" style={{ color: 'var(--primary-blue)', textDecoration: 'none' }}>
                        riyadh@mti-me.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp connection for Riyadh */}
                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-hairline)' }}>
                  <a
                    href="https://wa.me/966555555555"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'rgba(37, 211, 102, 0.12)',
                      border: '1px solid rgba(37, 211, 102, 0.35)',
                      color: '#059669',
                      padding: '0.75rem 1.25rem',
                      fontWeight: 700,
                      fontSize: 'var(--font-size-readable)',
                      textDecoration: 'none',
                      transition: 'background 200ms'
                    }}
                  >
                    <Icon name="i-whatsapp" size="sm" />
                    <span>{t('contact.whatsappBtn')}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
