import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function TheaterSolutionsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const isAr = locale === 'ar';

  const services = [
    {
      id: 'architecture-design',
      icon: 'i-architecture',
      title: isAr ? 'Architecture & Design' : 'Architecture & Acoustics',
      subtitle: isAr ? 'التصميم المعماري والعزل الصوتي' : 'Architectural Design & Wall Cladding',
      desc: isAr ? 'تصميم معماري وتنفيذ كامل للمسارح، وتوريد مواد الحوائط والأسقف الماصة للصوت.' : 'Turnkey theater architectural design, acoustic wall cladding, and stage planning.',
      items: [
        isAr ? 'ألواح خشبية وجبسية مثقوبة لامتصاص الصدى وضبط زمن الرنين' : 'Perforated timber and gypsum acoustic panels for RT60 reverberation control',
        isAr ? 'ستائر مسرحية مخملية معالجة ضد الحريق بمعايير NFPA 701' : 'Fire-retardant heavy velour theatrical stage drapes conforming to NFPA 701',
        isAr ? 'دراسات محاكاة صوتية ثلاثية الأبعاد (3D Ray Tracing)' : '3D Ray Tracing computerized acoustic simulations and STI speech intelligibility tests'
      ]
    },
    {
      id: 'pro-audio',
      icon: 'i-audio',
      title: isAr ? 'Pro Audio' : 'Professional Audio Systems',
      subtitle: isAr ? 'أنظمة الصوت الاحترافية' : 'Sound Reinforcement & Line Arrays',
      desc: isAr ? 'أنظمة صوت احترافية بماركات عالمية (Line Array, Mixers, Microphones).' : 'Professional sound reinforcement systems from industry-leading global manufacturers.',
      items: [
        isAr ? 'سماعات Line Array وPA مع توزيع صوتي متوازن كامل القاعة' : 'Line Array & PA modular clusters with calculated horizontal and vertical dispersion',
        isAr ? 'ميكسرات رقمية وغرف تحكم تدعم بروتوكولات Dante وAES' : 'Digital audio consoles and control rooms with native Dante and AES67 networked audio',
        isAr ? 'أنظمة ميكروفونات لاسلكية متعددة القنوات مع مسح ترددات آمن' : 'Multi-channel wireless microphone systems with RF spectrum management'
      ]
    },
    {
      id: 'pro-lighting',
      icon: 'i-lighting',
      title: isAr ? 'Pro Lighting' : 'Stage & Architectural Lighting',
      subtitle: isAr ? 'إضاءة المسارح والتحكم DMX' : 'Intelligent Luminaires & DMX Control',
      desc: isAr ? 'حلول إضاءة مسرحية احترافية وخبرة منذ 2009 في كشافات المسارح وDMX.' : 'Theatrical architectural and stage lighting systems with automated DMX control.',
      items: [
        isAr ? 'كشافات LED Moving Heads وFresnel عالية السطوع' : 'High-CRI LED Profile Moving Heads, Fresnel fixtures, and CYC flood luminaires',
        isAr ? 'طاولات تحكم الإضاءة والـ Dimmers وبرمجة المشاهد الحية' : 'Industry-standard lighting control consoles with programmable cue lists and submasters',
        isAr ? 'شبكات توزيع إشارة DMX/RDM وبوابات Ethernet متكررة' : 'Optically isolated DMX/RDM distribution and redundant sACN/Art-Net nodes'
      ]
    },
    {
      id: 'visual-effects',
      icon: 'i-visual',
      title: isAr ? 'Visual & Effects' : 'Visual Projection & Video Walls',
      subtitle: isAr ? 'الشاشات والتأثيرات المرئية' : 'Fine-Pitch LED & Laser Cinema',
      desc: isAr ? 'حلول عرض وشاشات LED وتأثيرات مرئية مصممة خصيصاً لكل قاعة.' : 'Visual projection systems, fine-pitch LED video walls, and stage visual effects.',
      items: [
        isAr ? 'شاشات LED جدارية فائقة النقاء Fine-Pitch بمعدل تحديث عالٍ' : 'Ultra-fine pitch indoor LED video walls with high refresh rates and HDR processing',
        isAr ? 'أجهزة بروجكتور ليزرية سينمائية للمسافات البعيدة مع شاشات شد آلية' : 'High-lumen 3-chip laser projectors with motorized tensioned projection surfaces',
        isAr ? 'أنظمة معالجة وتبديل إشارات 4K Seamless Video Switchers' : 'Broadcast-grade 4K seamless video switchers and multi-window processors'
      ]
    },
    {
      id: 'mechanism',
      icon: 'i-mechanism',
      title: isAr ? 'Mechanism & Rigging' : 'Stage Mechanics & Trusses',
      subtitle: isAr ? 'ميكانيزم المسارح والجمالونات' : 'Motorized Hoists & Counterweights',
      desc: isAr ? 'ميكانيزم المسارح وأنظمة الجمالونات (Truss) لتحريك الديكورات والإضاءة.' : 'Stage mechanics, motorized hoists, counterweight sets, and heavy-duty trusses.',
      items: [
        isAr ? 'أنظمة رفع ميكانيكية ومحركات كهربائية معتمدة BGV-C1' : 'Variable-speed motorized chain hoists compliant with European BGV-C1/SIL3 safety standards',
        isAr ? 'جمالونات ألومنيوم هندسية شديدة التحمل للأحمال الحية' : 'Structural certified aluminum box trusses for heavy theatrical rigging grids',
        isAr ? 'شاشات تحكم ميكانيكية مركزية مع فرامل طوارئ آلية' : 'Touchscreen rigging management consoles with automated double-brake failsafes'
      ]
    },
    {
      id: 'annual-care-packages',
      icon: 'i-care',
      title: isAr ? 'Annual Care Packages' : 'Preventative Care & Maintenance',
      subtitle: isAr ? 'باقات الصيانة الدورية والتجديد' : 'Calibration & 24/7 Support Contracts',
      desc: isAr ? 'باقات صيانة وتجديد سنوية وقائية للمسارح والقاعات والاستوديوهات.' : 'Comprehensive preventative annual maintenance and calibration contracts.',
      items: [
        isAr ? 'فحص دوري ربع سنوي ومعايرة للأجهزة الصوتية والضوئية والميكانيكية' : 'Quarterly diagnostic inspection, hardware lubrication, and acoustic recalibration',
        isAr ? 'تأمين فوري لقطع الغيار الأصلية من كبرى المصانع العالمية' : 'Direct factory spare parts inventory maintaining uninterrupted hall uptime',
        isAr ? 'فريق طوارئ هندسي ميداني واستجابة سريعة على مدار الساعة' : 'On-call emergency field engineering dispatch with dedicated SLA response'
      ]
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
              <span>{t('theater.eyebrow')}</span>
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
              {t('theater.title')}
            </h1>
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.85,
                color: 'rgba(255, 255, 255, 0.8)'
              }}
            >
              {t('theater.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section style={{ padding: '6rem 0', background: 'var(--surface-white)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
              gap: '2.5rem'
            }}
          >
            {services.map((srv) => (
              <div
                key={srv.id}
                id={srv.id}
                style={{
                  padding: '2.5rem',
                  background: 'var(--surface-blueprint)',
                  border: '1px solid var(--border-hairline)',
                  borderTop: '3px solid var(--primary-blue)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'var(--aqua-mist)',
                      color: 'var(--cyan-500)',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <Icon name={srv.icon} size="lg" />
                  </div>

                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-readable)', color: 'var(--cyan-500)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                    {srv.subtitle}
                  </div>

                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '1rem' }}>
                    {srv.title}
                  </h2>

                  <p style={{ fontSize: 'var(--font-size-readable)', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                    {srv.desc}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {srv.items.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: 'var(--font-size-readable)', color: 'var(--carbon-900)', lineHeight: 1.6 }}>
                        <span style={{ width: '6px', height: '6px', background: 'var(--primary-blue)', marginTop: '8px', flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-hairline)' }}>
                  <Button href="/contact" variant="secondary" style={{ width: '100%' }}>
                    <span>{t('common.consultation')}</span>
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
