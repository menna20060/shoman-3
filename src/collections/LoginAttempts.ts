import type { CollectionConfig } from 'payload';

export const LoginAttempts: CollectionConfig = {
  slug: 'login-attempts',
  admin: {
    useAsTitle: 'ipAddress',
    defaultColumns: ['ipAddress', 'email', 'attemptsCount', 'lockedUntil', 'updatedAt'],
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: () => true,
    update: () => true,
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'ipAddress',
      type: 'text',
      required: true,
      index: true,
    },
    {
      name: 'email',
      type: 'text',
      required: true,
      index: true,
    },
    {
      name: 'attemptsCount',
      type: 'number',
      defaultValue: 1,
      required: true,
    },
    {
      name: 'lockedUntil',
      type: 'date',
    },
  ],
};
