import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'registration',
    title: 'Registration',
    type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule: any) => Rule.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).error('Invalid email format'),
    }),
    defineField({
        name: 'event',
        title: 'Event',
        type: 'reference',
        to: [{ type: 'event' }],
    }),
  ],
})