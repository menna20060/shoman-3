import type { CollectionConfig } from 'payload';

export const AdminSessions: CollectionConfig = {
  slug: 'admin-sessions',
  admin: {
    useAsTitle: 'ipAddress',
    defaultColumns: ['admin', 'ipAddress', 'createdAt', 'expiresAt', 'isRevoked'],
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: () => true,
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'admin',
      type: 'relationship',
      relationTo: 'admins',
      required: true,
      index: true,
    },
    {
      name: 'tokenHash',
      type: 'text',
      required: true,
      index: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'ipAddress',
      type: 'text',
      required: true,
    },
    {
      name: 'userAgent',
      type: 'text',
    },
    {
      name: 'expiresAt',
      type: 'date',
      required: true,
    },
    {
      name: 'isRevoked',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
};
