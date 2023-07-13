import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'event',
    title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',

    }),
    defineField({
        name: 'date',
        title: 'Date',
        type: 'date',
      }),
  ],
})
