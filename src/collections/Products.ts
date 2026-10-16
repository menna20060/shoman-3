import type { CollectionConfig } from 'payload';
import { validateSlug, validateProductCode, checkPublishGate } from '../lib/validators';
import { createRedirectOnSlugChange } from '../lib/hooks/createRedirectOnSlugChange';

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'code',
    defaultColumns: ['code', 'name_ar', 'status', 'absorption_percent', 'is_featured'],
  },
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data) {
          checkPublishGate(data, {
            ar: [
              { name: 'code', label: 'كود المنتج' },
              { name: 'name_ar', label: 'اسم المنتج' },
              { name: 'slug', label: 'الرابط المختصر' },
            ],
            en: [
              { name: 'code', label: 'Product Code' },
              { name: 'name_en', label: 'Product Name' },
              { name: 'slug', label: 'Slug' },
            ],
          });
        }
        return data;
      },
    ],
    afterChange: [
      createRedirectOnSlugChange('/seats', 'products'),
    ],
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
      validate: validateProductCode,
      label: 'Chair Code (e.g., MTI CH 001)',
      index: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      validate: validateSlug,
      label: 'URL Slug (e.g., ch-001)',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'published',
      options: [
        { label: 'Published', value: 'published' },
        { label: 'Draft', value: 'draft' },
        { label: 'Hidden', value: 'hidden' },
      ],
      required: true,
    },
    {
      name: 'is_featured',
      type: 'checkbox',
      defaultValue: false,
      label: 'Featured on Homepage',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'product-categories',
      label: 'Category (Internal)',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'name_ar',
          type: 'text',
          required: true,
          label: 'Product Name (Arabic)',
        },
        {
          name: 'name_en',
          type: 'text',
          required: true,
          label: 'Product Name (English)',
        },
      ],
    },
    {
      type: 'row',
      fields: [
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
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'mechanism_ar',
          type: 'text',
          label: 'Mechanism (Arabic)',
        },
        {
          name: 'mechanism_en',
          type: 'text',
          label: 'Mechanism (English)',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'absorption_percent',
          type: 'text',
          label: 'Acoustic Absorption (e.g., 82%)',
        },
        {
          name: 'custom_logo_allowed',
          type: 'checkbox',
          defaultValue: true,
          label: 'Custom Logo Allowed',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'dimensions_mm',
          type: 'text',
          label: 'Dimensions mm (e.g., W:560 D:740 H:980 mm)',
        },
        {
          name: 'dimensions_in',
          type: 'text',
          label: 'Dimensions inches (e.g., W:22" D:29" H:38.5")',
        },
      ],
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'Primary Image URL',
      required: true,
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Gallery Images',
      fields: [
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'spec_sheet_url',
      type: 'text',
      label: 'Spec Sheet PDF URL',
    },
    {
      name: 'extra_specs',
      type: 'array',
      label: 'Additional Engineering Specifications',
      fields: [
        {
          name: 'name_ar',
          type: 'text',
          required: true,
        },
        {
          name: 'name_en',
          type: 'text',
          required: true,
        },
        {
          name: 'value_ar',
          type: 'text',
          required: true,
        },
        {
          name: 'value_en',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'tablets',
      type: 'relationship',
      relationTo: 'tablet-options',
      hasMany: true,
      label: 'Compatible Tablet Options',
    },
    {
      name: 'optional_features',
      type: 'relationship',
      relationTo: 'optional-features',
      hasMany: true,
      label: 'Compatible Optional Features',
    },
    {
      name: 'sort_order',
      type: 'number',
      defaultValue: 0,
    },
  ],
};
