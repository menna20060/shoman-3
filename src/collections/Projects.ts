import type { CollectionConfig } from 'payload';

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title_ar',
    defaultColumns: ['title_ar', 'title_en', 'client_ar', 'year', 'is_featured', 'sort_order'],
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
          label: 'Project Title (Arabic)',
        },
        {
          name: 'title_en',
          type: 'text',
          required: true,
          label: 'Project Title (English)',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'client_ar',
          type: 'text',
          label: 'Client / Entity (Arabic)',
        },
        {
          name: 'client_en',
          type: 'text',
          label: 'Client / Entity (English)',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'location_ar',
          type: 'text',
          label: 'Location (Arabic - e.g. الرياض، المملكة العربية السعودية)',
        },
        {
          name: 'location_en',
          type: 'text',
          label: 'Location (English - e.g. Riyadh, KSA)',
        },
        {
          name: 'year',
          type: 'number',
          label: 'Completion Year',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'description_ar',
          type: 'textarea',
          label: 'Project Description (Arabic)',
        },
        {
          name: 'description_en',
          type: 'textarea',
          label: 'Project Description (English)',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'cover_image',
          type: 'upload',
          relationTo: 'media',
          label: 'Cover Image',
        },
        {
          name: 'is_featured',
          type: 'checkbox',
          defaultValue: false,
          label: 'Featured Project (Show on Home Page)',
        },
        {
          name: 'sort_order',
          type: 'number',
          defaultValue: 0,
          label: 'Display Order',
        },
      ],
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Project Gallery / Media Assets',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption_ar',
          type: 'text',
          label: 'Image Caption (Arabic)',
        },
        {
          name: 'caption_en',
          type: 'text',
          label: 'Image Caption (English)',
        },
      ],
    },
    {
      name: 'products_installed',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      label: 'Products / Seat Models Installed',
    },
  ],
};
