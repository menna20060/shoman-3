import type { CollectionConfig } from 'payload';

export const AuditLogs: CollectionConfig = {
  slug: 'audit-logs',
  admin: {
    useAsTitle: 'action',
    defaultColumns: ['action', 'userEmail', 'entityType', 'ipAddress', 'createdAt'],
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: () => true,
    update: () => false, // Immutable audit logs
    delete: () => false,
  },
  fields: [
    {
      name: 'action',
      type: 'text',
      required: true,
    },
    {
      name: 'userEmail',
      type: 'text',
      required: true,
    },
    {
      name: 'entityType',
      type: 'text',
    },
    {
      name: 'entityId',
      type: 'text',
    },
    {
      name: 'ipAddress',
      type: 'text',
    },
    {
      name: 'details',
      type: 'json',
    },
  ],
};
