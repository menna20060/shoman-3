import type { CollectionConfig } from 'payload';

export const OptionalFeatures: CollectionConfig = {
  slug: 'optional-features',
  admin: {
    useAsTitle: 'name_ar',
    defaultColumns: ['name_ar', 'name_en', 'group'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'group',
      type: 'select',
      required: true,
      options: [
        { label: 'Seat Numbering', value: 'seat_number' },
        { label: 'Row Markers', value: 'row_marker' },
        { label: 'Moveable Base', value: 'moveable_base' },
        { label: 'Others', value: 'others' },
      ],
    },
    {
      name: 'name_ar',
      type: 'text',
      required: true,
      label: 'Feature Name (Arabic)',
    },
    {
      name: 'name_en',
      type: 'text',
      required: true,
      label: 'Feature Name (English)',
    },
    {
      name: 'desc_ar',
      type: 'textarea',
      label: 'Description (Arabic)',
    },
    {
      name: 'desc_en',
      type: 'textarea',
      label: 'Description (English)',
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'Image URL',
    },
  ],
};
