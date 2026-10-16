import type { CollectionConfig } from 'payload';

export const TheaterSections: CollectionConfig = {
  slug: 'theater-sections',
  admin: {
    useAsTitle: 'title_ar',
    defaultColumns: ['title_ar', 'service', 'sort_order'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'service',
      type: 'relationship',
      relationTo: 'theater-services',
      required: true,
      index: true,
      label: 'Parent Theater Service',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'title_ar',
          type: 'text',
          required: true,
          label: 'Section Title (Arabic)',
        },
        {
          name: 'title_en',
          type: 'text',
          required: true,
          label: 'Section Title (English)',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'desc_ar',
          type: 'textarea',
          required: true,
          label: 'Section Body Description (Arabic)',
        },
        {
          name: 'desc_en',
          type: 'textarea',
          required: true,
          label: 'Section Body Description (English)',
        },
      ],
    },
    {
      name: 'images',
      type: 'array',
      label: '16:9 Showcase Images',
      fields: [
        {
          name: 'url',
          type: 'text',
          required: true,
        },
        {
          name: 'alt_ar',
          type: 'text',
        },
        {
          name: 'alt_en',
          type: 'text',
        },
      ],
    },
    {
      name: 'brands',
      type: 'relationship',
      relationTo: 'brands',
      hasMany: true,
      label: 'Associated Partner Brands (M:N)',
    },
    {
      name: 'sort_order',
      type: 'number',
      defaultValue: 0,
      label: 'Display Order in Side Panel',
    },
  ],
};
