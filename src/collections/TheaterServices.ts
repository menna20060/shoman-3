import type { CollectionConfig } from 'payload';
import { validateSlug, checkPublishGate } from '../lib/validators';
import { createRedirectOnSlugChange } from '../lib/hooks/createRedirectOnSlugChange';

export const TheaterServices: CollectionConfig = {
  slug: 'theater-services',
  admin: {
    useAsTitle: 'title_ar',
    defaultColumns: ['title_ar', 'title_en', 'slug', 'sort_order'],
  },
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data) {
          checkPublishGate(data, {
            ar: [
              { name: 'title_ar', label: 'العنوان' },
              { name: 'short_ar', label: 'الوصف المختصر' },
            ],
            en: [
              { name: 'title_en', label: 'Title' },
              { name: 'short_en', label: 'Short Description' },
            ],
          });
        }
        return data;
      },
    ],
    afterChange: [
      createRedirectOnSlugChange('/theater-solutions', 'theater-services'),
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
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      validate: validateSlug,
      label: 'URL Slug (e.g. pro-audio)',
    },
    {
      name: 'icon',
      type: 'text',
      required: true,
      label: 'Service Icon / Emoji / Identifier',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'title_ar',
          type: 'text',
          required: true,
          label: 'Service Title (Arabic)',
        },
        {
          name: 'title_en',
          type: 'text',
          required: true,
          label: 'Service Title (English)',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'panel_subtitle_ar',
          type: 'text',
          label: 'Side Panel Subtitle (Arabic)',
        },
        {
          name: 'panel_subtitle_en',
          type: 'text',
          label: 'Side Panel Subtitle (English)',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'short_ar',
          type: 'textarea',
          required: true,
          label: 'Short Description (Arabic - up to 5 lines)',
        },
        {
          name: 'short_en',
          type: 'textarea',
          required: true,
          label: 'Short Description (English - up to 5 lines)',
        },
      ],
    },
    {
      name: 'sort_order',
      type: 'number',
      defaultValue: 0,
      label: 'Sort Order (0-5)',
    },
  ],
};
