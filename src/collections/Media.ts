import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'public/media',
    mimeTypes: [
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/avif',
      'image/svg+xml',
      'application/pdf',
    ],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        formatOptions: { format: 'webp', options: { quality: 85 } },
      },
      {
        name: 'medium',
        width: 768,
        formatOptions: { format: 'webp', options: { quality: 85 } },
      },
      {
        name: 'large',
        width: 1440,
        formatOptions: { format: 'webp', options: { quality: 85 } },
      },
    ],
    adminThumbnail: 'thumbnail',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  admin: {
    useAsTitle: 'alt_ar',
    defaultColumns: ['filename', 'alt_ar', 'alt_en', 'filesize', 'createdAt'],
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'alt_ar',
          type: 'text',
          required: true,
          label: 'Alt Text (Arabic)',
        },
        {
          name: 'alt_en',
          type: 'text',
          required: true,
          label: 'Alt Text (English)',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'caption_ar',
          type: 'text',
          label: 'Caption (Arabic)',
        },
        {
          name: 'caption_en',
          type: 'text',
          label: 'Caption (English)',
        },
      ],
    },
  ],
};
