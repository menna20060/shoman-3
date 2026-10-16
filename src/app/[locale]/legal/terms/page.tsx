import React from 'react';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return (
    <div style={{ padding: '6rem 0', background: 'var(--surface-white)' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '1.5rem' }}>
          {isAr ? 'الشروط والأحكام العامة' : 'Terms & Conditions'}
        </h1>
        <div style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--carbon-700)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p>
            {isAr
              ? 'مرحباً بكم في الموقع الرسمي لشركة SHOMAN. يُعد استخدام هذا الموقع قبولاً للشروط والأحكام المنصوص عليها هنا.'
              : 'Welcome to the official portal of SHOMAN. By browsing this website, you agree to these terms.'}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--navy-900)', marginTop: '1rem' }}>
            {isAr ? '1. الملكية الفكرية والكتالوجات' : '1. Intellectual Property & Catalogs'}
          </h2>
          <p>
            {isAr
              ? 'كافة الرسومات الهندسية، صور المشاريع، الكتالوجات والملفات الفنية المعروضة هي ملكية حصرية لـ MTI ومحمية بموجب قوانين الملكية الفكرية. لا يجوز إعادة نشرها أو استخدامها لأغراض تجارية دون إذن كتابي مسبق.'
              : 'All technical drawings, CAD specifications, project photography, and catalogs are proprietary assets of MTI protected by intellectual property laws.'}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--navy-900)', marginTop: '1rem' }}>
            {isAr ? '2. الضمان والمسؤولية الفنية' : '2. Warranty & Technical Responsibility'}
          </h2>
          <p>
            {isAr
              ? 'تخضع مواصفات المنتجات المنفذة للعقود الرسمية المبرمة مع العملاء والتي تتضمن شروط الضمان وتفاصيل باقات الصيانة الوقائية السنوية.'
              : 'Delivered product engineering and acoustic performance are governed by final contractual tender agreements and manufacturer warranty policies.'}
          </p>
        </div>
      </div>
    </div>
  );
}
