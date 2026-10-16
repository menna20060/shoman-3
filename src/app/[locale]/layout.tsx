import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { IconSprite } from '@/components/ui/IconSprite';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '../globals.css';

export const metadata: Metadata = {
  title: 'SHOMAN | Auditorium & Theater Engineering',
  description: 'Pioneers in high-precision auditorium seating, telescopic bleachers, and turnkey theater engineering across Egypt and the Middle East since 2009.',
  icons: { icon: '/icon.svg' }
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages: any = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const headerTranslations = {
    home: messages?.nav?.home || 'Home',
    about: messages?.nav?.about || 'About',
    theater: messages?.nav?.theater || 'Theater Solutions',
    seats: messages?.nav?.seats || 'Seats',
    projects: messages?.nav?.projects || 'Projects',
    contact: messages?.nav?.contact || 'Contact',
    consultation: messages?.nav?.consultation || 'Consultation',
    switchLang: messages?.common?.switchLang || 'EN'
  };

  const footerTranslations = {
    aboutText: messages?.footer?.aboutText || '',
    colSections: messages?.footer?.colSections || 'Sections',
    colTheater: messages?.footer?.colTheater || 'Theater Solutions',
    colContact: messages?.footer?.colContact || 'Contact Us',
    contactDesc: messages?.footer?.contactDesc || '',
    privacy: messages?.footer?.privacy || 'Privacy Policy',
    terms: messages?.footer?.terms || 'Terms of Service',
    rights: messages?.footer?.rights || 'All Rights Reserved © MTI 2026'
  };

  return (
    <html lang={locale} dir={dir}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700;800&family=Montserrat:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <IconSprite />
        <Header locale={locale} translations={headerTranslations} />
        <main>{children}</main>
        <Footer locale={locale} translations={footerTranslations} />
      </body>
    </html>
  );
}
