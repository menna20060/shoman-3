import React from 'react';
import { BrandLogo } from '../ui/BrandLogo';
import { Icon } from '../ui/Icon';

interface FooterProps {
  locale: string;
  translations: {
    aboutText: string;
    colSections: string;
    colTheater: string;
    colContact: string;
    contactDesc: string;
    privacy: string;
    terms: string;
    rights: string;
  };
}

export const Footer: React.FC<FooterProps> = ({ locale, translations }) => {
  const isAr = locale === 'ar';

  return (
    <footer
      style={{
        background: 'var(--navy-950)',
        color: '#FFFFFF',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container">
        {/* Main 4-column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Col 1: Brand & Bio */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <BrandLogo href="/" />
            </div>
            <p
              style={{
                fontSize: 'var(--font-size-readable)',
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.7)',
                marginTop: '1rem'
              }}
            >
              {translations.aboutText}
            </p>
          </div>

          {/* Col 2: Section Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1rem',
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                letterSpacing: '0.05em'
              }}
            >
              {translations.colSections}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a href="/" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', fontSize: 'var(--font-size-readable)', transition: 'color 360ms cubic-bezier(0.22, 1, 0.36, 1)' }}>
                  {isAr ? 'الرئيسية' : 'Home'}
                </a>
              </li>
              <li>
                <a href="/about" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', fontSize: 'var(--font-size-readable)', transition: 'color 360ms cubic-bezier(0.22, 1, 0.36, 1)' }}>
                  {isAr ? 'من نحن' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="/theater-solutions" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', fontSize: 'var(--font-size-readable)', transition: 'color 360ms cubic-bezier(0.22, 1, 0.36, 1)' }}>
                  {isAr ? 'حلول المسارح' : 'Theater Solutions'}
                </a>
              </li>
              <li>
                <a href="/seats" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', fontSize: 'var(--font-size-readable)', transition: 'color 360ms cubic-bezier(0.22, 1, 0.36, 1)' }}>
                  {isAr ? 'كراسي القاعات' : 'Auditorium Seats'}
                </a>
              </li>
              <li>
                <a href="/projects" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', fontSize: 'var(--font-size-readable)', transition: 'color 360ms cubic-bezier(0.22, 1, 0.36, 1)' }}>
                  {isAr ? 'مشاريعنا' : 'Projects'}
                </a>
              </li>
              <li>
                <a href="/downloads" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', fontSize: 'var(--font-size-readable)', transition: 'color 360ms cubic-bezier(0.22, 1, 0.36, 1)' }}>
                  {isAr ? 'التحميلات والمواصفات' : 'Downloads'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Theater Solutions */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1rem',
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                letterSpacing: '0.05em'
              }}
            >
              {translations.colTheater}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a href="/theater-solutions" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', fontSize: 'var(--font-size-readable)' }}>
                  {isAr ? 'التصميم المعماري والعزل' : 'Architecture & Acoustics'}
                </a>
              </li>
              <li>
                <a href="/theater-solutions" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', fontSize: 'var(--font-size-readable)' }}>
                  {isAr ? 'الأنظمة الصوتية Pro Audio' : 'Pro Audio Systems'}
                </a>
              </li>
              <li>
                <a href="/theater-solutions" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', fontSize: 'var(--font-size-readable)' }}>
                  {isAr ? 'إضاءة المسارح Pro Lighting' : 'Stage Lighting'}
                </a>
              </li>
              <li>
                <a href="/theater-solutions" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', fontSize: 'var(--font-size-readable)' }}>
                  {isAr ? 'شاشات العرض والبروجكتور' : 'LED Walls & Projection'}
                </a>
              </li>
              <li>
                <a href="/theater-solutions" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', fontSize: 'var(--font-size-readable)' }}>
                  {isAr ? 'الميكانيزم والجمالونات' : 'Stage Mechanics & Trusses'}
                </a>
              </li>
              <li>
                <a href="/theater-solutions" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', fontSize: 'var(--font-size-readable)' }}>
                  {isAr ? 'باقات الصيانة السنوية' : 'Annual Care Packages'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Cairo (HQ) & Riyadh Hub Contact */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1rem',
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                letterSpacing: '0.05em'
              }}
            >
              {translations.colContact}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Cairo Hub - No WhatsApp */}
              <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: 'var(--font-size-readable)', fontFamily: 'var(--font-mono)', color: 'var(--cyan-500)', fontWeight: 700, marginBottom: '0.35rem' }}>
                  {isAr ? 'فرع القاهرة (المقر الرئيسي)' : 'Cairo Hub (HQ)'}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--font-size-readable)', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '4px' }}>
                  <Icon name="i-phone" size="sm" />
                  <span>+20 2 2617 8900</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--font-size-readable)', color: 'rgba(255, 255, 255, 0.8)' }}>
                  <Icon name="i-mail" size="sm" />
                  <span>cairo@mti-me.com</span>
                </div>
              </div>

              {/* Riyadh Hub - Direct WhatsApp Link */}
              <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: 'var(--font-size-readable)', fontFamily: 'var(--font-mono)', color: 'var(--cyan-500)', fontWeight: 700, marginBottom: '0.35rem' }}>
                  {isAr ? 'فرع المملكة العربية السعودية' : 'Saudi Arabia Hub'}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--font-size-readable)', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '4px' }}>
                  <Icon name="i-phone" size="sm" />
                  <span>+966 11 480 3210</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--font-size-readable)', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '8px' }}>
                  <Icon name="i-mail" size="sm" />
                  <span>riyadh@mti-me.com</span>
                </div>
                <a
                  href="https://wa.me/966555555555"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#10B981',
                    fontSize: 'var(--font-size-readable)',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <Icon name="i-whatsapp" size="sm" />
                  <span>Connect on WhatsApp →</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: 'var(--font-size-readable)',
            color: 'rgba(255, 255, 255, 0.5)'
          }}
        >
          <div>{translations.rights}</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="/legal/privacy" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none' }}>
              {translations.privacy}
            </a>
            <a href="/legal/terms" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none' }}>
              {translations.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
