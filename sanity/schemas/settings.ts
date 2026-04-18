import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'tagline', type: 'string', description: 'e.g. "Builds at altitude."' }),
    defineField({ name: 'manifesto', type: 'text', rows: 6 }),
    defineField({ name: 'location', type: 'string', initialValue: 'Ventura, California' }),
    defineField({ name: 'email', type: 'string' }),
    defineField({
      name: 'social',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string' }),
            defineField({ name: 'url', type: 'url' }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'url' },
          },
        }),
      ],
    }),
    defineField({
      name: 'now',
      title: 'Now Playing / Currently',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet list of what you\'re up to right now. Updates the /now ticker.',
    }),
  ],
});
