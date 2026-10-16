    (function() {
      'use strict';

      const THEATER_SERVICE_ICONS = {
        'architecture-design': 'i-architecture',
        'pro-audio': 'i-audio',
        'pro-lighting': 'i-lighting',
        'visual-effects': 'i-visual',
        mechanism: 'i-mechanism',
        'annual-care-packages': 'i-care'
      };
      const OPTIONAL_FEATURE_ICONS = {
        'Seat Numbering': 'i-seat-number',
        'Row Markers & Aisle Light': 'i-row-marker',
        'Writing Tablet Options': 'i-tablet',
        'Moveable Base Collection': 'i-moveable'
      };
      const DEFAULT_HERO_IMAGE = 'https://images.unsplash.com/photo-1560184611-ff3e53f00e8f?auto=format&fit=crop&w=1920&q=85';
      const PREVIOUS_HERO_IMAGE = 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=1920&q=80';
      const REPLACED_IMAGE_ID = 'photo-1469488865564-c2de10f69f96';
      const REPLACEMENT_IMAGE_ID = 'photo-1506157786151-b8491531f063';
      const THEATER_SERVICE_TITLES_AR = {
        'architecture-design': 'التصميم المعماري',
        'pro-audio': 'أنظمة الصوت الاحترافية',
        'pro-lighting': 'أنظمة الإضاءة المسرحية',
        'visual-effects': 'أنظمة العرض والمؤثرات البصرية',
        mechanism: 'ميكانيزم وتجهيزات المسرح',
        'annual-care-packages': 'الصيانة والرعاية السنوية'
      };
      const THEATER_SERVICE_MENU_DESCRIPTIONS = {
        'architecture-design': {
          ar: 'تصميم المسارح والمعالجة الصوتية.',
          en: 'Theater design and acoustic treatment.'
        },
        'pro-audio': {
          ar: 'أنظمة صوت احترافية متكاملة.',
          en: 'Complete professional audio systems.'
        },
        'pro-lighting': {
          ar: 'إضاءة مسرحية وتحكم DMX.',
          en: 'Stage lighting and DMX control.'
        },
        'visual-effects': {
          ar: 'شاشات عرض وحلول بصرية.',
          en: 'Display and visual solutions.'
        },
        mechanism: {
          ar: 'أنظمة رفع وتجهيزات المسرح.',
          en: 'Stage rigging and lifting systems.'
        },
        'annual-care-packages': {
          ar: 'صيانة دورية ودعم فني.',
          en: 'Preventive maintenance and support.'
        }
      };

      // 1. DEFAULT DATA STORE
      const DEFAULT_DATA = {
        config: {
          currentLang: 'ar',
          seatsBatchSize: 4,
          displayedSeatsCount: 4
        },
        admins: [
          { email: 'admin@shoman.com', pass: 'MTI-Admin-2026', status: 'active', lastLogin: '2026-10-11 20:30' }
        ],
        trustMetrics: [
          { val: '2009', suffix: '', label_ar: 'سنة التأسيس والخبرة', label_en: 'Year Founded' },
          { val: '02', suffix: '', label_ar: 'فرعان في مصر والسعودية', label_en: 'Regional Hubs (EG & KSA)' },
          { val: '10', suffix: '+', label_ar: 'موديلات كراسي معتمدة', label_en: 'Auditorium Seating Models' },
          { val: '360', suffix: '°', label_ar: 'حلول مسرحية متكاملة', label_en: 'Complete Theater Engineering' }
        ],
        heroSlides: [
          {
            id: 1,
            badge_ar: 'الهندسة المعمارية للمسارح',
            badge_en: 'Marine Architectural Precision',
            title_ar: 'صروح ثقافية وقاعات كبرى تصمم لتدوم أجيالاً',
            title_en: 'Architectural Seating & Precision Theater Engineering',
            desc_ar: 'رواد توريد كراسي المسارح وأنظمة المدرجات القابلة للطي وتجهيز الصوتيات والإضاءة في مصر والمملكة العربية السعودية.',
            desc_en: 'Tier-one seating systems, telescopic bleachers, and acoustic theater engineering built to international standards.',
            bg: DEFAULT_HERO_IMAGE
          },
          {
            id: 2,
            badge_ar: 'مدرجات A-SYSTEM المتطورة',
            badge_en: 'A-System Telescopic Platforms',
            title_ar: 'أنظمة المدرجات الذكية القابلة للطي للمنشآت المتعددة',
            title_en: 'High-Load Retractable Bleachers for Modern Venues',
            desc_ar: 'تصاميم ميكانيكية متينة تضمن أقصى معايير السلامة واستغلال المساحة في الصالات الرياضية والجامعات.',
            desc_en: 'Innovative 24V motorized telescoping platforms with Posi-Lock LX and CE-certified 240kg rail load capacity.',
            bg: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1920&q=80'
          },
          {
            id: 3,
            badge_ar: 'حلول الصوت والإضاءة 360°',
            badge_en: 'Pro Audio & Stage Dynamics',
            title_ar: 'أنظمة صوت وإضاءة مسرحية بمواصفات استشارية عالمية',
            title_en: 'Turnkey Sound, Stage Machinery & Visual Solutions',
            desc_ar: 'تجهيز كامل للمسارح يشمل أنظمة Line Array، إضاءة DMX512، وشاشات العرض الذكية مع باقات الصيانة السنوية.',
            desc_en: 'Full technical supply with global brand partnerships, line arrays, acoustic cladding, and annual service care.',
            bg: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1920&q=80'
          }
        ],
        branches: [
          {
            id: 'cairo',
            country_ar: 'مصر (المقر الرئيسي)',
            country_en: 'Egypt (Headquarters)',
            address_ar: 'فيلا 99 غرب أرابيلا، التجمع الخامس، القاهرة الجديدة',
            address_en: 'Villa 99 West Arabella, 5th Settlement, New Cairo',
            phones: ['+20 100 819 9777', '+20 2 2658 2212'],
            email: 'sales@shoman.com',
            whatsapp: null // STRICT USER REQUIREMENT: REMOVED CONNECT ON WHATSAPP IN CAIRO BRANCH
          },
          {
            id: 'riyadh',
            country_ar: 'المملكة العربية السعودية',
            country_en: 'Saudi Arabia (Riyadh Branch)',
            address_ar: 'حي الوزارات، الرياض، المملكة العربية السعودية',
            address_en: 'Al Wizarat, Riyadh, Kingdom of Saudi Arabia',
            phones: ['+966 50 123 4567'],
            email: 'ksa@shoman.com',
            whatsapp: 'https://wa.me/966501234567'
          }
        ],
        theaterServices: [
          {
            id: 'architecture-design',
            title_ar: 'التصميم المعماري',
            title_en: 'Architecture & Design',
            short_ar: 'تصميم معماري وتنفيذ كامل للمسارح، وتوريد مواد الحوائط والأسقف الماصة للصوت.',
            short_en: 'Complete theater architectural design, acoustic wall cladding, and stage planning.',
            icon: 'i-architecture',
            sections: [
              { title_ar: 'العزل الصوتي والمعالجة الصوتية', title_en: 'Acoustic Insulation & Treatment', desc_ar: 'ألواح خشبية وجبسية مثقوبة لامتصاص الصدى وضبط زمن الرنين.' },
              { title_ar: 'ستائر المسرح والأنظمة الميكانيكية', title_en: 'Stage Curtains & Rigging', desc_ar: 'أقمشة مخملية معالجة ضد الحريق بمعايير NFPA 701.' }
            ]
          },
          {
            id: 'pro-audio',
            title_ar: 'أنظمة الصوت الاحترافية',
            title_en: 'Pro Audio',
            short_ar: 'أنظمة صوت احترافية بماركات عالمية (Line Array, Mixers, Microphones).',
            short_en: 'Professional sound reinforcement systems from industry-leading global brands.',
            icon: 'i-audio',
            sections: [
              { title_ar: 'سماعات Line Array وPA', title_en: 'Line Array & PA Systems', desc_ar: 'توزيع صوتي دقيق يضمن توازناً متطابقاً في كامل أرجاء القاعة.' },
              { title_ar: 'ميكسرات رقمية وميكروفونات لاسلكية', title_en: 'Digital Mixers & Microphones', desc_ar: 'غرف تحكم صوتي متكاملة تدعم بروتوكولات Dante وAES.' }
            ]
          },
          {
            id: 'pro-lighting',
            title_ar: 'أنظمة الإضاءة المسرحية',
            title_en: 'Pro Lighting',
            short_ar: 'حلول إضاءة مسرحية احترافية وخبرة منذ 2009 في كشافات المسارح وDMX.',
            short_en: 'Theatrical architectural and stage lighting systems with DMX control.',
            icon: 'i-lighting',
            sections: [
              { title_ar: 'كشافات LED Moving Lights وFresnel', title_en: 'Moving Heads & Fresnel Luminaires', desc_ar: 'كشافات فائقة السطوع مع درجات حرارة ألوان متغيرة وتحكم دقيق.' },
              { title_ar: 'طاولات الإضاءة وDimmers', title_en: 'Lighting Consoles & Dimming', desc_ar: 'برمجة المشاهد المسرحية والتحكم التلقائي في العروض الحية.' }
            ]
          },
          {
            id: 'visual-effects',
            title_ar: 'أنظمة العرض والمؤثرات البصرية',
            title_en: 'Visual & Effects',
            short_ar: 'حلول عرض وشاشات LED وتأثيرات مرئية مصممة خصيصاً لكل قاعة.',
            short_en: 'Visual projection systems, fine-pitch LED video walls, and stage effects.',
            icon: 'i-visual',
            sections: [
              { title_ar: 'شاشات العرض LED فائقة الدقة', title_en: 'Fine-Pitch LED Video Walls', desc_ar: 'وضوح فائق ومعدل تحديث عالٍ لجميع المؤتمرات والفعاليات.' },
              { title_ar: 'أجهزة بروجكتور سينمائية', title_en: 'Cinema & Stage Projectors', desc_ar: 'عدسات ليزرية للمسافات القصيرة والطويلة مع شاشات شد آلية.' }
            ]
          },
          {
            id: 'mechanism',
            title_ar: 'ميكانيزم وتجهيزات المسرح',
            title_en: 'Mechanism',
            short_ar: 'ميكانيزم المسارح وأنظمة الجمالونات (Truss) لتحريك الديكورات والإضاءة.',
            short_en: 'Stage mechanics, motorized hoists, counterweight sets, and heavy trusses.',
            icon: 'i-mechanism',
            sections: [
              { title_ar: 'أنظمة الرفع الميكانيكية والمحركات', title_en: 'Motorized Hoists & Winches', desc_ar: 'محركات آمنة معتمدة لحمل الديكورات وشبكات الإضاءة الثقيلة.' },
              { title_ar: 'جمالونات الألومنيوم الهندسية', title_en: 'Aluminum Truss Systems', desc_ar: 'هياكل شديدة المتانة وخفيفة الوزن مطابقة لمعايير السلامة الأوروبية.' }
            ]
          },
          {
            id: 'annual-care-packages',
            title_ar: 'الصيانة والرعاية السنوية',
            title_en: 'Annual Care Packages',
            short_ar: 'باقات صيانة وتجديد سنوية وقائية للمسارح والقاعات والاستوديوهات.',
            short_en: 'Comprehensive preventative annual maintenance and calibration contracts.',
            icon: 'i-care',
            sections: [
              { title_ar: 'الفحص الدوري والمعايرة', title_en: 'Periodic Inspection & Calibration', desc_ar: 'صيانة دورية للميكانيزم والصوت والإضاءة لضمان استمرارية التشغيل دون أعطال.' },
              { title_ar: 'الدعم الفني السريع وقطع الغيار', title_en: 'Rapid Support & Spare Parts', desc_ar: 'تأمين فوري لقطع الغيار الأصلية وفريق طوارئ على مدار الساعة.' }
            ]
          }
        ],
        products: [
          { id: 1, code: 'MTI CH 001', name_ar: 'كرسي المسارح الفاخر المبطن', name_en: 'Auditorium Prestige Chair', status: 'published', material: 'Upholstered Fabric / Veneer', mechanism: 'Gravity Tip-Up', absorption: '82%', dimensions: 'W:560 D:740 H:980 mm', img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80' },
          { id: 2, code: 'MTI CH 002', name_ar: 'كرسي القاعات الكلاسيكي', name_en: 'Classic Hall Seating', status: 'published', material: 'High Density Polypropylene', mechanism: 'Damped Spring Tip-Up', absorption: '74%', dimensions: 'W:530 D:690 H:940 mm', img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80' },
          { id: 3, code: 'MTI CH 003', name_ar: 'كرسي المؤتمرات الصوتي', name_en: 'Acoustic Conference Chair', status: 'published', material: 'Sound Absorbing Fabric', mechanism: 'Silent Tip-Up', absorption: '86%', dimensions: 'W:550 D:710 H:960 mm', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80' },
          { id: 4, code: 'MTI CH 004', name_ar: 'كرسي الجامعات والمدرجات', name_en: 'Lecture Hall Ergonomic Chair', status: 'published', material: 'Molded Polypropylene', mechanism: 'Counterweight Tip-Up', absorption: '68%', dimensions: 'W:520 D:670 H:910 mm', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80' },
          { id: 5, code: 'MTI CH 005', name_ar: 'كرسي الأوبرا والمسرح الملكي', name_en: 'Royal Opera Armchair', status: 'published', material: 'Solid Hardwood & Velvet', mechanism: 'Hydro-Dampened', absorption: '85%', dimensions: 'W:580 D:760 H:1020 mm', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80' },
          { id: 6, code: 'MTI CH 006', name_ar: 'كرسي المراكز الثقافية الحديث', name_en: 'Modern Cultural Seating', status: 'published', material: 'Perforated Acoustic Shell', mechanism: 'Double Torsion Spring', absorption: '79%', dimensions: 'W:540 D:700 H:950 mm', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80' },
          { id: 7, code: 'MTI CH 007', name_ar: 'كرسي المؤتمرات مع حامل أقلام', name_en: 'Auditorium Pro Plus', status: 'published', material: 'Cast Polyurethane Foam', mechanism: 'Automatic Tip-Up', absorption: '75%', dimensions: 'W:540 D:710 H:960 mm', img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80' },
          { id: 8, code: 'MTI CH 008', name_ar: 'كرسي القاعات المتراصة', name_en: 'Compact Venue Seating', status: 'published', material: 'Heavy Duty Polymer', mechanism: 'Gravity Self-Closing', absorption: '70%', dimensions: 'W:510 D:650 H:900 mm', img: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80' },
          { id: 9, code: 'MTI CH 009', name_ar: 'كرسي كبار الشخصيات VIP', name_en: 'Executive VIP Theatre Seat', status: 'published', material: 'Top-Grain Leather & Beech', mechanism: 'Ultra-Smooth Hydraulic', absorption: '84%', dimensions: 'W:600 D:780 H:1050 mm', img: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=800&q=80' },
          { id: 10, code: 'MTI CH 010', name_ar: 'كرسي مزود بطاولة كتابة مدمجة', name_en: 'Housing Tablet Auditorium Seat', status: 'published', material: 'Plywood & Heavy Upholstery', mechanism: 'Anti-Panic Tablet + Tip-up', absorption: '80%', dimensions: 'W:560 D:750 H:990 mm', img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80' }
        ],
        telescopicTabs: [
          {
            key: 'safety',
            title_ar: 'Safety (الأمان والسلامة)',
            title_en: 'Safety',
            specs: [
              'نظام Slant Frame المقاوم للإجهاد الديناميكي',
              'أقفال الأمان الآلية Posi-Lock LX لمنع الحركة غير المرغوبة',
              'درابزين حماية يتحمل حتى 240 كجم معتمد وفق معايير CE الأوروبية',
              'نظام تشغيل كهربائي آمن 24V DC مزود بحساسات إيقاف بالأشعة تحت الحمراء'
            ],
            img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80'
          },
          {
            key: 'stability',
            title_ar: 'Stability (الثبات والاستقرار)',
            title_en: 'Stability',
            specs: [
              'عجلات توجيه ثقيلة غير كاشطة للأرضيات (Non-marking wheels)',
              'شدادات تقوية فولاذية Tension Bracing تمنع الاهتزاز والترنح',
              'أعمدة توجيه علوية وسفلية مدمجة Captive Guide Struts',
              'دفع رباعي أمامي 4-Wheel Drive لتحريك الأقسام بتناسق تام'
            ],
            img: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80'
          },
          {
            key: 'installation',
            title_ar: 'Installation (التركيب)',
            title_en: 'Installation',
            specs: [
              'وحدات مثبتة بالحائط (Wall Attached) تدعم حتى 25 صفاً متتالياً',
              'وحدات مستقلة تماماً (Freestanding Units) دون إجهاد للحوائط',
              'وحدات غاطسة داخل تجاويف الحوائط (Recessed Units)',
              'وحدات قابلة للنقل (Portable Units) بواسطة رافعات هيدروليكية'
            ],
            img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
          },
          {
            key: 'seating_options',
            title_ar: 'Seating Options (خيارات المقاعد)',
            title_en: 'Seating Options',
            specs: [
              'مقاعد Vogue: مقاعد مدرجات من البولي إيثيلين عالي الكثافة (بظهر وبدون ظهر)',
              'مقاعد Kook: مقاعد مبطنة قابلة للطي أوتوماتيكياً مع إغلاق المدرج',
              'إمكانية طباعة أرقام الصفوف وشعارات الأندية والمؤسسات',
              'خيارات خاصة بذوي الاحتياجات الخاصة ADA Flex-Row'
            ],
            img: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=800&q=80'
          },
          {
            key: 'accessories',
            title_ar: 'Accessories (الملحقات)',
            title_en: 'Accessories',
            specs: [
              'لوحة تحكم سلكية محمولة Control Pendant ووحدة تحكم لاسلكية Wireless',
              'درجات صعود مانعة للانزلاق مع إضاءة ليد مدمجة Aisle Step Lights',
              'ستائر إغلاق جانبية End Curtains ومساند أذرع ممر قابلة للطي',
              'أنظمة حماية وتأمين كهربائي ضد تذبذب التيار'
            ],
            img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80'
          }
        ],
        optionalFeatures: [
          { title_ar: 'أرقام المقاعد (Seat Numbers)', title_en: 'Seat Numbering', desc_ar: 'ألومنيوم محفور، نحاس مصقول، أو أرقام فسفورية مضيئة في الظلام.', icon: 'i-seat-number' },
          { title_ar: 'علامات الصفوف (Row Markers)', title_en: 'Row Markers & Aisle Light', desc_ar: 'إضاءة ممرات خافتة LED وعلامات صفوف متوافقة مع كود ADA العالمي.', icon: 'i-row-marker' },
          { title_ar: 'طاولات الكتابة المتطورة (Tablets)', title_en: 'Writing Tablet Options', desc_ar: 'طاولات خشبية وبلاستيك ABS مانعة للذعر Anti-Panic تنطوي داخل المسند.', icon: 'i-tablet' },
          { title_ar: 'القواعد المتحركة (Moveable Base)', title_en: 'Moveable Base Collection', desc_ar: 'إمكانية تحريك وتخزين مقاعد القاعات بسهولة على عربات نقل مخصصة.', icon: 'i-moveable' }
        ],
        projects: [
          { id: 1, title_ar: 'قاعة الاحتفالات والمؤتمرات الكبرى', title_en: 'Grand Conference & Opera Hall', sector: 'auditorium', year: '2023', seats: '1,450', img: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=800&q=80' },
          { id: 2, title_ar: 'الصالة الرياضية والمدرجات متعددة الأغراض', title_en: 'Olympic Arena Telescopic Bleachers', sector: 'sports', year: '2024', seats: '2,800', img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80' },
          { id: 3, title_ar: 'مدرج المسرح الجامعي المركزي', title_en: 'Central University Lecture Theatre', sector: 'educational', year: '2023', seats: '850', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80' },
          { id: 4, title_ar: 'مسرح المركز الثقافي الوطني', title_en: 'National Cultural Center Theater', sector: 'auditorium', year: '2022', seats: '1,100', img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80' },
          { id: 5, title_ar: 'صالة الألعاب الرياضية الجامعية', title_en: 'University Sports Gymnasium', sector: 'sports', year: '2024', seats: '1,600', img: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80' },
          { id: 6, title_ar: 'مجمع قاعات التدريب والمؤتمرات', title_en: 'Executive Training Auditoriums', sector: 'educational', year: '2023', seats: '650', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80' }
        ],
        downloads: [
          { title_ar: 'الكتالوج العام الشامل لكراسي القاعات والمسارح (MTI Complete Catalog)', title_en: 'MTI Complete Auditorium Seating Catalog', size: '24.5 MB', type: 'PDF' },
          { title_ar: 'المواصفات الفنية لأنظمة المدرجات القابلة للطي (A-System Telescopic Manual)', title_en: 'A-System Telescopic Seating Technical Manual', size: '14.2 MB', type: 'PDF' },
          { title_ar: 'بيانات الاختبارات الصوتية ونسب الامتصاص المعملية (Acoustic Lab Reports)', title_en: 'Acoustic Performance & Absorption Reports', size: '8.8 MB', type: 'PDF' },
          { title_ar: 'دليل السلامة ومقاومة الحريق واعتمادات BIFMA / CE', title_en: 'Safety & NFPA Fire Compliance Certificate', size: '5.1 MB', type: 'PDF' }
        ],
        socials: {
          facebook: 'https://facebook.com/shoman',
          x: 'https://x.com/shoman', // ADDED AS INSTRUCTED
          instagram: 'https://instagram.com/shoman' // ADDED AS INSTRUCTED
        },
        auditLogs: [
          { timestamp: '2026-10-11 20:30', email: 'admin@shoman.com', action: 'System Initialized', details: 'Loaded default MTI Precision catalog' }
        ]
      };

      // 2. STATE PERSISTENCE ENGINE (localStorage)
      const STORAGE_KEY = 'mti_system_data_v2';
      let state = {};

      function loadState() {
        try {
          const raw = localStorage.getItem(STORAGE_KEY);
          if (raw) {
            const savedState = JSON.parse(raw);
            const renamedState = JSON.stringify(savedState)
              .replace(/mayorkatrade/gi, 'shoman')
              .replace(/mayorka/gi, 'SHOMAN')
              .replace(/trade & investment/gi, 'THEATER & SEATING');
            state = JSON.parse(renamedState);
            if (renamedState !== raw) saveState();
          } else {
            state = JSON.parse(JSON.stringify(DEFAULT_DATA));
            saveState();
          }
        } catch(e) {
          state = JSON.parse(JSON.stringify(DEFAULT_DATA));
        }
      }

      function saveState() {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch(e) {}
      }

      function bindEventById(id, eventName, handler) {
        const element = document.getElementById(id);
        if (element) element.addEventListener(eventName, handler);
      }

      function logAudit(email, action, details) {
        const now = new Date().toISOString().replace('T', ' ').substring(0, 16);
        state.auditLogs.unshift({ timestamp: now, email, action, details });
        saveState();
      }

      loadState();
      state.config.displayedSeatsCount = state.config.seatsBatchSize || DEFAULT_DATA.config.seatsBatchSize;
      let replacedSavedImage = false;
      ['heroSlides', 'products', 'telescopicTabs', 'projects'].forEach(collection => {
        if (!Array.isArray(state[collection])) return;
        state[collection].forEach(item => {
          ['bg', 'img'].forEach(property => {
            if (typeof item[property] === 'string' && item[property].includes(REPLACED_IMAGE_ID)) {
              item[property] = item[property].replace(REPLACED_IMAGE_ID, REPLACEMENT_IMAGE_ID);
              replacedSavedImage = true;
            }
          });
        });
      });
      if (replacedSavedImage) saveState();

      let stateNeedsSave = false;
      if (Array.isArray(state.theaterServices)) {
        state.theaterServices.forEach(service => {
          const icon = THEATER_SERVICE_ICONS[service.id];
          const titleAr = THEATER_SERVICE_TITLES_AR[service.id];
          if (icon && service.icon !== icon) {
            service.icon = icon;
            stateNeedsSave = true;
          }
          if (titleAr && service.title_ar !== titleAr) {
            service.title_ar = titleAr;
            stateNeedsSave = true;
          }
        });
      }
      const firstHeroSlide = Array.isArray(state.heroSlides) && state.heroSlides.find(slide => slide.id === 1);
      if (firstHeroSlide && firstHeroSlide.bg === PREVIOUS_HERO_IMAGE) {
        firstHeroSlide.bg = DEFAULT_HERO_IMAGE;
        stateNeedsSave = true;
      }
      let optionalFeatureIconsChanged = false;
      if (Array.isArray(state.optionalFeatures)) {
        state.optionalFeatures.forEach(feature => {
          const icon = OPTIONAL_FEATURE_ICONS[feature.title_en];
          if (icon && feature.icon !== icon) {
            feature.icon = icon;
            optionalFeatureIconsChanged = true;
          }
        });
      }
      if (stateNeedsSave || optionalFeatureIconsChanged) saveState();

      function getTheaterServiceIconMarkup(serviceId) {
        const icon = THEATER_SERVICE_ICONS[serviceId] || 'i-theater';
        return `<svg class="icon icon-lg" aria-hidden="true"><use href="#${icon}"></use></svg>`;
      }

      // 3. I18N DICTIONARY
      const I18N = {
        ar: {
          nav_home: 'الرئيسية',
          nav_about: 'من نحن',
          nav_theater: 'حلول المسارح',
          nav_theater_title: 'حلول المسارح',
          nav_seats: 'المقاعد والقاعات',
          nav_telescopic: 'المدرجات المتحركة',
          nav_options: 'الخيارات الإضافية',
          nav_projects: 'مشاريعنا',
          nav_downloads: 'التحميلات',
          nav_contact: 'تواصل معنا',
          about_eyebrow: '02 · من نحن ورؤيتنا',
          about_title: 'الهندسة المعمارية الدقيقة وحلول المسارح المتكاملة',
          about_story: 'تأسست شركة SHOMAN في فبراير 2009 على يد نخبة من كبار مهندسي واستشاريي الصوتيات والمرئيات. على مدار أكثر من 15 عاماً، رسخت الشركة ريادتها في تزويد أرقى المسارح والقاعات الكبرى والاستادات الرياضية في مصر والمملكة العربية السعودية بحلول معمارية ميكانيكية دقيقة معتمدة دولياً.',
          about_scope_title: 'من الفكرة إلى المساحة الجاهزة للتشغيل',
          about_scope_desc: 'تجمع MTI بين التصميم المعماري للمسرح وتجهيز أنظمة الصوت والإضاءة والمرئيات والميكانيزم. وتشمل خبرة الفريق تنسيق أعمال المسارح التعليمية والقاعات متعددة الاستخدام في مصر والسعودية، من تحديد الاحتياجات إلى تكامل الأنظمة.',
          feat_1_title: 'دقة تصنيع واعتمادات دولية',
          feat_1_desc: 'مطابقة لأعلى معايير BIFMA وCE وNFPA للسلامة والأمان ومقاومة الحريق.',
          feat_2_title: 'امتصاص صوتي متطور',
          feat_2_desc: 'اختبارات معملية موثقة بنسب امتصاص صوتي تصل إلى 86% لضمان نقاء الأداء الصوتي.',
          theater_eyebrow: '03 · خدمات متكاملة',
          theater_title: 'حلول تجهيز المسارح وقاعات المؤتمرات',
          theater_desc: 'نقدم حلاً هندسياً شاملاً يبدأ من دراسة التصميم الصوتي والمعماري وحتى تجهيز أحدث أنظمة الإضاءة والميكانيزم والشاشات وباقات الصيانة السنوية.',
          theater_process_eyebrow: 'منهجية التنفيذ',
          theater_process_title: 'تنسيق هندسي متكامل لكل مرحلة',
          theater_process_desc: 'تتحول فكرة المساحة إلى تجربة أداء متكاملة عبر مراحل مترابطة تبدأ بالدراسة والتصميم، ثم توريد الأنظمة ودمجها، وتنتهي بالتركيب والاختبار.',
          theater_process_design_title: 'التصميم والرسومات التنفيذية',
          theater_process_design_desc: 'تحديد متطلبات القاعة وإعداد التصور المعماري والرسومات وحصر نطاق الأعمال بما يلائم طبيعة الاستخدام.',
          theater_process_integration_title: 'التوريد وتكامل الأنظمة',
          theater_process_integration_desc: 'مواءمة الصوت والإضاءة والشاشات والميكانيزم والمعالجة الصوتية ضمن منظومة واحدة متناسقة.',
          theater_process_handover_title: 'التركيب والتشغيل والصيانة',
          theater_process_handover_desc: 'تنفيذ الأعمال واختبار عناصر النظام قبل التسليم، مع إمكانية تنظيم خدمات الرعاية والصيانة الدورية.',
          seats_eyebrow: '04 · PERFOMER COLLECTION',
          seats_title: 'كراسي القاعات والمسارح (Auditorium Seating)',
          seats_desc: 'تصاميم معمارية فائقة الراحة والتحمل مزودة بآليات Tip-up ذاتية الرفع وخيارات عزل صوتي متطورة.',
          telescopic_eyebrow: '05 · A-SYSTEM TELESCOPIC',
          telescopic_title: 'أنظمة المدرجات القابلة للطي',
          telescopic_desc: 'حلول مرنة ومبتكرة للمساحات متعددة الأغراض والصالات الرياضية والمدرجات الجامعية، مع أعلى تصنيفات الأمان والتحمل الهندسي.',
          telescopic_flexibility_title: 'استغلال مرن للمساحة',
          telescopic_flexibility_desc: 'تُفتح المدرجات عند الحاجة إلى المقاعد وتُطوى لتوفير مساحة أرضية أكبر للاستخدامات الأخرى.',
          telescopic_setup_title: 'تركيب وتشغيل ميسّران',
          telescopic_setup_desc: 'تُختار طريقة التثبيت ووحدات التحكم وفق تصميم الموقع لتبسيط تجهيز القاعة وإعادة ترتيبها.',
          telescopic_access_title: 'حركة دخول وخروج أوضح',
          telescopic_access_desc: 'تساعد حلول الممرات والدرجات والملحقات على تنظيم الوصول إلى المقاعد وحركة الجمهور.',
          options_eyebrow: '06 · الخيارات المخصصة',
          options_title: 'الميزات الإضافية وأنواع الطاولات',
          options_desc: 'تجهيزات هندسية دقيقة من ترقيم المقاعد وصفحات الملاحظات وطاولات الكتابة المتطورة (Stowed / Housing / Anti-Panic).',
          projects_eyebrow: '07 · سجل الإنجازات',
          projects_title: 'معرض المشاريع',
          projects_desc: 'استكشف نماذج من مساحات الأداء التي تخدمها حلول MTI، من قاعات المؤتمرات والمسارح إلى المنشآت الرياضية والتعليمية، مع تصفية المعرض حسب نوع المشروع.',
          downloads_eyebrow: '08 · التحميلات والملفات الفنية',
          downloads_title: 'الكتالوجات وبيانات المواصفات الهندسية',
          contact_eyebrow: '09 · قنوات التواصل',
          contact_title: 'تواصل مباشرة مع مكاتبنا في مصر والسعودية',
          btn_contact_us: 'تواصل مع فرعك الأقرب',
          btn_more_details: 'المزيد من التفاصيل',
          btn_view_details: 'عرض المواصفات الفنية',
          btn_load_more: 'عرض المزيد من المقاعد',
          btn_load_less: 'عرض مقاعد أقل (العودة للبداية)',
          filter_all: 'جميع المشاريع',
          filter_auditorium: 'المسارح والقاعات',
          filter_sports: 'الصالات الرياضية',
          filter_educational: 'الجامعات والمدارس',
          footer_about_text: 'الرواد في هندسة كراسي القاعات والمسارح والمدرجات المتحركة المعتمدة في الشرق الأوسط ومصر والخليج منذ 2009.',
          footer_col2_title: 'روابط الأقسام',
          footer_col3_title: 'حلول المسارح',
          footer_col4_title: 'راسلنا مباشرة',
          footer_mail_text: 'للاستشارات الفنية والمواصفات المعمارية وطلبات التوريد والمشاريع:',
          legal_privacy: 'سياسة الخصوصية',
          legal_terms: 'الشروط والأحكام',
          lang_switch_label: 'اللغة / Language'
        },
        en: {
          nav_home: 'Home',
          nav_about: 'About Us',
          nav_theater: 'Theater Solutions',
          nav_theater_title: 'Theater Solutions',
          nav_seats: 'Seating & Halls',
          nav_telescopic: 'Telescopic Bleachers',
          nav_options: 'Optional Features',
          nav_projects: 'Our Projects',
          nav_downloads: 'Downloads',
          nav_contact: 'Contact Us',
          about_eyebrow: '02 · ABOUT MTI & VISION',
          about_title: 'Architectural Precision & Complete Theater Solutions',
          about_story: 'Founded in February 2009 by leading audio-visual and acoustic engineers, SHOMAN has established authoritative leadership supplying tier-one auditoriums, opera houses, and stadiums across Egypt and Saudi Arabia.',
          about_scope_title: 'From the initial idea to a venue ready for operation',
          about_scope_desc: 'MTI brings theater architecture together with audio, lighting, visual, and stage-mechanism systems. The team coordinates educational theaters and multi-purpose venues in Egypt and Saudi Arabia, from defining requirements through system integration.',
          feat_1_title: 'International Certifications',
          feat_1_desc: 'Full compliance with BIFMA, CE, and NFPA standards for structural durability and fire resistance.',
          feat_2_title: 'Superior Acoustic Absorption',
          feat_2_desc: 'Certified laboratory testing documenting acoustic absorption ratings up to 86% for pure sonic clarity.',
          theater_eyebrow: '03 · COMPLETE SERVICES',
          theater_title: 'Comprehensive Theater & Auditorium Engineering',
          theater_desc: 'Turnkey architectural planning from acoustic modeling to state-of-the-art DMX stage lighting, mechanics, video walls, and maintenance care.',
          theater_process_eyebrow: 'DELIVERY APPROACH',
          theater_process_title: 'Engineering coordination at every stage',
          theater_process_desc: 'A performance-space concept becomes a complete venue through connected stages: planning and design, coordinated equipment supply, then installation and testing.',
          theater_process_design_title: 'Design & execution drawings',
          theater_process_design_desc: 'Define venue requirements, develop the architectural concept, and coordinate drawings and work scopes around the intended use.',
          theater_process_integration_title: 'Supply & system integration',
          theater_process_integration_desc: 'Coordinate audio, lighting, visual systems, stage mechanics, and acoustic treatment as one cohesive installation.',
          theater_process_handover_title: 'Installation, commissioning & care',
          theater_process_handover_desc: 'Install and test the systems before handover, with options for ongoing preventative care and maintenance.',
          seats_eyebrow: '04 · PERFORMER COLLECTION',
          seats_title: 'Auditorium & Theater Seating Systems',
          seats_desc: 'High-comfort architectural seating with automatic counterweight tip-up mechanisms and custom acoustic specifications.',
          telescopic_eyebrow: '05 · A-SYSTEM TELESCOPIC',
          telescopic_title: 'Retractable Telescopic Seating Platforms',
          telescopic_desc: 'Modular motorized bleacher solutions for multi-purpose stadiums, universities, and gymnasiums with supreme structural load ratings.',
          telescopic_flexibility_title: 'Flexible use of floor space',
          telescopic_flexibility_desc: 'Extend the seating when an event needs it, then retract the platforms to free floor space for other uses.',
          telescopic_setup_title: 'Straightforward setup and operation',
          telescopic_setup_desc: 'Choose mounting and control arrangements to suit the venue layout and simplify room reconfiguration.',
          telescopic_access_title: 'Clearer audience circulation',
          telescopic_access_desc: 'Aisles, steps, and accessory options help organize access to seating and audience movement.',
          options_eyebrow: '06 · CUSTOM SPECIFICATIONS',
          options_title: 'Optional Accessories & Tablet Systems',
          options_desc: 'Machined seat numbering, ADA row lights, and stowed or anti-panic writing tablets built for high-demand usage.',
          projects_eyebrow: '07 · TRACK RECORD',
          projects_title: 'Projects Portfolio & Case Studies',
          projects_desc: 'Explore examples of performance spaces served by MTI solutions, from conference halls and theaters to sports and educational venues. Filter the gallery by project type.',
          downloads_eyebrow: '08 · SPEC SHEETS & MANUALS',
          downloads_title: 'Technical Catalogs & Engineering Submittals',
          contact_eyebrow: '09 · REACH OUR HUBS',
          contact_title: 'Connect with Our Regional Offices in Cairo & Riyadh',
          btn_contact_us: 'Contact Your Nearest Branch',
          btn_more_details: 'MORE DETAILS',
          btn_view_details: 'VIEW SPEC SHEET',
          btn_load_more: 'LOAD MORE SEATS',
          btn_load_less: 'LOAD LESS SEATS',
          filter_all: 'All Projects',
          filter_auditorium: 'Auditoriums & Operas',
          filter_sports: 'Sports Arenas',
          filter_educational: 'Universities & Schools',
          footer_about_text: 'Leaders in certified auditorium seating, telescopic platforms, and stage engineering in Egypt and Saudi Arabia since 2009.',
          footer_col2_title: 'Navigation',
          footer_col3_title: 'Theater Services',
          footer_col4_title: 'Direct Inquiries',
          footer_mail_text: 'For architectural tender specifications, catalog submittals, and quotation requests:',
          legal_privacy: 'Privacy Policy',
          legal_terms: 'Terms & Conditions',
          lang_switch_label: 'Language / اللغة'
        }
      };

      // 4. ROUTER & ADMIN AUTHENTICATION
      let authSession = localStorage.getItem('mti_admin_session_token');
      let failedLoginAttempts = 0;

      function handleRouting() {
        const hash = window.location.hash;
        const path = window.location.pathname;
        const isAdminRoute = hash === '#/admin' || hash === '#admin' || path === '/admin';
        const publicApp = document.getElementById('public-app');
        const adminApp = document.getElementById('admin-app');
        if (!publicApp || !adminApp) return;

        if (isAdminRoute) {
          publicApp.style.display = 'none';
          adminApp.classList.add('active');

          // Ensure noindex meta
          let metaRobots = document.querySelector('meta[name="robots"]');
          if (!metaRobots) {
            metaRobots = document.createElement('meta');
            metaRobots.name = 'robots';
            document.head.appendChild(metaRobots);
          }
          metaRobots.content = 'noindex, nofollow';

          if (authSession) {
            // Already logged in
            showAdminDashboard();
          } else {
            showAdminLogin();
          }
        } else {
          publicApp.style.display = 'block';
          adminApp.classList.remove('active');
        }
      }

      function showAdminLogin() {
        document.getElementById('admin-login-view').classList.add('active');
        document.getElementById('admin-dashboard-view').classList.remove('active');
        document.getElementById('admin-404-view').classList.remove('active');
      }

      function showAdmin404() {
        document.getElementById('admin-404-view').classList.add('active');
        document.getElementById('admin-login-view').classList.remove('active');
        document.getElementById('admin-dashboard-view').classList.remove('active');
      }

      function showAdminDashboard() {
        document.getElementById('admin-dashboard-view').classList.add('active');
        document.getElementById('admin-login-view').classList.remove('active');
        document.getElementById('admin-404-view').classList.remove('active');
        renderAdminModule('dashboard-home');
      }

      // Login form handler
      bindEventById('admin-login-form', 'submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('admin-email-input').value.trim();
        const pass = document.getElementById('admin-password-input').value.trim();

        if (failedLoginAttempts >= 5) {
          showAdmin404();
          return;
        }

        const validAdmin = state.admins.find(a => a.email.toLowerCase() === email.toLowerCase() && a.pass === pass && a.status === 'active');

        if (validAdmin) {
          failedLoginAttempts = 0;
          authSession = 'mti_session_' + Date.now();
          localStorage.setItem('mti_admin_session_token', authSession);
          localStorage.setItem('mti_admin_user_email', validAdmin.email);
          validAdmin.lastLogin = new Date().toISOString().replace('T', ' ').substring(0, 16);
          saveState();
          logAudit(validAdmin.email, 'Admin Login', 'Successful authentication');
          showAdminDashboard();
          showToast('تم تسجيل الدخول بنجاح');
        } else {
          failedLoginAttempts++;
          // UNIFIED 404 BEHAVIOR AS REQUIRED: Show 404 with zero error hint!
          showAdmin404();
        }
      });

      bindEventById('admin-404-back-btn', 'click', function() {
        window.location.hash = '#home';
        handleRouting();
      });

      bindEventById('admin-logout-btn', 'click', function() {
        const user = localStorage.getItem('mti_admin_user_email') || 'admin';
        logAudit(user, 'Admin Logout', 'Terminated session');
        authSession = null;
        localStorage.removeItem('mti_admin_session_token');
        localStorage.removeItem('mti_admin_user_email');
        showAdminLogin();
        showToast('تم تسجيل الخروج بنجاح');
      });

      window.addEventListener('hashchange', handleRouting);

      // 5. RENDERING PUBLIC SITE
      function renderPublicSite() {
        const lang = state.config.currentLang;
        const isRtl = lang === 'ar';
        document.documentElement.lang = lang;
        document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
        // Update kinetic vertical sliding state on all language switcher buttons
        const targetLang = isRtl ? 'en' : 'ar';
        document.querySelectorAll('.lang-btn').forEach(btn => {
          btn.setAttribute('data-target-lang', targetLang);
          btn.setAttribute('aria-label', isRtl ? 'Switch to English' : 'التحويل للغة العربية');
        });

        // Update i18n text tags
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          if (I18N[lang] && I18N[lang][key]) {
            el.textContent = I18N[lang][key];
          }
        });

        renderHeaderDropdown();
        renderHeroSlider();
        renderTrustMetrics();
        renderBranchesAbout();
        renderTheaterServices();
        renderProductsGrid();
        renderTelescopicTabs();
        renderOptionalFeatures();
        renderProjectsGallery();
        renderDownloadsList();
        renderContactBranches();
        renderFooter();
        setupScrollReveal();
        updateAboutTimeline();
        if (typeof updateNavIndicator === 'function') setTimeout(updateNavIndicator, 100);
      }

      function updateAboutTimeline() {
        const track = document.querySelector('#about.about-timeline-page .about-timeline-track');
        if (!track) return;

        const rect = track.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight * 0.7 - rect.top) / rect.height));
        track.style.setProperty('--timeline-progress', `${progress * 100}%`);
      }

      // Header Dropdown (6 services)
      function renderHeaderDropdown() {
        const lang = state.config.currentLang;
        const container = document.getElementById('header-dropdown-menu');
        const toggleBtn = document.getElementById('theater-dropdown-toggle');
        if (!container) return;
        container.setAttribute('aria-label', lang === 'ar' ? 'حلول المسارح' : 'Theater solutions');

        const groups = lang === 'ar'
          ? [
              { title: 'الهندسة والتصميم', services: ['architecture-design', 'mechanism'] },
              { title: 'الأنظمة التقنية', services: ['pro-audio', 'pro-lighting', 'visual-effects'] },
              { title: 'الدعم والرعاية', services: ['annual-care-packages'] }
            ]
          : [
              { title: 'Engineering & Design', services: ['architecture-design', 'mechanism'] },
              { title: 'Technical Systems', services: ['pro-audio', 'pro-lighting', 'visual-effects'] },
              { title: 'Support & Care', services: ['annual-care-packages'] }
            ];

        container.innerHTML = groups.map((group, groupIndex) => `
          <section class="dropdown-group" aria-labelledby="dropdown-group-title-${groupIndex}">
            <h2 class="dropdown-group-title" id="dropdown-group-title-${groupIndex}">${group.title}</h2>
            <div class="dropdown-group-items">
              ${group.services.map(serviceId => {
                const srv = state.theaterServices.find(service => service.id === serviceId);
                if (!srv) return '';
                const description = THEATER_SERVICE_MENU_DESCRIPTIONS[srv.id];
                return `
                  <a href="theater-solutions.html#srv-card-${srv.id}" class="dropdown-link" data-service-id="${srv.id}" role="menuitem" tabindex="-1">
                    <span class="dropdown-icon">${getTheaterServiceIconMarkup(srv.id)}</span>
                    <span class="dropdown-link-copy">
                      <span class="dropdown-link-title">${lang === 'ar' ? srv.title_ar : srv.title_en}</span>
                      <span class="dropdown-link-description">${description ? description[lang] : (lang === 'ar' ? srv.short_ar : srv.short_en)}</span>
                    </span>
                  </a>
                `;
              }).join('')}
            </div>
          </section>
        `).join('');

        setupHeaderDropdownEvents();
      }

      let dropdownEventsAttached = false;
      function setupHeaderDropdownEvents() {
        if (dropdownEventsAttached) return;
        dropdownEventsAttached = true;

        const dropdownItem = document.getElementById('theater-nav-dropdown-item');
        const toggleBtn = document.getElementById('theater-dropdown-toggle');
        const dropdownMenu = document.getElementById('header-dropdown-menu');
        if (!dropdownItem || !toggleBtn || !dropdownMenu) return;

        let enterTimer = null;
        let leaveTimer = null;

        dropdownItem.addEventListener('mouseenter', () => {
          clearTimeout(leaveTimer);
          enterTimer = setTimeout(() => {
            dropdownMenu.classList.add('active');
            toggleBtn.setAttribute('aria-expanded', 'true');
          }, 120);
        });

        dropdownItem.addEventListener('mouseleave', () => {
          clearTimeout(enterTimer);
          leaveTimer = setTimeout(() => {
            dropdownMenu.classList.remove('active');
            toggleBtn.setAttribute('aria-expanded', 'false');
          }, 200);
        });

        toggleBtn.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
            e.preventDefault();
            dropdownMenu.classList.add('active');
            toggleBtn.setAttribute('aria-expanded', 'true');
            const firstLink = dropdownMenu.querySelector('.dropdown-link');
            if (firstLink) firstLink.focus();
          } else if (e.key === 'Escape') {
            dropdownMenu.classList.remove('active');
            toggleBtn.setAttribute('aria-expanded', 'false');
          }
        });

        dropdownMenu.addEventListener('keydown', (e) => {
          const links = Array.from(dropdownMenu.querySelectorAll('.dropdown-link'));
          const currentIndex = links.indexOf(document.activeElement);
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % links.length;
            links[nextIndex].focus();
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = (currentIndex - 1 + links.length) % links.length;
            links[prevIndex].focus();
          } else if (e.key === 'Escape') {
            e.preventDefault();
            dropdownMenu.classList.remove('active');
            toggleBtn.setAttribute('aria-expanded', 'false');
            toggleBtn.focus();
          }
        });
      }

      // Hero Slider Controller
      let currentHeroIndex = 0;
      let heroTimer = null;
      let heroTransitionTimer = null;
      let isHeroPaused = false;
      const HERO_AUTOPLAY_INTERVAL = 5000;

      function renderHeroSlider() {
        const lang = state.config.currentLang;
        const container = document.getElementById('hero-slider-container');
        const progressBox = document.getElementById('hero-progress-container');
        if (!container || !progressBox) return;

        container.innerHTML = state.heroSlides.map((slide, idx) => `
          <div class="hero-slide ${idx === currentHeroIndex ? 'active' : ''}" data-index="${idx}">
            <div class="hero-slide-bg" style="background-image: url('${slide.bg}')"></div>
            <div class="hero-overlay"></div>
            <div class="container hero-content">
              <div class="hero-badge">${lang === 'ar' ? slide.badge_ar : slide.badge_en}</div>
              <h1 class="hero-title">${lang === 'ar' ? slide.title_ar : slide.title_en}</h1>
              <p class="hero-desc">${lang === 'ar' ? slide.desc_ar : slide.desc_en}</p>
              <div class="hero-actions">
                <a href="seats.html" class="btn btn-primary">
                  <span>${lang === 'ar' ? 'استكشف المقاعد' : 'Explore Seating'}</span>
                  <svg class="hero-cta-arrow icon-flip-rtl" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="theater-solutions.html" class="btn btn-secondary btn-hero-secondary">
                  <span>${lang === 'ar' ? 'حلول المسارح' : 'Theater Engineering'}</span>
                </a>
              </div>
            </div>
          </div>
        `).join('');

        progressBox.innerHTML = state.heroSlides.map((_, idx) => `
          <div class="progress-bar-slot" data-index="${idx}">
            <div class="progress-bar-fill" id="p-fill-${idx}"></div>
          </div>
        `).join('');

        progressBox.querySelectorAll('.progress-bar-slot').forEach(slot => {
          slot.addEventListener('click', () => {
            goToSlide(parseInt(slot.getAttribute('data-index')));
          });
        });

        const totalEl = document.getElementById('hero-total-count');
        if (totalEl) totalEl.textContent = String(state.heroSlides.length).padStart(2, '0');
        startHeroAutoplay();
        scheduleHeroContentMotion();
      }

      let heroContentMotionFrame = 0;
      let containerScrollMotionFrame = 0;
      let containerScrollTargets = [];

      function scheduleContainerScrollMotion() {
        if (prefersReducedMotion || containerScrollMotionFrame) return;

        containerScrollMotionFrame = requestAnimationFrame(() => {
          containerScrollMotionFrame = 0;
          if (!containerScrollTargets.length) {
            containerScrollTargets = Array.from(document.querySelectorAll(
              '#public-app > section:not(#home) > .container, #home .trust-strip > .container'
            ));
            containerScrollTargets.forEach(container => container.classList.add('container-scroll-target'));
          }

          const viewportCenter = window.innerHeight / 2;
          const maxDistance = Math.max(1, window.innerHeight * 0.85);
          containerScrollTargets.forEach(container => {
            const rect = container.getBoundingClientRect();
            const centerOffset = (rect.top + rect.height / 2 - viewportCenter) / maxDistance;
            const progress = Math.max(-1, Math.min(1, centerOffset));
            container.style.setProperty('--container-scroll-rotate', `${progress * 5}deg`);
            container.style.setProperty('--container-scroll-scale', `${1 - Math.abs(progress) * 0.025}`);
            container.style.setProperty('--container-scroll-translate', `${progress * 10}px`);
          });
        });
      }

      function scheduleHeroContentMotion() {
        if (prefersReducedMotion || heroContentMotionFrame) return;

        heroContentMotionFrame = requestAnimationFrame(() => {
          heroContentMotionFrame = 0;
          const hero = document.getElementById('home');
          if (!hero) return;

          const rect = hero.getBoundingClientRect();
          const heroTop = rect.top + window.scrollY;
          const start = Math.max(0, heroTop - window.innerHeight * 0.08);
          const progress = Math.max(0, Math.min(1, (window.scrollY - start) / (hero.offsetHeight * 0.72)));
          const direction = document.documentElement.dir === 'rtl' ? -1 : 1;
          const maxDistance = Math.min(window.innerWidth * 0.12, 110);
          const offsets = [
            ['.hero-badge', -0.62],
            ['.hero-title', 0.9],
            ['.hero-desc', -0.48],
            ['.hero-actions', 0.68]
          ];

          offsets.forEach(([selector, multiplier]) => {
            hero.querySelectorAll(selector).forEach(element => {
              element.style.setProperty('--hero-scroll-x', `${direction * progress * maxDistance * multiplier}px`);
            });
          });
        });
      }

      function goToSlide(idx) {
        const slideCount = state.heroSlides.length;
        const nextIndex = (idx + slideCount) % slideCount;
        if (nextIndex !== currentHeroIndex) {
          const movingForward = idx > currentHeroIndex;
          const isRtl = document.documentElement.dir === 'rtl';
          const exitX = movingForward
            ? (isRtl ? '100%' : '-100%')
            : (isRtl ? '-100%' : '100%');
          const slides = Array.from(document.querySelectorAll('.hero-slide'));
          const outgoingSlide = slides[currentHeroIndex];
          const incomingSlide = slides[nextIndex];
          if (!outgoingSlide || !incomingSlide) return;

          if (heroTransitionTimer) clearTimeout(heroTransitionTimer);
          slides.forEach(slide => slide.classList.remove('is-exiting', 'is-entering'));
          outgoingSlide.classList.remove('active');
          outgoingSlide.style.setProperty('--hero-slide-hidden-x', exitX);
          outgoingSlide.style.setProperty('--hero-slide-exit-x', exitX);
          outgoingSlide.classList.add('is-exiting');

          incomingSlide.style.setProperty('--hero-slide-enter-x', exitX === '100%' ? '-100%' : '100%');
          incomingSlide.classList.add('is-entering');
          incomingSlide.getBoundingClientRect();
          incomingSlide.classList.remove('is-entering');
          incomingSlide.classList.add('active');

          currentHeroIndex = nextIndex;
          heroTransitionTimer = setTimeout(() => {
            outgoingSlide.classList.remove('is-exiting');
            outgoingSlide.style.removeProperty('--hero-slide-exit-x');
            incomingSlide.style.removeProperty('--hero-slide-enter-x');
            heroTransitionTimer = null;
          }, 1600);
        }

        const activeIdxEl = document.getElementById('hero-active-index');
        if (activeIdxEl) activeIdxEl.textContent = String(currentHeroIndex + 1).padStart(2, '0');

        // Reset and trigger progress bar
        state.heroSlides.forEach((_, i) => {
          const fill = document.getElementById('p-fill-' + i);
          if (fill) {
            fill.style.transition = 'none';
            fill.style.width = i === currentHeroIndex ? '0%' : '0%';
          }
        });

        requestAnimationFrame(() => {
          const activeFill = document.getElementById('p-fill-' + currentHeroIndex);
          if (activeFill && !isHeroPaused) {
            activeFill.style.transition = `width ${HERO_AUTOPLAY_INTERVAL}ms linear`;
            activeFill.style.width = '100%';
          }
        });
      }

      function startHeroAutoplay() {
        if (heroTimer) clearInterval(heroTimer);
        goToSlide(currentHeroIndex);

        heroTimer = setInterval(() => {
          if (!isHeroPaused) {
            goToSlide(currentHeroIndex + 1);
          }
        }, HERO_AUTOPLAY_INTERVAL);
      }

      const heroContainer = document.getElementById('home');
      if (heroContainer) {
        heroContainer.addEventListener('mouseenter', () => { isHeroPaused = true; });
        heroContainer.addEventListener('mouseleave', () => { isHeroPaused = false; });
        heroContainer.addEventListener('focusin', () => { isHeroPaused = true; });
        heroContainer.addEventListener('focusout', () => { isHeroPaused = false; });
      }
      document.addEventListener('visibilitychange', () => {
        isHeroPaused = document.hidden;
      });

      const heroPrevBtn = document.getElementById('hero-prev-btn');
      if (heroPrevBtn) heroPrevBtn.addEventListener('click', () => goToSlide(currentHeroIndex - 1));
      const heroNextBtn = document.getElementById('hero-next-btn');
      if (heroNextBtn) heroNextBtn.addEventListener('click', () => goToSlide(currentHeroIndex + 1));

      // Trust Metrics
      function renderTrustMetrics() {
        const lang = state.config.currentLang;
        const grid = document.getElementById('trust-metrics-grid');
        if (!grid) return;
        grid.innerHTML = state.trustMetrics.map(m => `
          <div class="trust-item reveal-elem">
            <div class="trust-val" data-target="${m.val}">${m.val}${m.suffix}</div>
            <div class="trust-label">${lang === 'ar' ? m.label_ar : m.label_en}</div>
          </div>
        `).join('');
      }

      // About Branches
      function renderBranchesAbout() {
        const lang = state.config.currentLang;
        const box = document.getElementById('about-branches-box');
        if (!box) return;
        box.innerHTML = state.branches.map(b => `
          <div class="branch-card">
            <div class="branch-badge">${lang === 'ar' ? b.country_ar : b.country_en}</div>
            <h3 class="branch-title">${b.id === 'cairo' ? (lang === 'ar' ? 'فرع القاهرة (المقر الرئيسي)' : 'Cairo Hub (HQ)') : (lang === 'ar' ? 'فرع الرياض' : 'Riyadh Hub')}</h3>
            <div class="branch-info-row">
              <svg class="icon icon-sm"><use href="#i-pin"></use></svg>
              <span>${lang === 'ar' ? b.address_ar : b.address_en}</span>
            </div>
            <div class="branch-info-row">
              <svg class="icon icon-sm"><use href="#i-phone"></use></svg>
              <span>${b.phones.join(' / ')}</span>
            </div>
            <div class="branch-info-row">
              <svg class="icon icon-sm"><use href="#i-mail"></use></svg>
              <span>${b.email}</span>
            </div>
          </div>
        `).join('');
      }

      // Theater Services (6 blocks)
      function renderTheaterServices() {
        const lang = state.config.currentLang;
        const grid = document.getElementById('theater-services-grid');
        if (!grid) return;
        grid.innerHTML = state.theaterServices.map(srv => `
          <div class="theater-card reveal-elem" id="srv-card-${srv.id}">
            <div>
              <div class="theater-icon-box">${getTheaterServiceIconMarkup(srv.id)}</div>
              <h3 class="theater-card-title">${lang === 'ar' ? srv.title_ar : srv.title_en}</h3>
              <p class="theater-card-desc">${lang === 'ar' ? srv.short_ar : srv.short_en}</p>
            </div>
            <button class="theater-details-link" onclick="window.openServiceDrawer('${srv.id}')">
              <span>${lang === 'ar' ? 'المزيد من التفاصيل' : 'MORE DETAILS'}</span>
            </button>
          </div>
        `).join('');
      }

      // Products (Seats CH 001 - 010)
      function renderProductsGrid() {
        const lang = state.config.currentLang;
        const grid = document.getElementById('products-cards-grid');
        if (!grid) return;
        const displayed = state.products.slice(0, state.config.displayedSeatsCount);

        grid.innerHTML = displayed.map(prod => `
          <div class="product-card reveal-elem" id="prod-card-${prod.id}">
            <div class="product-img-wrap">
              <img src="${prod.img}" alt="${prod.code}" class="product-img" loading="lazy">
            </div>
            <div class="product-body">
              <div>
                <div class="product-code">${prod.code}</div>
                <div class="product-name">${lang === 'ar' ? prod.name_ar : prod.name_en}</div>
              </div>
              <div class="product-specs-matrix">
                <div class="product-spec-row">
                  <span>${lang === 'ar' ? 'الخامة' : 'Material'}:</span>
                  <span>${prod.material.split('/')[0]}</span>
                </div>
                <div class="product-spec-row">
                  <span>${lang === 'ar' ? 'الامتصاص' : 'Absorption'}:</span>
                  <span>${prod.absorption}</span>
                </div>
              </div>
              <div class="product-footer-action">
                <button class="product-btn" onclick="window.openProductDrawer(${prod.id})">
                  <span>${lang === 'ar' ? 'عرض المواصفات' : 'VIEW DETAILS'}</span>
                </button>
              </div>
            </div>
          </div>
        `).join('');
        grid.querySelectorAll('.product-img').forEach(img => {
          const revealImage = () => img.classList.add('is-loaded');
          img.addEventListener('load', revealImage, { once: true });
          img.addEventListener('error', revealImage, { once: true });
          if (img.complete) requestAnimationFrame(revealImage);
        });
        setupScrollReveal(grid);

        // Toggle button between Load More and Load Less
        const btn = document.getElementById('load-more-seats-btn');
        const btnText = document.getElementById('load-more-btn-text');
        if (!btn || !btnText) return;
        const arrowPath = btn.querySelector('svg path');
        if (state.config.displayedSeatsCount >= state.products.length) {
          btnText.textContent = lang === 'ar' ? I18N.ar.btn_load_less : I18N.en.btn_load_less;
          if (arrowPath) arrowPath.setAttribute('d', 'M12 19V5M5 12l7-7 7 7');
          btn.onclick = () => {
            state.config.displayedSeatsCount = state.config.seatsBatchSize || 4;
            renderProductsGrid();
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
          };
        } else {
          btnText.textContent = lang === 'ar' ? I18N.ar.btn_load_more : I18N.en.btn_load_more;
          if (arrowPath) arrowPath.setAttribute('d', 'M12 5v14M5 12l7 7 7-7');
          btn.onclick = () => {
            state.config.displayedSeatsCount = Math.min(state.products.length, state.config.displayedSeatsCount + (state.config.seatsBatchSize || 4));
            renderProductsGrid();
          };
        }
      }

      // Telescopic Tabs: NO "View our projects" button as requested!
      let activeTelescopicTab = 'safety';
      function renderTelescopicTabs(transitionDirection = '') {
        const lang = state.config.currentLang;
        const nav = document.getElementById('telescopic-tabs-header');
        const container = document.getElementById('telescopic-panes-container');
        if (!nav || !container) return;

        nav.innerHTML = state.telescopicTabs.map(t => `
          <button class="tab-btn ${t.key === activeTelescopicTab ? 'active' : ''}" onclick="window.switchTelescopicTab('${t.key}')">
            ${lang === 'ar' ? t.title_ar : t.title_en}
          </button>
        `).join('');

        const currentTab = state.telescopicTabs.find(t => t.key === activeTelescopicTab) || state.telescopicTabs[0];

        container.innerHTML = `
          <div class="tab-pane active ${transitionDirection ? `telescopic-enter-${transitionDirection}` : ''}">
            <div class="telescopic-panel-copy">
              <h3 style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 800; color: var(--navy-900); margin-bottom: 1.5rem;">
                ${lang === 'ar' ? currentTab.title_ar : currentTab.title_en}
              </h3>
              <div class="tab-spec-list">
                ${currentTab.specs.map(s => `
                  <div class="tab-spec-item">
                    <div class="tab-spec-bullet"></div>
                    <div style="font-size: 1.05rem; color: var(--carbon-700); line-height: 1.7;">${s}</div>
                  </div>
                `).join('')}
              </div>
              <div style="margin-top: 2.5rem;">
                <!-- NOTE: "View our projects" button REMOVED from this section as explicitly required! -->
                <a href="contact.html" class="btn btn-primary">
                  <span data-i18n="btn_contact_us">${lang === 'ar' ? 'طلب مواصفة المدرجات' : 'Request Bleachers Submittal'}</span>
                </a>
              </div>
            </div>
            <div class="telescopic-panel-media">
              <img src="${currentTab.img}" alt="${lang === 'ar' ? currentTab.title_ar : currentTab.title_en}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
          </div>
        `;
      }

      window.switchTelescopicTab = function(key) {
        const currentIndex = state.telescopicTabs.findIndex(tab => tab.key === activeTelescopicTab);
        const nextIndex = state.telescopicTabs.findIndex(tab => tab.key === key);
        if (nextIndex < 0 || nextIndex === currentIndex) return;

        const direction = nextIndex > currentIndex ? 'next' : 'previous';
        activeTelescopicTab = key;
        renderTelescopicTabs(direction);
      };

      // Optional Features
      function renderOptionalFeatures() {
        const lang = state.config.currentLang;
        const grid = document.getElementById('optional-features-grid');
        if (!grid) return;
        grid.innerHTML = state.optionalFeatures.map(opt => `
          <div class="option-card reveal-elem">
            <div class="option-icon"><svg class="icon icon-lg" aria-hidden="true"><use href="#${OPTIONAL_FEATURE_ICONS[opt.title_en] || 'i-sparkles'}"></use></svg></div>
            <h3 class="option-title">${lang === 'ar' ? opt.title_ar : opt.title_en}</h3>
            <p class="option-desc">${lang === 'ar' ? opt.desc_ar : opt.desc_en}</p>
          </div>
        `).join('');
        setupScrollReveal(grid);
      }

      // Projects Gallery & Filter
      let activeProjectFilter = 'all';
      function renderProjectsGallery() {
        const lang = state.config.currentLang;
        const grid = document.getElementById('projects-cards-grid');
        if (!grid) return;
        const filtered = state.projects.filter(p => activeProjectFilter === 'all' || p.sector === activeProjectFilter);

        grid.innerHTML = filtered.map(proj => `
          <div class="project-card reveal-elem" onclick="window.openLightbox(${proj.id})">
            <div class="project-img-box">
              <img src="${proj.img}" alt="${proj.title_en}" class="project-img" loading="lazy">
              <div class="project-overlay">
                <span class="project-sector">${proj.sector} · ${proj.year}</span>
                <h3 class="project-name">${lang === 'ar' ? proj.title_ar : proj.title_en}</h3>
                <span class="project-seats">${proj.seats} ${lang === 'ar' ? 'مقعد' : 'Seats'}</span>
              </div>
            </div>
          </div>
        `).join('');
        setupScrollReveal(grid);
      }

      document.querySelectorAll('#projects-filter-chips .filter-chip').forEach(btn => {
        btn.addEventListener('click', function() {
          document.querySelectorAll('#projects-filter-chips .filter-chip').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          activeProjectFilter = this.getAttribute('data-filter');
          renderProjectsGallery();
        });
      });

      // Downloads List
      function renderDownloadsList() {
        const lang = state.config.currentLang;
        const list = document.getElementById('downloads-list-box');
        if (!list) return;
        list.innerHTML = state.downloads.map(d => `
          <div class="download-row reveal-elem">
            <div class="download-meta">
              <div class="download-icon"><svg class="icon"><use href="#i-file"></use></svg></div>
              <div>
                <h3 class="download-title">${lang === 'ar' ? d.title_ar : d.title_en}</h3>
                <div class="download-specs">${d.type} · ${d.size} · Official Release</div>
              </div>
            </div>
            <button class="btn btn-secondary" onclick="window.fakeDownload('${d.title_en}')">
              <span>${lang === 'ar' ? 'تحميل' : 'Download'}</span>
              <svg class="icon icon-sm" style="margin-inline-start: 4px;"><use href="#i-download"></use></svg>
            </button>
          </div>
        `).join('');
      }

      window.fakeDownload = function(name) {
        showToast('بدأ تحميل: ' + name);
      };

      // Contact branches intentionally use phone and email only.
      function renderContactBranches() {
        const lang = state.config.currentLang;
        const grid = document.getElementById('contact-branches-grid');
        if (!grid) return;
        grid.innerHTML = state.branches.map(b => `
          <div class="contact-card reveal-elem">
            <div class="contact-badge">${lang === 'ar' ? b.country_ar : b.country_en}</div>
            <h3 class="contact-branch-name">${b.id === 'cairo' ? (lang === 'ar' ? 'فرع مصر (القاهرة الجديدة)' : 'Egypt Hub (New Cairo)') : (lang === 'ar' ? 'فرع المملكة العربية السعودية' : 'Saudi Arabia Hub (Riyadh)')}</h3>
            
            <div class="contact-item">
              <div class="contact-icon"><svg class="icon icon-md"><use href="#i-pin"></use></svg></div>
              <div>
                <div class="contact-item-label">${lang === 'ar' ? 'العنوان' : 'Address'}</div>
                <div style="font-weight: 600;">${lang === 'ar' ? b.address_ar : b.address_en}</div>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon"><svg class="icon icon-md"><use href="#i-phone"></use></svg></div>
              <div>
                <div class="contact-item-label">${lang === 'ar' ? 'الهاتف المباشر' : 'Telephone'}</div>
                ${b.phones.map(p => `<a href="tel:${p.replace(/\s+/g, '')}" class="contact-link" style="display: block;">${p}</a>`).join('')}
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon"><svg class="icon icon-md"><use href="#i-mail"></use></svg></div>
              <div>
                <div class="contact-item-label">${lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</div>
                <a href="mailto:${b.email}" class="contact-link">${b.email}</a>
              </div>
            </div>

          </div>
        `).join('');
      }

      // Footer
      function renderFooter() {
        const lang = state.config.currentLang;
        // Socials: Facebook, Instagram, X as explicitly required!
        const socialBox = document.getElementById('footer-social-links-box');
        if (socialBox) socialBox.innerHTML = `
          <a href="${state.socials.facebook}" target="_blank" rel="noopener" class="social-btn" aria-label="Facebook">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.2 22 12z"/></svg>
          </a>
          <a href="${state.socials.x}" target="_blank" rel="noopener" class="social-btn" aria-label="X Twitter">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="${state.socials.instagram}" target="_blank" rel="noopener" class="social-btn" aria-label="Instagram">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
        `;

        const srvList = document.getElementById('footer-theater-services-links');
        if (srvList) {
          srvList.innerHTML = state.theaterServices.map(s => `
            <li><a href="theater-solutions.html#srv-card-${s.id}" class="footer-link">${lang === 'ar' ? s.title_ar : s.title_en}</a></li>
          `).join('');
        }
      }

      // Drawers: Theater Service Side Drawer
      window.openServiceDrawer = function(id) {
        const lang = state.config.currentLang;
        const srv = state.theaterServices.find(s => s.id === id) || state.theaterServices[0];
        document.getElementById('service-drawer-title').textContent = lang === 'ar' ? srv.title_ar : srv.title_en;
        document.getElementById('service-drawer-subtitle').textContent = 'MTI THEATER SOLUTIONS · ' + srv.id.toUpperCase();

        const body = document.getElementById('service-drawer-body');
        body.innerHTML = `
          <div style="font-size: 1.1rem; color: var(--navy-900); font-weight: 600; line-height: 1.8; margin-bottom: 2rem;">
            ${lang === 'ar' ? srv.short_ar : srv.short_en}
          </div>
          <div style="display: flex; flex-direction: column; gap: 2rem;">
            ${srv.sections.map((sec, idx) => `
              <div style="background: var(--surface-cloud); border: 1px solid var(--border-hairline); padding: 1.75rem;">
                <div style="font-family: var(--font-mono); font-size: var(--font-size-readable); color: var(--cyan-500); font-weight: 700; margin-bottom: 0.5rem;">SECTION 0${idx + 1}</div>
                <h4 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 800; color: var(--navy-900); margin-bottom: 0.75rem;">
                  ${lang === 'ar' ? sec.title_ar : sec.title_en}
                </h4>
                <p style="font-size: 0.9375rem; color: var(--slate-700); line-height: 1.7;">
                  ${lang === 'ar' ? sec.desc_ar : sec.desc_en}
                </p>
              </div>
            `).join('')}
          </div>
        `;

        document.getElementById('service-side-drawer').classList.add('active');
        document.body.classList.add('modal-open');
      };

      bindEventById('close-service-drawer', 'click', () => {
        document.getElementById('service-side-drawer').classList.remove('active');
        document.body.classList.remove('modal-open');
      });

      // Drawers: Product Detail Drawer
      window.openProductDrawer = function(id) {
        const lang = state.config.currentLang;
        const prod = state.products.find(p => p.id === id) || state.products[0];
        document.getElementById('product-drawer-code').textContent = prod.code;
        document.getElementById('product-drawer-name').textContent = lang === 'ar' ? prod.name_ar : prod.name_en;

        const body = document.getElementById('product-drawer-body');
        body.innerHTML = `
          <div style="background: #FAFAFA; border: 1px solid var(--border-hairline); padding: 2rem; margin-bottom: 2rem; text-align: center;">
            <img src="${prod.img}" alt="${prod.code}" style="max-height: 280px; margin-inline: auto; object-fit: contain;">
          </div>
          <h3 style="font-family: var(--font-display); font-size: 1.35rem; font-weight: 800; margin-bottom: 1rem; color: var(--navy-900);">
            ${lang === 'ar' ? 'المواصفات الفنية التفصيلية' : 'Engineering Specifications'}
          </h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 1.0625rem; line-height: 1.6; margin-bottom: 2rem;">
            <tr style="border-bottom: 1px solid var(--border-hairline);">
              <td style="padding: 0.75rem 0; color: var(--slate-500); font-family: var(--font-body);">${lang === 'ar' ? 'الخامات الهيكلية' : 'Material'}</td>
              <td style="padding: 0.75rem 0; font-weight: 700; text-align: end;">${prod.material}</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--border-hairline);">
              <td style="padding: 0.75rem 0; color: var(--slate-500); font-family: var(--font-body);">${lang === 'ar' ? 'آلية الطي والرفع' : 'Mechanism'}</td>
              <td style="padding: 0.75rem 0; font-weight: 700; text-align: end;">${prod.mechanism}</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--border-hairline);">
              <td style="padding: 0.75rem 0; color: var(--slate-500); font-family: var(--font-body);">${lang === 'ar' ? 'معامل الامتصاص الصوتي' : 'Absorption Coefficient'}</td>
              <td style="padding: 0.75rem 0; font-weight: 700; text-align: end; color: var(--cyan-500);">${prod.absorption}</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--border-hairline);">
              <td style="padding: 0.75rem 0; color: var(--slate-500); font-family: var(--font-body);">${lang === 'ar' ? 'الأبعاد المعمارية' : 'Dimensions'}</td>
              <td style="padding: 0.75rem 0; font-weight: 700; text-align: end;">${prod.dimensions}</td>
            </tr>
          </table>
        `;

        document.getElementById('product-side-drawer').classList.add('active');
        document.body.classList.add('modal-open');
      };

      bindEventById('close-product-drawer', 'click', () => {
        document.getElementById('product-side-drawer').classList.remove('active');
        document.body.classList.remove('modal-open');
      });

      bindEventById('download-product-spec-btn', 'click', () => {
        showToast('بدأ تحميل مواصفة المنتج الفنية (PDF)');
      });

      // Lightbox Modal
      window.openLightbox = function(id) {
        const lang = state.config.currentLang;
        const proj = state.projects.find(p => p.id === id) || state.projects[0];
        document.getElementById('lightbox-main-img').src = proj.img;
        document.getElementById('lightbox-title').textContent = lang === 'ar' ? proj.title_ar : proj.title_en;
        document.getElementById('lightbox-sector').textContent = proj.sector + ' · ' + proj.year;
        document.getElementById('project-lightbox-modal').classList.add('active');
        document.body.classList.add('modal-open');
      };

      bindEventById('close-lightbox-btn', 'click', () => {
        document.getElementById('project-lightbox-modal').classList.remove('active');
        document.body.classList.remove('modal-open');
      });

      // Legal Modals
      bindEventById('legal-privacy-btn', 'click', () => {
        document.getElementById('legal-modal-title').textContent = 'سياسة الخصوصية';
        document.getElementById('legal-modal-body').innerHTML = '<p>تلتزم شركة SHOMAN بحماية البيانات والخصوصية لكافة العملاء والمستشارين والجهات التابعة في مصر والسعودية. لا يقوم هذا الموقع التعريفي بجمع أية بيانات شخصية أو معلومات بنكية، ويقتصر استخدام ملفات الارتباط على تحسين تجربة التصفح وتذكر خيارات اللغة المفضلة.</p>';
        document.getElementById('legal-modal').classList.add('active');
      });

      bindEventById('legal-terms-btn', 'click', () => {
        document.getElementById('legal-modal-title').textContent = 'الشروط والأحكام';
        document.getElementById('legal-modal-body').innerHTML = '<p>كافة المواصفات والصور والكتالوجات المعروضة في هذا الموقع هي ملكية فكرية حصرية لشركة SHOMAN ومسجلة طبقاً للقوانين المصرية والسعودية والدولية. تخضع جميع عقود التوريد والتركيب للمواصفات الفنية المعتمدة رسمياً في المناقصات وأوامر التوريد الموقعة.</p>';
        document.getElementById('legal-modal').classList.add('active');
      });

      bindEventById('close-legal-modal', 'click', () => {
        document.getElementById('legal-modal').classList.remove('active');
      });

      // Mobile Menu Drawer
      const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
      if (mobileToggleBtn) {
        mobileToggleBtn.addEventListener('click', () => {
          const drawer = document.getElementById('mobile-drawer');
          const willOpen = !drawer.classList.contains('open');
          drawer.classList.toggle('open', willOpen);
          mobileToggleBtn.classList.toggle('active', willOpen);
        });
      }
      const closeMobileDrawerBtn = document.getElementById('close-mobile-drawer');
      if (closeMobileDrawerBtn) {
        closeMobileDrawerBtn.addEventListener('click', () => {
          document.getElementById('mobile-drawer').classList.remove('open');
          if (mobileToggleBtn) mobileToggleBtn.classList.remove('active');
        });
      }
      document.querySelectorAll('.drawer-nav-link').forEach(link => {
        link.addEventListener('click', () => {
          document.getElementById('mobile-drawer').classList.remove('open');
          if (mobileToggleBtn) mobileToggleBtn.classList.remove('active');
        });
      });

      const drawerNavList = document.querySelector('.drawer-nav-list');
      if (drawerNavList) {
        const drawerLinks = Array.from(drawerNavList.querySelectorAll('.drawer-nav-link'));
        const treeMarker = document.createElement('span');
        treeMarker.className = 'drawer-tree-marker';
        treeMarker.setAttribute('aria-hidden', 'true');
        drawerNavList.appendChild(treeMarker);

        const activeDrawerLink = () => drawerLinks.find(link => link.classList.contains('active')) || drawerLinks[0];
        const moveTreeMarker = link => {
          if (!link) return;
          drawerNavList.style.setProperty('--tree-marker-y', `${link.offsetTop}px`);
          drawerNavList.style.setProperty('--tree-marker-height', `${link.offsetHeight}px`);
        };

        moveTreeMarker(activeDrawerLink());
        drawerNavList.addEventListener('pointerover', event => {
          if (!(event.target instanceof Element)) return;
          const link = event.target.closest('.drawer-nav-link');
          if (link && drawerNavList.contains(link)) moveTreeMarker(link);
        });
        drawerNavList.addEventListener('pointerleave', () => moveTreeMarker(activeDrawerLink()));
        drawerNavList.addEventListener('focusin', event => {
          if (!(event.target instanceof Element)) return;
          const link = event.target.closest('.drawer-nav-link');
          if (link && drawerNavList.contains(link)) moveTreeMarker(link);
        });
        drawerNavList.addEventListener('focusout', event => {
          if (!drawerNavList.contains(event.relatedTarget)) moveTreeMarker(activeDrawerLink());
        });
        window.addEventListener('resize', () => moveTreeMarker(activeDrawerLink()));
        if (mobileToggleBtn) {
          mobileToggleBtn.addEventListener('click', () => {
            requestAnimationFrame(() => moveTreeMarker(activeDrawerLink()));
          });
        }
      }

      // ══════════════════════════════════════════════════════════════
      // BILINGUAL LANGUAGE CONTROLLER (Section Preservation & Kinetic Slide)
      // ══════════════════════════════════════════════════════════════
      function switchLanguage() {
        // Detect visible section to preserve user reading position
        const sections = ['contact', 'downloads', 'projects', 'options', 'telescopic', 'products', 'theater', 'about', 'home'];
        let activeSectionId = 'home';
        for (const secId of sections) {
          const el = document.getElementById(secId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= 120) {
              activeSectionId = secId;
              break;
            }
          }
        }

        state.config.currentLang = state.config.currentLang === 'ar' ? 'en' : 'ar';
        saveState();
        renderPublicSite();

        // Restore scroll position to current section with header offset compensation
        if (activeSectionId && activeSectionId !== 'home') {
          setTimeout(() => {
            const targetEl = document.getElementById(activeSectionId);
            if (targetEl) {
              if (typeof lenis !== 'undefined' && lenis) {
                lenis.scrollTo(targetEl, { offset: -70, immediate: true });
              } else {
                targetEl.scrollIntoView();
              }
            }
          }, 40);
        }
      }

      bindEventById('lang-toggle-btn', 'click', switchLanguage);
      const mobileLangBtn = document.getElementById('mobile-lang-toggle-btn');
      if (mobileLangBtn) {
        mobileLangBtn.addEventListener('click', switchLanguage);
      }

      // Scroll Reveal & Header Shrink Engine
      let scrollRevealObserver = null;
      function setupScrollReveal(root = document) {
        if (!scrollRevealObserver && typeof IntersectionObserver !== 'undefined') {
          scrollRevealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('revealed');

                const valEl = entry.target.querySelector('.trust-val');
                if (valEl) {
                  const targetNum = parseInt(valEl.getAttribute('data-target'));
                  if (!isNaN(targetNum)) {
                    animateCounter(valEl, targetNum);
                  }
                }
                observer.unobserve(entry.target);
              }
            });
          }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
        }

        root.querySelectorAll('.reveal-elem, .scale-line').forEach(el => {
          if (el.classList.contains('revealed')) return;
          if (scrollRevealObserver) {
            scrollRevealObserver.observe(el);
          } else {
            el.classList.add('revealed');
          }
        });
      }

      function animateCounter(el, target) {
        let current = 0;
        const step = Math.max(1, Math.floor(target / 40));
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            el.textContent = target + (target === 10 ? '+' : (target === 360 ? '°' : ''));
            clearInterval(timer);
          } else {
            el.textContent = current;
          }
        }, 30);
      }

      // ══════════════════════════════════════════════════════════════
      // SLIDING NAV INDICATOR & SCROLL SPY CONTROLLER
      // ══════════════════════════════════════════════════════════════
      const navContainer = document.getElementById('desktop-nav-links');
      const slidingIndicator = document.getElementById('nav-sliding-indicator');

      function updateNavIndicator(targetElement) {
        if (!navContainer || !slidingIndicator) return;
        const target = targetElement || navContainer.querySelector('.nav-link[aria-current="page"]') || navContainer.querySelector('.nav-link.active');
        if (target && navContainer.offsetParent !== null) {
          const navRect = navContainer.getBoundingClientRect();
          const targetRect = target.getBoundingClientRect();
          const x = targetRect.left - navRect.left;
          slidingIndicator.style.width = `${targetRect.width}px`;
          slidingIndicator.style.transform = `translateX(${x}px)`;
          slidingIndicator.style.opacity = '1';
        } else {
          slidingIndicator.style.opacity = '0';
        }
      }

      function initNavSlidingIndicator() {
        if (!navContainer) return;
        const navLinks = navContainer.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
          link.addEventListener('mouseenter', () => updateNavIndicator(link));
          link.addEventListener('focus', () => updateNavIndicator(link));
          link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
              e.preventDefault();
              const targetSection = document.querySelector(href);
              if (targetSection) {
                if (typeof lenis !== 'undefined' && lenis) {
                  lenis.scrollTo(targetSection, { offset: -70, duration: 1.2 });
                } else {
                  targetSection.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }
          });
        });

        navContainer.addEventListener('mouseleave', () => {
          updateNavIndicator();
        });

        window.addEventListener('resize', () => updateNavIndicator());
        setTimeout(updateNavIndicator, 200);
      }

      let previousScrollY = window.scrollY;
      let accumulatedScrollDelta = 0;
      let previousScrollDirection = 0;

      window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - previousScrollY;
        const scrollDirection = Math.sign(scrollDelta);
        previousScrollY = currentScrollY;
        scheduleHeroContentMotion();
        scheduleContainerScrollMotion();
        updateAboutTimeline();

        // Progress bar
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
        const progressBar = document.getElementById('scroll-progress');
        if (progressBar) progressBar.style.width = progress + '%';

        // Header shrink
        const header = document.getElementById('site-header');
        if (header) {
          if (currentScrollY > 25) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }

          if (currentScrollY <= 25) {
            accumulatedScrollDelta = 0;
            previousScrollDirection = 0;
            header.classList.remove('scroll-hidden');
          } else if (scrollDirection < 0) {
            accumulatedScrollDelta = 0;
            previousScrollDirection = scrollDirection;
            header.classList.remove('scroll-hidden');
          } else if (scrollDirection > 0) {
            if (scrollDirection !== previousScrollDirection) accumulatedScrollDelta = 0;
            accumulatedScrollDelta += scrollDelta;
            previousScrollDirection = scrollDirection;

            if (accumulatedScrollDelta >= 8) {
              header.classList.add('scroll-hidden');
              accumulatedScrollDelta = 0;
            }
          }
        }

        // Scroll spy
        const sections = ['home', 'about', 'theater', 'products', 'telescopic', 'projects', 'contact'];
        let currentSection = '';
        sections.forEach(secId => {
          const el = document.getElementById(secId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 140 && rect.bottom >= 140) {
              currentSection = secId;
            }
          }
        });

        if (currentSection) {
          let hasActive = false;
          document.querySelectorAll('#desktop-nav-links .nav-link').forEach(link => {
            const href = link.getAttribute('href');
            const isMatch = (href === '#' + currentSection);
            link.classList.toggle('active', isMatch);
            if (isMatch) hasActive = true;
          });
          if (hasActive) {
            updateNavIndicator();
          }
        }
      }, { passive: true });


      // ══════════════════════════════════════════════════════════════
      // ADMIN DASHBOARD CONTROLLERS & MODULES
      // ══════════════════════════════════════════════════════════════
      function setupAdminDashboard() {
        if (!document.getElementById('admin-app')) return;
        const navItems = document.querySelectorAll('#admin-sidebar-nav .admin-nav-item');
        navItems.forEach(item => {
          item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            const mod = this.getAttribute('data-module');
            renderAdminModule(mod);
          });
        });

        bindEventById('admin-preview-site-btn', 'click', () => {
          const iframe = document.getElementById('admin-preview-iframe');
          iframe.src = window.location.origin + window.location.pathname + '#home';
          document.getElementById('admin-preview-modal').classList.add('active');
        });

        bindEventById('close-preview-modal', 'click', () => {
          document.getElementById('admin-preview-modal').classList.remove('active');
        });

        bindEventById('preview-toggle-mobile', 'click', () => {
          const iframe = document.getElementById('admin-preview-iframe');
          if (iframe.style.width === '375px') {
            iframe.style.width = '100%';
          } else {
            iframe.style.width = '375px';
          }
        });

        bindEventById('admin-reset-data-btn', 'click', () => {
          if (confirm('هل أنت متأكد من استعادة كافة بيانات الموقع الأصلية؟ سيتم مسح أي تعديلات تجريبية.')) {
            state = JSON.parse(JSON.stringify(DEFAULT_DATA));
            saveState();
            logAudit('admin@shoman.com', 'Reset Demo Data', 'Restored pristine catalog data');
            renderPublicSite();
            renderAdminModule('dashboard-home');
            showToast('تمت استعادة البيانات الأصلية بنجاح');
          }
        });
      }

      function renderAdminModule(moduleName) {
        const container = document.getElementById('admin-module-container');
        const titleEl = document.getElementById('admin-page-title');

        switch(moduleName) {
          case 'dashboard-home':
            titleEl.textContent = 'لوحة الإحصائيات (Dashboard Home)';
            container.innerHTML = `
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
                <div class="admin-card" style="border-inline-start: 4px solid var(--cyan-500);">
                  <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--slate-500);">إجمالي المقاعد</div>
                  <div style="font-size: 2rem; font-weight: 800; color: var(--navy-900);">${state.products.length}</div>
                </div>
                <div class="admin-card" style="border-inline-start: 4px solid #10B981;">
                  <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--slate-500);">خدمات المسارح</div>
                  <div style="font-size: 2rem; font-weight: 800; color: var(--navy-900);">${state.theaterServices.length}</div>
                </div>
                <div class="admin-card" style="border-inline-start: 4px solid #6366F1;">
                  <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--slate-500);">المشاريع المنفذة</div>
                  <div style="font-size: 2rem; font-weight: 800; color: var(--navy-900);">${state.projects.length}</div>
                </div>
                <div class="admin-card" style="border-inline-start: 4px solid #F59E0B;">
                  <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--slate-500);">تحميلات الكتالوج</div>
                  <div style="font-size: 2rem; font-weight: 800; color: var(--navy-900);">1,420</div>
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem;">
                <div class="admin-card">
                  <h3 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 800; margin-bottom: 1rem;">أحدث التعديلات في النظام (Audit Feed)</h3>
                  <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                    ${state.auditLogs.slice(0, 5).map(log => `
                      <div style="padding: 0.75rem; background: #F8FAFC; border: 1px solid var(--border-hairline); display: flex; justify-content: space-between;">
                        <div>
                          <span style="font-weight: 700; color: var(--navy-900);">${log.action}</span>
                          <span style="color: var(--slate-500); font-size: 0.8125rem; margin-inline-start: 0.5rem;">${log.details}</span>
                        </div>
                        <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--slate-500);">${log.timestamp}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>

                <div class="admin-card">
                  <h3 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 800; margin-bottom: 1rem;">اكتمال المحتوى (Content Readiness)</h3>
                  <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <div>
                      <div style="display: flex; justify-content: space-between; font-size: 0.8125rem; font-weight: 700; margin-bottom: 0.25rem;">
                        <span>كتالوج المقاعد (Seats)</span>
                        <span>100%</span>
                      </div>
                      <div style="height: 6px; background: #E2E8F0;"><div style="width: 100%; height: 100%; background: #10B981;"></div></div>
                    </div>
                    <div>
                      <div style="display: flex; justify-content: space-between; font-size: 0.8125rem; font-weight: 700; margin-bottom: 0.25rem;">
                        <span>خدمات المسارح (Services)</span>
                        <span>100%</span>
                      </div>
                      <div style="height: 6px; background: #E2E8F0;"><div style="width: 100%; height: 100%; background: var(--cyan-500);"></div></div>
                    </div>
                    <div>
                      <div style="display: flex; justify-content: space-between; font-size: 0.8125rem; font-weight: 700; margin-bottom: 0.25rem;">
                        <span>بيانات الفرعين والتواصل</span>
                        <span>100%</span>
                      </div>
                      <div style="height: 6px; background: #E2E8F0;"><div style="width: 100%; height: 100%; background: #6366F1;"></div></div>
                    </div>
                  </div>
                </div>
              </div>
            `;
            break;

          case 'products':
            titleEl.textContent = 'إدارة المقاعد (Products & Load More Batch)';
            container.innerHTML = `
              <div class="admin-card" style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <label class="form-label" style="margin-bottom: 0;">عدد المقاعد في كل دفعة Load More:</label>
                  <select id="admin-batch-size-select" class="form-select" style="width: 120px;">
                    <option value="2" ${state.config.seatsBatchSize === 2 ? 'selected' : ''}>2 مقاعد</option>
                    <option value="4" ${state.config.seatsBatchSize === 4 ? 'selected' : ''}>4 مقاعد (افتراضي)</option>
                    <option value="6" ${state.config.seatsBatchSize === 6 ? 'selected' : ''}>6 مقاعد</option>
                  </select>
                </div>
                <button class="btn btn-primary" onclick="window.openAddProductModal()">
                  <span>+ إضافة موديل جديد</span>
                </button>
              </div>

              <div class="admin-table-wrap">
                <table class="admin-table">
                  <thead>
                    <tr>
                      <th>الكود</th>
                      <th>الاسم بالعربي</th>
                      <th>الاسم بالإنجليزي</th>
                      <th>الخامة</th>
                      <th>الامتصاص</th>
                      <th>الحالة</th>
                      <th>إجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${state.products.map(p => `
                      <tr>
                        <td style="font-family: var(--font-mono); font-weight: 700;">${p.code}</td>
                        <td>${p.name_ar}</td>
                        <td>${p.name_en}</td>
                        <td>${p.material}</td>
                        <td style="font-family: var(--font-mono); color: var(--cyan-500);">${p.absorption}</td>
                        <td><span class="badge badge-${p.status}">${p.status}</span></td>
                        <td>
                          <button style="color: #4338CA; font-weight: 700; margin-inline-end: 0.75rem; cursor: pointer;" onclick="window.openEditProductModal(${p.id})">تعديل</button>
                          <button style="color: #EF4444; font-weight: 700; cursor: pointer;" onclick="window.deleteProduct(${p.id})">حذف</button>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            `;

            bindEventById('admin-batch-size-select', 'change', function() {
              state.config.seatsBatchSize = parseInt(this.value);
              saveState();
              logAudit(localStorage.getItem('mti_admin_user_email') || 'admin', 'Update Batch Size', 'Changed load more batch to ' + this.value);
              renderPublicSite();
              showToast('تم تحديث حجم دفعة العرض بنجاح');
            });
            break;

          case 'theater-solutions':
            titleEl.textContent = 'محرر خدمات المسارح (Theater Solutions Editor)';
            container.innerHTML = `
              <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                ${state.theaterServices.map(srv => `
                  <div class="admin-card">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                      <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <span style="display: flex; align-items: center; color: var(--cyan-500);">${getTheaterServiceIconMarkup(srv.id)}</span>
                        <div>
                          <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 800; color: var(--navy-900);">${srv.title_ar} (${srv.title_en})</h3>
                          <p style="font-size: 0.875rem; color: var(--slate-700);">${srv.short_ar}</p>
                        </div>
                      </div>
                      <button class="btn btn-secondary" onclick="window.addSubSection('${srv.id}')" style="padding: 0.35rem 0.75rem; font-size: 0.75rem;">
                        <span>+ إضافة قسم فرعي</span>
                      </button>
                    </div>

                    <div style="border-top: 1px solid var(--border-hairline); padding-top: 1rem;">
                      <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--slate-500); margin-bottom: 0.5rem;">الأقسام الفرعية في الـ Side Panel:</div>
                      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        ${srv.sections.map((sec, sIdx) => `
                          <div style="background: #F8FAFC; border: 1px solid var(--border-hairline); padding: 0.75rem; display: flex; justify-content: space-between; align-items: center;">
                            <div>
                              <span style="font-weight: 700;">${sec.title_ar}</span>
                              <span style="color: var(--slate-500); font-size: 0.8125rem; margin-inline-start: 0.5rem;">${sec.desc_ar}</span>
                            </div>
                            <div style="display: flex; gap: 0.25rem;">
                              <button style="padding: 0.2rem 0.4rem; cursor: pointer;" onclick="window.moveSection('${srv.id}', ${sIdx}, -1)">↑</button>
                              <button style="padding: 0.2rem 0.4rem; cursor: pointer;" onclick="window.moveSection('${srv.id}', ${sIdx}, 1)">↓</button>
                              <button style="padding: 0.2rem 0.4rem; color: #EF4444; cursor: pointer;" onclick="window.removeSection('${srv.id}', ${sIdx})">✕</button>
                            </div>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            `;
            break;

          case 'global-settings':
            titleEl.textContent = 'الإعدادات العامة وبيانات الفروع (Global Settings)';
            container.innerHTML = `
              <div class="admin-card">
                <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 800; margin-bottom: 1.5rem;">بيانات فرع القاهرة (مصر)</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                  <div class="form-group">
                    <label class="form-label">العنوان بالعربية</label>
                    <input type="text" id="set-cairo-addr-ar" class="form-input" value="${state.branches[0].address_ar}">
                  </div>
                  <div class="form-group">
                    <label class="form-label">Address in English</label>
                    <input type="text" id="set-cairo-addr-en" class="form-input" value="${state.branches[0].address_en}">
                  </div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                  <div class="form-group">
                    <label class="form-label">الهاتف الأول</label>
                    <input type="text" id="set-cairo-phone1" class="form-input" value="${state.branches[0].phones[0]}">
                  </div>
                  <div class="form-group">
                    <label class="form-label">البريد الإلكتروني المعتمد</label>
                    <input type="email" id="set-cairo-email" class="form-input" value="${state.branches[0].email}">
                  </div>
                </div>
              </div>

              <div class="admin-card">
                <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 800; margin-bottom: 1.5rem;">بيانات فرع الرياض (المملكة العربية السعودية)</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                  <div class="form-group">
                    <label class="form-label">العنوان بالعربية</label>
                    <input type="text" id="set-riyadh-addr-ar" class="form-input" value="${state.branches[1].address_ar}">
                  </div>
                  <div class="form-group">
                    <label class="form-label">الهاتف المباشر</label>
                    <input type="text" id="set-riyadh-phone" class="form-input" value="${state.branches[1].phones[0]}">
                  </div>
                </div>
              </div>

              <div class="admin-card">
                <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 800; margin-bottom: 1.5rem;">روابط منصات التواصل (Social Links)</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
                  <div class="form-group">
                    <label class="form-label">Facebook</label>
                    <input type="text" id="set-soc-fb" class="form-input" value="${state.socials.facebook}">
                  </div>
                  <div class="form-group">
                    <label class="form-label">X (Twitter)</label>
                    <input type="text" id="set-soc-x" class="form-input" value="${state.socials.x}">
                  </div>
                  <div class="form-group">
                    <label class="form-label">Instagram</label>
                    <input type="text" id="set-soc-ig" class="form-input" value="${state.socials.instagram}">
                  </div>
                </div>
                <button class="btn btn-primary" id="save-global-settings-btn" style="margin-top: 1rem;">
                  <span>حفظ التعديلات العامة وتطبيقها فوراً</span>
                </button>
              </div>
            `;

            bindEventById('save-global-settings-btn', 'click', () => {
              state.branches[0].address_ar = document.getElementById('set-cairo-addr-ar').value;
              state.branches[0].address_en = document.getElementById('set-cairo-addr-en').value;
              state.branches[0].phones[0] = document.getElementById('set-cairo-phone1').value;
              state.branches[0].email = document.getElementById('set-cairo-email').value;

              state.branches[1].address_ar = document.getElementById('set-riyadh-addr-ar').value;
              state.branches[1].phones[0] = document.getElementById('set-riyadh-phone').value;

              state.socials.facebook = document.getElementById('set-soc-fb').value;
              state.socials.x = document.getElementById('set-soc-x').value;
              state.socials.instagram = document.getElementById('set-soc-ig').value;

              saveState();
              logAudit(localStorage.getItem('mti_admin_user_email') || 'admin', 'Update Global Settings', 'Updated branch contacts & socials');
              renderPublicSite();
              showToast('تم حفظ الإعدادات وتحديث الموقع والفوتر فورياً');
            });
            break;

          case 'admin-users':
            titleEl.textContent = 'إدارة المديرين وصلاحيات الوصول (Admin Users)';
            container.innerHTML = `
              <div class="admin-card" style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <h3 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 800;">حسابات الإدارة المعتمدة</h3>
                  <p style="font-size: 0.8125rem; color: var(--slate-500);">كافة الحسابات لها كامل الصلاحيات لإدارة المحتوى والنشر.</p>
                </div>
                <button class="btn btn-primary" onclick="window.openAddAdminModal()">
                  <span>+ إضافة مدير جديد</span>
                </button>
              </div>

              <div class="admin-table-wrap">
                <table class="admin-table">
                  <thead>
                    <tr>
                      <th>البريد الإلكتروني</th>
                      <th>آخر تسجيل دخول</th>
                      <th>الحالة</th>
                      <th>إجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${state.admins.map((a, idx) => `
                      <tr>
                        <td style="font-family: var(--font-mono); font-weight: 700;">${a.email}</td>
                        <td style="font-family: var(--font-mono);">${a.lastLogin || 'لم يسجل بعد'}</td>
                        <td><span class="badge badge-published">${a.status}</span></td>
                        <td>
                          ${idx !== 0 ? `<button style="color: #EF4444; font-weight: 700; cursor: pointer;" onclick="window.deleteAdmin(${idx})">حذف الحساب</button>` : '<span style="color: var(--slate-500); font-size: 0.75rem;">(المدير الرئيسي)</span>'}
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            `;
            break;

          case 'audit-log':
            titleEl.textContent = 'سجل العمليات والرقابة (Audit Log)';
            container.innerHTML = `
              <div class="admin-table-wrap">
                <table class="admin-table">
                  <thead>
                    <tr>
                      <th>الوقت والتاريخ</th>
                      <th>المدير (Admin)</th>
                      <th>العملية (Action)</th>
                      <th>التفاصيل (Details)</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${state.auditLogs.map(log => `
                      <tr>
                        <td style="font-family: var(--font-mono); font-size: 0.75rem;">${log.timestamp}</td>
                        <td style="font-family: var(--font-mono); font-weight: 700; color: var(--navy-900);">${log.email}</td>
                        <td style="font-weight: 700;">${log.action}</td>
                        <td style="color: var(--slate-700);">${log.details}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            `;
            break;

          default:
            titleEl.textContent = moduleName.toUpperCase() + ' Manager';
            container.innerHTML = `
              <div class="admin-card">
                <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 800; margin-bottom: 0.5rem;">وحدة ${moduleName} جاهزة ونشطة</h3>
                <p style="color: var(--slate-700); font-size: 0.9375rem; margin-bottom: 1.5rem;">
                  يتم حفظ وتعديل كافة عناصر هذه الوحدة في الذاكرة التفاعلية وlocalStorage مع الدعم اللغوي المزدوج.
                </p>
                <div style="padding: 1.5rem; background: #F8FAFC; border: 1px dashed var(--border-hairline);">
                  <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--cyan-500); font-weight: 700;">STATUS: ACTIVE &amp; SYNCED</div>
                </div>
              </div>
            `;
        }
      }

      // Admin Modal Triggers
      window.openAddProductModal = function() {
        document.getElementById('admin-prod-id').value = '';
        document.getElementById('admin-prod-code').value = 'MTI CH 0' + (state.products.length + 1);
        document.getElementById('admin-prod-name-ar').value = '';
        document.getElementById('admin-prod-name-en').value = '';
        document.getElementById('admin-prod-mat-ar').value = 'High Density Polypropylene';
        document.getElementById('admin-prod-absorption').value = '75';
        document.getElementById('admin-prod-dimensions').value = 'W:540 D:700 H:950 mm';
        document.getElementById('admin-prod-mechanism').value = 'Gravity Tip-Up';
        document.getElementById('admin-product-modal-title').textContent = 'إضافة موديل كرسي جديد';
        document.getElementById('admin-product-modal').classList.add('active');
      };

      window.openEditProductModal = function(id) {
        const p = state.products.find(item => item.id === id);
        if (!p) return;
        document.getElementById('admin-prod-id').value = p.id;
        document.getElementById('admin-prod-code').value = p.code;
        document.getElementById('admin-prod-name-ar').value = p.name_ar;
        document.getElementById('admin-prod-name-en').value = p.name_en;
        document.getElementById('admin-prod-mat-ar').value = p.material;
        document.getElementById('admin-prod-absorption').value = parseInt(p.absorption) || 75;
        document.getElementById('admin-prod-dimensions').value = p.dimensions;
        document.getElementById('admin-prod-mechanism').value = p.mechanism;
        document.getElementById('admin-product-modal-title').textContent = 'تعديل موديل: ' + p.code;
        document.getElementById('admin-product-modal').classList.add('active');
      };

      bindEventById('admin-product-form', 'submit', function(e) {
        e.preventDefault();
        const id = document.getElementById('admin-prod-id').value;
        const code = document.getElementById('admin-prod-code').value.trim();
        const name_ar = document.getElementById('admin-prod-name-ar').value.trim();
        const name_en = document.getElementById('admin-prod-name-en').value.trim();
        const material = document.getElementById('admin-prod-mat-ar').value.trim();
        const absorption = document.getElementById('admin-prod-absorption').value + '%';
        const dimensions = document.getElementById('admin-prod-dimensions').value.trim();
        const mechanism = document.getElementById('admin-prod-mechanism').value.trim();
        const status = document.getElementById('admin-prod-status').value;

        if (id) {
          const p = state.products.find(item => item.id === parseInt(id));
          if (p) {
            p.code = code;
            p.name_ar = name_ar;
            p.name_en = name_en;
            p.material = material;
            p.absorption = absorption;
            p.dimensions = dimensions;
            p.mechanism = mechanism;
            p.status = status;
            logAudit(localStorage.getItem('mti_admin_user_email') || 'admin', 'Edit Product', 'Updated ' + code);
          }
        } else {
          const newId = state.products.length ? Math.max(...state.products.map(p => p.id)) + 1 : 1;
          state.products.push({
            id: newId,
            code,
            name_ar,
            name_en,
            material,
            absorption,
            dimensions,
            mechanism,
            status,
            img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80'
          });
          logAudit(localStorage.getItem('mti_admin_user_email') || 'admin', 'Add Product', 'Created new product ' + code);
        }

        saveState();
        renderPublicSite();
        renderAdminModule('products');
        document.getElementById('admin-product-modal').classList.remove('active');
        showToast('تم حفظ المنتج بنجاح');
      });

      bindEventById('close-admin-product-modal', 'click', () => {
        document.getElementById('admin-product-modal').classList.remove('active');
      });
      bindEventById('cancel-admin-prod-modal', 'click', () => {
        document.getElementById('admin-product-modal').classList.remove('active');
      });

      window.deleteProduct = function(id) {
        if (confirm('هل أنت متأكد من رغبتك في حذف هذا المنتج من الكتالوج؟')) {
          const p = state.products.find(item => item.id === id);
          state.products = state.products.filter(item => item.id !== id);
          saveState();
          logAudit(localStorage.getItem('mti_admin_user_email') || 'admin', 'Delete Product', 'Deleted ' + (p ? p.code : id));
          renderPublicSite();
          renderAdminModule('products');
          showToast('تم حذف المنتج بنجاح');
        }
      };

      // Theater Sub-sections
      window.addSubSection = function(srvId) {
        const srv = state.theaterServices.find(s => s.id === srvId);
        if (!srv) return;
        const title = prompt('أدخل عنوان القسم الفرعي الجديد:', 'تجهيزات متقدمة');
        if (title) {
          srv.sections.push({
            title_ar: title,
            title_en: title,
            desc_ar: 'تجهيزات هندسية مطابقة لأعلى المعايير الاستشارية.'
          });
          saveState();
          logAudit(localStorage.getItem('mti_admin_user_email') || 'admin', 'Add Service Section', 'Added subsection to ' + srvId);
          renderPublicSite();
          renderAdminModule('theater-solutions');
          showToast('تمت إضافة القسم الفرعي بنجاح');
        }
      };

      window.moveSection = function(srvId, idx, dir) {
        const srv = state.theaterServices.find(s => s.id === srvId);
        if (!srv) return;
        const targetIdx = idx + dir;
        if (targetIdx >= 0 && targetIdx < srv.sections.length) {
          const temp = srv.sections[idx];
          srv.sections[idx] = srv.sections[targetIdx];
          srv.sections[targetIdx] = temp;
          saveState();
          renderPublicSite();
          renderAdminModule('theater-solutions');
        }
      };

      window.removeSection = function(srvId, idx) {
        const srv = state.theaterServices.find(s => s.id === srvId);
        if (!srv) return;
        if (confirm('حذف هذا القسم الفرعي؟')) {
          srv.sections.splice(idx, 1);
          saveState();
          renderPublicSite();
          renderAdminModule('theater-solutions');
          showToast('تم حذف القسم الفرعي');
        }
      };

      // Admin Users
      window.openAddAdminModal = function() {
        document.getElementById('new-admin-email').value = '';
        document.getElementById('new-admin-password').value = '';
        document.getElementById('admin-user-modal').classList.add('active');
      };

      bindEventById('close-admin-product-modal', 'click', () => {
        document.getElementById('admin-product-modal').classList.remove('active');
      });

      bindEventById('cancel-admin-user-modal', 'click', () => {
        document.getElementById('admin-user-modal').classList.remove('active');
      });

      bindEventById('admin-new-user-form', 'submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('new-admin-email').value.trim();
        const pass = document.getElementById('new-admin-password').value.trim();
        state.admins.push({ email, pass, status: 'active', lastLogin: null });
        saveState();
        logAudit(localStorage.getItem('mti_admin_user_email') || 'admin', 'Add Admin User', 'Created admin account for ' + email);
        renderAdminModule('admin-users');
        document.getElementById('admin-user-modal').classList.remove('active');
        showToast('تمت إضافة المدير الجديد بنجاح');
      });

      window.deleteAdmin = function(idx) {
        if (confirm('هل أنت متأكد من حذف هذا الحساب الإداري؟')) {
          const removed = state.admins.splice(idx, 1);
          saveState();
          logAudit(localStorage.getItem('mti_admin_user_email') || 'admin', 'Delete Admin User', 'Removed ' + (removed[0] ? removed[0].email : ''));
          renderAdminModule('admin-users');
          showToast('تم حذف حساب المدير بنجاح');
        }
      };

      // Toast Helper
      function showToast(msg) {
        const toast = document.getElementById('toast-notification');
        document.getElementById('toast-text').textContent = msg;
        toast.classList.add('active');
        setTimeout(() => toast.classList.remove('active'), 3200);
      }

      // Lenis Smooth Scroll & GSAP Sync Engine
      let lenis = null;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion && typeof Lenis !== 'undefined') {
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 1.0
        });
        lenis.on('scroll', () => {
          scheduleHeroContentMotion();
          scheduleContainerScrollMotion();
        });
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
          gsap.registerPlugin(ScrollTrigger);
          lenis.on('scroll', ScrollTrigger.update);
          gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
          });
          gsap.ticker.lagSmoothing(0);
        } else {
          function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
          }
          requestAnimationFrame(raf);
        }
      }

      // React-Bits: Spotlight Cards Controller
      function initSpotlightCards() {
        document.querySelectorAll('.theater-card, .product-card, .option-card, .feature-card').forEach(card => {
          card.classList.add('spotlight-card');
          card.addEventListener('pointermove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
          });
        });
      }

      function initOriginButtons() {
        const selector = '.btn, .product-btn';
        const setOrigin = (button, clientX, clientY) => {
          if (button.matches(':disabled')) return;
          const rect = button.getBoundingClientRect();
          const x = Math.max(0, Math.min(rect.width, clientX - rect.left - button.clientLeft));
          const y = Math.max(0, Math.min(rect.height, clientY - rect.top - button.clientTop));
          const farthestX = Math.max(x, rect.width - x);
          const farthestY = Math.max(y, rect.height - y);

          button.style.setProperty('--origin-x', `${x}px`);
          button.style.setProperty('--origin-y', `${y}px`);
          button.style.setProperty('--origin-size', `${Math.ceil(Math.hypot(farthestX, farthestY) * 2)}px`);
        };

        document.addEventListener('pointerover', event => {
          if (!(event.target instanceof Element)) return;
          const button = event.target.closest(selector);
          if (!button || (event.relatedTarget instanceof Node && button.contains(event.relatedTarget))) return;
          setOrigin(button, event.clientX, event.clientY);
        });

        document.addEventListener('pointermove', event => {
          if (!(event.target instanceof Element)) return;
          const button = event.target.closest(selector);
          if (button) setOrigin(button, event.clientX, event.clientY);
        });

        document.addEventListener('focusin', event => {
          if (!(event.target instanceof Element)) return;
          const button = event.target.closest(selector);
          if (!button) return;
          const rect = button.getBoundingClientRect();
          setOrigin(button, rect.left + rect.width / 2, rect.top + rect.height / 2);
        });
      }

      window.addEventListener('resize', scheduleHeroContentMotion);
      window.addEventListener('resize', scheduleContainerScrollMotion);
      scheduleContainerScrollMotion();

      // Initialize
      renderPublicSite();
      const initialAnchorId = decodeURIComponent(window.location.hash.slice(1));
      if (initialAnchorId) {
        requestAnimationFrame(() => {
          const initialAnchor = document.getElementById(initialAnchorId);
          if (initialAnchor) {
            initialAnchor.classList.add('highlight-target');
            initialAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => initialAnchor.classList.remove('highlight-target'), 1600);
          }
        });
      }
      initNavSlidingIndicator();
      initSpotlightCards();
      initOriginButtons();
      setupAdminDashboard();
      handleRouting();

    })();
