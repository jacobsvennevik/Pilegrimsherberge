import { clientApp } from '../../client';

export default async function submitContact(formData) {
  try {
    const sanityFormData = {
      _type: 'contactFormSubmission', // Replace with the actual Sanity document type
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    // Create a new document in the 'contactFormSubmissions' collection
    const response = await clientApp.create(sanityFormData);

    return response._id; // return the id of the created document
  } catch (error) {
    console.error('Error Message:', error.message);
    console.error('Stack Trace:', error.stack);
    throw new Error('Failed to submit contact form.');
  }
}

  

