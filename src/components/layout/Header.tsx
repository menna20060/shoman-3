'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from '@/i18n/routing';
import { BrandLogo } from '../ui/BrandLogo';
import { Icon } from '../ui/Icon';

interface HeaderProps {
  locale: string;
  translations: {
    home: string;
    about: string;
    theater: string;
    seats: string;
    projects: string;
    contact: string;
    consultation: string;
    switchLang: string;
  };
}

const navItems = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'theater', href: '/theater-solutions' },
  { key: 'seats', href: '/seats' },
  { key: 'projects', href: '/projects' },
  { key: 'contact', href: '/contact' }
];

export const Header: React.FC<HeaderProps> = ({ locale, translations }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navListRef = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sliding indicator positioning
  const updateIndicatorTo = (el: HTMLElement | null) => {
    const indicator = indicatorRef.current;
    const navList = navListRef.current;
    if (!indicator || !navList) return;

    if (!el) {
      indicator.style.opacity = '0';
      return;
    }

    const textSpan = el.querySelector<HTMLElement>('.nav-link-text') || el;
    const navRect = navList.getBoundingClientRect();
    const textRect = textSpan.getBoundingClientRect();

    const left = textRect.left - navRect.left;
    const width = textRect.width;

    indicator.style.transform = `translateX(${left}px)`;
    indicator.style.width = `${width}px`;
    indicator.style.opacity = '1';
  };

  const syncToActive = () => {
    if (!navListRef.current) return;
    const activeEl = navListRef.current.querySelector<HTMLElement>('.nav-link.active');
    updateIndicatorTo(activeEl);
  };

  useEffect(() => {
    syncToActive();
  }, [pathname]);

  const toggleLanguage = () => {
    const nextLocale = locale === 'ar' ? 'en' : 'ar';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header id="site-header" className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <BrandLogo href="/" />

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation">
            <ul
              className="nav-links"
              ref={navListRef}
              onMouseLeave={syncToActive}
            >
              <div ref={indicatorRef} className="nav-sliding-indicator" aria-hidden="true" />
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                const label = (translations as any)[item.key] || item.key;

                return (
                  <li key={item.key} className="nav-item">
                    <a
                      href={item.href}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                      onMouseEnter={(e) => updateIndicatorTo(e.currentTarget)}
                    >
                      <span className="nav-link-text">{label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Actions: Lang switcher + Mobile button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              type="button"
              className="lang-btn"
              onClick={toggleLanguage}
              aria-label={`Switch to ${locale === 'ar' ? 'English' : 'Arabic'}`}
              title={`Switch to ${locale === 'ar' ? 'English' : 'Arabic'}`}
            >
              <span className="lang-track" style={{ transform: locale === 'ar' ? 'translateY(0)' : 'translateY(-38px)' }}>
                <span className="lang-option lang-en">EN</span>
                <span className="lang-option lang-ar">عربي</span>
              </span>
            </button>

            <button
              type="button"
              className={`mobile-menu-btn ${isDrawerOpen ? 'active' : ''}`}
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isDrawerOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`drawer-overlay ${isDrawerOpen ? 'active' : ''}`}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(10, 34, 52, 0.45)',
          backdropFilter: 'blur(4px)',
          zIndex: 1100,
          opacity: isDrawerOpen ? 1 : 0,
          pointerEvents: isDrawerOpen ? 'auto' : 'none',
          transition: 'opacity 300ms cubic-bezier(0.22, 1, 0.36, 1)'
        }}
        onClick={() => setIsDrawerOpen(false)}
      >
        <div
          className={`drawer-panel drawer-panel--${locale === 'ar' ? 'right' : 'left'}`}
          data-drawer-side={locale === 'ar' ? 'right' : 'left'}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: locale === 'ar' ? 'auto' : 0,
            right: locale === 'ar' ? 0 : 'auto',
            width: '85%',
            maxWidth: '340px',
            background: 'var(--surface-white)',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transform: isDrawerOpen ? 'translateX(0)' : (locale === 'ar' ? 'translateX(100%)' : 'translateX(-100%)'),
            transition: 'transform 300ms cubic-bezier(0.22, 1, 0.36, 1)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <BrandLogo href="/" />
              <button
                type="button"
                onClick={() => setIsDrawerOpen(false)}
                style={{ padding: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--navy-900)' }}
                aria-label="Close drawer"
              >
                <Icon name="i-close" size="md" />
              </button>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const label = (translations as any)[item.key] || item.key;
                return (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      onClick={() => setIsDrawerOpen(false)}
                      style={{
                        display: 'block',
                        padding: '0.75rem 0',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: isActive ? 'var(--primary-blue)' : 'var(--navy-900)',
                        textDecoration: 'none',
                        borderBottom: '1px solid var(--border-hairline)'
                      }}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-hairline)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 'var(--font-size-readable)', color: 'var(--text-muted)', fontWeight: 600 }}>
              {locale === 'ar' ? 'اللغة / Language' : 'Language'}
            </span>
            <button
              type="button"
              className="lang-btn"
              onClick={toggleLanguage}
              aria-label="Switch Language"
            >
              <span className="lang-track" style={{ transform: locale === 'ar' ? 'translateY(0)' : 'translateY(-38px)' }}>
                <span className="lang-option lang-en">EN</span>
                <span className="lang-option lang-ar">عربي</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
