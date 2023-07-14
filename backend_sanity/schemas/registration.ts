import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'registration',
  title: 'Registration',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    }),
    defineField({
      name: 'birthday',
      title: 'Birthday',
      type: 'date',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).error('Invalid email format'),
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
/*       validation: (Rule) =>
        Rule.regex(/^[0-9]{3}[0-9]{3}[0-9]{4}$/).error('Invalid phone number format'), */
    }),
    /*
    defineField({
      name: 'event',
      title: 'Event',
      type: 'reference',
      to: [{ type: 'event' }],
    }),
    */
  ],
});
