import React, { useState, useEffect } from 'react';
import { urlFor, clientApp } from '../../../client';
import submitForm from './Submitform';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBRadio}
from 'mdb-react-ui-kit';
import Select from 'react-select';
import './Registration.scss'



function Registration() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch the events from Sanity
        const query = '*[_type == "event"]';
        const fetchedEvents = await clientApp.fetch(query);

        // Update the state with the fetched events
        setEvents(fetchedEvents);
      } catch (error) {
        console.error('Error fetching events from Sanity:', error);
      }
    };

    fetchEvents();
  }, []);

  const options = events.map((event) => ({
    value: event.title, // Replace with the actual field name from the event schema
    label: event.title, // Replace with the actual field name from the event schema

  
  }));
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    gender: '',
    email: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      // Submit the form data to the backend
      const submissionId = await submitForm(formData);
      console.log('Form submitted successfully. Submission ID:', submissionId);

      // Reset the form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        birthday: '',
        email: '',
        phoneNumber: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <MDBContainer fluid>

      <MDBRow className='justify-content-center align-items-center m-5'>

        <MDBCard>
          <MDBCardBody className='px-4'>

            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form onSubmit={handleFormSubmit}>
            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' name='firstName' value={formData.firstName}
                    onChange={handleInputChange}/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' name='lastName' value={formData.lastName} 
                onChange={handleInputChange}/>
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form3' type='email' name='email' value={formData.email}
                onChange={handleInputChange}/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form4' type='tel' name='phoneNumber' value={formData.phoneNumber}
                onChange={handleInputChange}/>
              </MDBCol>

            </MDBRow>
            <MDBRow>
            <MDBCol md='6'>
              <MDBInput
                wrapperClass='mb-4'
                label='Birthday'
                size='lg'
                id='form5'
                type='date'
                name='birthday'
                value={formData.birthday}
                onChange={handleInputChange}
              />
            </MDBCol>
          </MDBRow>

{/*             <MDBRow>
              <MDBCol md='6'>
                <Select options={options} />
              </MDBCol>
            </MDBRow> */}
            
            <MDBBtn className='mb-4' size='lg' type="submit">Submit</MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>

      </MDBRow>
    
    </MDBContainer>
  );
}

export default Registration;