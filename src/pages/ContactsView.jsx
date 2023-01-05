import React from 'react';
import Form from 'components/Form';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';

const ContactsView = () => {
  return (
    <>
      <h1>Contacts Page</h1>

      <div
        style={{
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
          padding: 50,
        }}
      >
        <Form />
        <Filter />
        <h2>Contacts</h2>
        <Contacts />
      </div>
    </>
  );
};

export default ContactsView;
