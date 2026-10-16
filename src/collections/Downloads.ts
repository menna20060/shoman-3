import type { CollectionConfig } from 'payload';

export const Downloads: CollectionConfig = {
  slug: 'downloads',
  admin: {
    useAsTitle: 'title_ar',
    defaultColumns: ['title_ar', 'title_en', 'category', 'sort_order', 'is_active'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title_ar',
          type: 'text',
          required: true,
          label: 'Title (Arabic)',
        },
        {
          name: 'title_en',
          type: 'text',
          required: true,
          label: 'Title (English)',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'category',
          type: 'select',
          required: true,
          defaultValue: 'catalog',
          options: [
            { label: 'الكتالوجات الرئيسية / Catalogs', value: 'catalog' },
            { label: 'المواصفات الفنية / Specifications', value: 'specs' },
            { label: 'الملف التعريفي / Company Profile', value: 'profile' },
            { label: 'شهادات الاعتماد / Certifications', value: 'certifications' },
          ],
          label: 'Category',
        },
        {
          name: 'file_size_label',
          type: 'text',
          label: 'File Size Display (e.g. 14.8 MB)',
        },
      ],
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Downloadable File (PDF / Document)',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'description_ar',
          type: 'textarea',
          label: 'Description (Arabic)',
        },
        {
          name: 'description_en',
          type: 'textarea',
          label: 'Description (English)',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'sort_order',
          type: 'number',
          defaultValue: 0,
          label: 'Display Order',
        },
        {
          name: 'is_active',
          type: 'checkbox',
          defaultValue: true,
          label: 'Active / Published',
        },
      ],
    },
  ],
};
