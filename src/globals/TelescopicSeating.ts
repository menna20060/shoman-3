import type { GlobalConfig } from 'payload';

export const TelescopicSeating: GlobalConfig = {
  slug: 'telescopic-seating',
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'tabs',
      type: 'array',
      required: true,
      minRows: 5,
      maxRows: 5,
      labels: {
        singular: 'Telescopic Tab',
        plural: 'Telescopic Tabs',
      },
      fields: [
        {
          name: 'key',
          type: 'select',
          required: true,
          options: [
            { label: 'Safety', value: 'safety' },
            { label: 'Stability', value: 'stability' },
            { label: 'Installation', value: 'installation' },
            { label: 'Seating Options', value: 'seating_options' },
            { label: 'Accessories', value: 'accessories' },
          ],
        },
        {
          name: 'title_ar',
          type: 'text',
          required: true,
        },
        {
          name: 'title_en',
          type: 'text',
          required: true,
        },
        {
          name: 'imageUrl',
          type: 'text',
        },
        {
          name: 'items',
          type: 'array',
          fields: [
            {
              name: 'spec_ar',
              type: 'text',
              required: true,
            },
            {
              name: 'spec_en',
              type: 'text',
            },
            {
              name: 'spec_value',
              type: 'text',
              label: 'Numeric Value / Load (e.g., 240 kg)',
            },
          ],
        },
      ],
    },
  ],
};
