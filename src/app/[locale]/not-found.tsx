import React from 'react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div style={{ padding: '8rem 0', background: 'var(--surface-white)', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '5rem', fontWeight: 900, color: 'var(--primary-blue)', lineHeight: 1 }}>
          404
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--navy-900)', margin: '1rem 0' }}>
          الصفحة غير موجودة · Page Not Found
        </h1>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
          عذراً، الرابط المطلوب غير متوفر أو تم نقله. يمكنك العودة إلى الصفحة الرئيسية للموقع.
        </p>
        <Button href="/" variant="primary">
          <span>العودة للرئيسية · Back to Home</span>
        </Button>
      </div>
    </div>
  );
}
