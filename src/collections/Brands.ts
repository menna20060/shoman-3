import type { CollectionConfig } from 'payload';

export const Brands: CollectionConfig = {
  slug: 'brands',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'websiteUrl', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Brand Name',
    },
    {
      name: 'logoUrl',
      type: 'text',
      label: 'Brand Logo URL / Asset',
    },
    {
      name: 'websiteUrl',
      type: 'text',
      label: 'Official Website URL',
    },
    {
      name: 'isApprovedForDisplay',
      type: 'checkbox',
      defaultValue: true,
      label: 'Approved for Public Display',
    },
  ],
};
