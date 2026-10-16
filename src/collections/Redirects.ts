import type { CollectionConfig } from 'payload';

export const Redirects: CollectionConfig = {
  slug: 'redirects',
  admin: {
    useAsTitle: 'from',
    defaultColumns: ['from', 'to', 'statusCode', 'entityType', 'createdAt'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'from',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: 'Source Path (e.g. /theater-solutions/old-slug)',
    },
    {
      name: 'to',
      type: 'text',
      required: true,
      label: 'Destination Path (e.g. /theater-solutions/new-slug)',
    },
    {
      name: 'statusCode',
      type: 'select',
      defaultValue: '301',
      options: [
        { label: '301 - Moved Permanently (Default)', value: '301' },
        { label: '302 - Found / Temporary', value: '302' },
      ],
      label: 'HTTP Status Code',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'entityType',
          type: 'text',
          label: 'Entity Type (e.g. products, theater-services, pages)',
        },
        {
          name: 'entityId',
          type: 'text',
          label: 'Associated Entity ID',
        },
      ],
    },
  ],
};
