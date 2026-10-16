import React from 'react';
import { getTranslations } from 'next-intl/server';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return (
    <div style={{ padding: '6rem 0', background: 'var(--surface-white)' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '1.5rem' }}>
          {isAr ? 'سياسة الخصوصية وحماية البيانات' : 'Privacy & Data Protection Policy'}
        </h1>
        <div style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--carbon-700)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p>
            {isAr
              ? 'تلتزم شركة SHOMAN بحماية خصوصية عملائها وزوار موقعها الإلكتروني. توضح هذه السياسة كيفية التعامل مع البيانات التقنية والمعلومات المتبادلة في سياق الاستشارات المعمارية وتوريد المشاريع.'
              : 'SHOMAN is committed to safeguarding client privacy and proprietary architectural project specifications.'}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--navy-900)', marginTop: '1rem' }}>
            {isAr ? '1. البيانات التي يتم جمعها' : '1. Collected Information'}
          </h2>
          <p>
            {isAr
              ? 'نظراً لطبيعة الموقع كمنصة B2B تعريفية، فإننا لا نقوم بجمع أي بيانات دفع أو تسجيل دخول عام. تقتصر البيانات على سجلات التواصل المباشر عبر البريد الإلكتروني أو الهاتف لغرض تقديم المقايسات والعطاءات.'
              : 'As a B2B informational platform, we do not process public payment credentials or consumer logins. Information is strictly limited to direct communications regarding technical tenders and project specs.'}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--navy-900)', marginTop: '1rem' }}>
            {isAr ? '2. سرية المواصفات الهندسية' : '2. Confidentiality of Specifications'}
          </h2>
          <p>
            {isAr
              ? 'تخضع كافة المخططات المعمارية وحسابات الصوتيات ومخططات المقاعد المتبادلة مع الاستشاريين لاتفاقيات السرية المهنية المعمول بها في مصر والمملكة العربية السعودية.'
              : 'All CAD layouts, acoustic models, and custom seating calculations exchanged with architects are protected under strict professional non-disclosure practices.'}
          </p>
        </div>
      </div>
    </div>
  );
}
