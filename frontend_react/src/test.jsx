import React, { useEffect } from 'react';
import { clientApp } from './client';

function Test() {
  useEffect(() => {
    const fetchDataAndUpdateDocument = async () => {
      try {
        // Fetch the document ID
        const query = '*[_type == "registration"]{ _id }';
        const documents = await clientApp.fetch(query);

        // Check if there's any document
        if (documents.length === 0) {
          console.log('No documents found.');
          return;
        }

        // Get the first document ID
        const documentId = documents[0]._id;

        // Update the document
        const response = await clientApp
          .patch(documentId)
          .set({ firstName: 'Hey' }) // replace with an actual field name and value
          .commit();

        console.log('Document updated successfully:', response);
      } catch (error) {
        console.log('Error fetching or updating document:', error);
      }
    };

    fetchDataAndUpdateDocument();
  }, []);

  return <p>Check the console for test results.</p>;
}

export default Test;