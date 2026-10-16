import type { CollectionConfig } from 'payload';

export const TabletOptions: CollectionConfig = {
  slug: 'tablet-options',
  admin: {
    useAsTitle: 'code',
    defaultColumns: ['code', 'type', 'material_ar', 'material_en'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'code',
      type: 'text',
      required: true,
      label: 'Tablet Code (#301...)',
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Stowed Tablet', value: 'stowed' },
        { label: 'Housing Arm Tablet', value: 'housing' },
        { label: 'Anti-Panic Tablet', value: 'anti-panic' },
      ],
    },
    {
      name: 'material_ar',
      type: 'text',
      label: 'Material (Arabic)',
    },
    {
      name: 'material_en',
      type: 'text',
      label: 'Material (English)',
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'Image URL',
    },
  ],
};
