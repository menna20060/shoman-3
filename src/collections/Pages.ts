import type { CollectionConfig } from 'payload';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'slug',
    defaultColumns: ['slug', 'title_ar', 'title_en', 'is_hidden', 'updatedAt'],
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true;
      // Public visitors only see non-hidden pages
      return {
        is_hidden: {
          not_equals: true,
        },
      };
    },
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'slug',
      type: 'select',
      required: true,
      unique: true,
      index: true,
      options: [
        { label: 'الرئيسية / Home', value: 'home' },
        { label: 'من نحن / About', value: 'about' },
        { label: 'حلول المسارح / Theater Solutions', value: 'theater' },
        { label: 'كراسي المسارح / Seats', value: 'seats' },
        { label: 'المدرجات المتحركة / Telescopic', value: 'telescopic' },
        { label: 'الخيارات الإضافية / Options', value: 'options' },
        { label: 'مشاريعنا / Projects', value: 'projects' },
        { label: 'التحميلات / Downloads', value: 'downloads' },
        { label: 'اتصل بنا / Contact', value: 'contact' },
      ],
      label: 'Page Slug / Identity',
    },
    {
      name: 'is_hidden',
      type: 'checkbox',
      defaultValue: false,
      label: 'Hide Page (Returns 404 & excluded from navigation/sitemap)',
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General & Header',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'title_ar',
                  type: 'text',
                  required: true,
                  label: 'Page Title (Arabic)',
                },
                {
                  name: 'title_en',
                  type: 'text',
                  required: true,
                  label: 'Page Title (English)',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'intro_ar',
                  type: 'textarea',
                  label: 'Intro / Subtitle (Arabic)',
                },
                {
                  name: 'intro_en',
                  type: 'textarea',
                  label: 'Intro / Subtitle (English)',
                },
              ],
            },
            {
              name: 'header_image',
              type: 'upload',
              relationTo: 'media',
              label: 'Page Header Hero Image',
            },
          ],
        },
        {
          label: 'SEO & Metadata',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'meta_title_ar',
                  type: 'text',
                  label: 'Meta Title (Arabic)',
                },
                {
                  name: 'meta_title_en',
                  type: 'text',
                  label: 'Meta Title (English)',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'meta_description_ar',
                  type: 'textarea',
                  label: 'Meta Description (Arabic)',
                },
                {
                  name: 'meta_description_en',
                  type: 'textarea',
                  label: 'Meta Description (English)',
                },
              ],
            },
            {
              name: 'og_image',
              type: 'upload',
              relationTo: 'media',
              label: 'Social Share Image (OpenGraph)',
            },
          ],
        },
        {
          label: 'Home Specific Content',
          admin: {
            condition: (data) => data?.slug === 'home',
          },
          fields: [
            {
              name: 'hero_slides',
              type: 'array',
              label: 'Hero Slides (Array of Slides)',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  label: 'Slide Background Image',
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'title_ar',
                      type: 'text',
                      required: true,
                      label: 'Slide Title (Arabic)',
                    },
                    {
                      name: 'title_en',
                      type: 'text',
                      required: true,
                      label: 'Slide Title (English)',
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'subtitle_ar',
                      type: 'textarea',
                      label: 'Slide Subtitle (Arabic)',
                    },
                    {
                      name: 'subtitle_en',
                      type: 'textarea',
                      label: 'Slide Subtitle (English)',
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'cta_text_ar',
                      type: 'text',
                      label: 'CTA Button Text (Arabic)',
                    },
                    {
                      name: 'cta_text_en',
                      type: 'text',
                      label: 'CTA Button Text (English)',
                    },
                    {
                      name: 'cta_link',
                      type: 'text',
                      label: 'CTA Destination Link (e.g. /theater-solutions)',
                    },
                  ],
                },
              ],
            },
            {
              name: 'trust_metrics',
              type: 'array',
              label: 'Trust Metrics / Counters',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'metric_value',
                      type: 'text',
                      required: true,
                      label: 'Metric Value (e.g. +15, 250K+, 100%)',
                    },
                    {
                      name: 'metric_icon',
                      type: 'text',
                      label: 'Lucide Icon Name (e.g. icon-milestone)',
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'label_ar',
                      type: 'text',
                      required: true,
                      label: 'Metric Label (Arabic)',
                    },
                    {
                      name: 'label_en',
                      type: 'text',
                      required: true,
                      label: 'Metric Label (English)',
                    },
                  ],
                },
              ],
            },
            {
              name: 'featured_products',
              type: 'relationship',
              relationTo: 'products',
              hasMany: true,
              label: 'Featured Products for Home Page',
            },
            {
              name: 'featured_projects',
              type: 'relationship',
              relationTo: 'projects',
              hasMany: true,
              label: 'Featured Projects for Home Page',
            },
          ],
        },
        {
          label: 'About Specific Content',
          admin: {
            condition: (data) => data?.slug === 'about',
          },
          fields: [
            {
              name: 'about_blocks',
              type: 'array',
              label: 'Company Story & Content Blocks',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'block_title_ar',
                      type: 'text',
                      required: true,
                      label: 'Block Title (Arabic)',
                    },
                    {
                      name: 'block_title_en',
                      type: 'text',
                      required: true,
                      label: 'Block Title (English)',
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'block_body_ar',
                      type: 'textarea',
                      required: true,
                      label: 'Block Body (Arabic)',
                    },
                    {
                      name: 'block_body_en',
                      type: 'textarea',
                      required: true,
                      label: 'Block Body (English)',
                    },
                  ],
                },
                {
                  name: 'block_image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Accompanying Illustration / Image',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
