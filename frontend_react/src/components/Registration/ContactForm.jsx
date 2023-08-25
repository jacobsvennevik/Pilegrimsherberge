import React, { useState } from 'react';
import { clientApp } from '../../../client';
import submitForm from './Submitform';
import './ContactForm.scss'; // Import your SCSS styles

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      // Submit the form data to the backend
      await submitForm(formData);
      console.log('Form submitted successfully.');

      // Reset the form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleFormSubmit}>
        <label className="label" htmlFor="name">Name</label>
        <input className="form-control mb1" type="text" id="name" value={formData.name} onChange={handleInputChange} />
        <label className="label" htmlFor="email">Email</label>
        <input className="form-control mb1" type="email" id="email" value={formData.email} onChange={handleInputChange} />
        <label className="label" htmlFor="phone">Phone</label>
        <input className="form-control mb1" type="tel" id="phone" value={formData.phone} onChange={handleInputChange} />
        <label className="label" htmlFor="message">Message</label>
        <textarea className="form-control mb2" id="message" value={formData.message} onChange={handleInputChange}></textarea>
        <div className="clearfix">
          <input className="btn btn--default float--right" value="Send" type="submit" />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
