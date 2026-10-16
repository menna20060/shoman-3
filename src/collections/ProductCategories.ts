import type { CollectionConfig } from 'payload';

export const ProductCategories: CollectionConfig = {
  slug: 'product-categories',
  admin: {
    useAsTitle: 'name_ar',
    defaultColumns: ['name_ar', 'name_en', 'slug'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'name_ar',
      type: 'text',
      required: true,
      label: 'Category Name (Arabic)',
    },
    {
      name: 'name_en',
      type: 'text',
      required: true,
      label: 'Category Name (English)',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
  ],
};
