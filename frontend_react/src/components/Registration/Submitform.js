import { urlFor, clientApp } from '../../client';

export default async function submitForm(formData) {
    console.log('Form submitted:', formData);
    try {
      const sanityFormData = {
        _type: 'registration', // Replace with the actual Sanity document type
        firstName: formData.firstName,
        lastName: formData.lastName,
        birthday: formData.birthday,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
      };
  
      // Create a new document in the 'formSubmissions' collection
      const response = await clientApp.create(sanityFormData);
  
      return response._id;  // return the id of the created document
    } catch (error) {
        console.error('Error Message:', error.message);
        console.error('Stack Trace:', error.stack);
      throw new Error('Failed to submit form.');
    }
  }
  

