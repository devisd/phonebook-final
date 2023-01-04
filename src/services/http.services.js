import axios from 'axios';

export const getContacts = {
  getList: async function () {
    const { data } = await axios.get(
      'https://635570ff483f5d2df3b48ab4.mockapi.io/api/v1/contacts'
    );
    return data;
  },
};

export const removeContact = {
  removeCon: async id => {
    const { data } = await axios.delete(
      `https://635570ff483f5d2df3b48ab4.mockapi.io/api/v1/contacts/${id}`
    );
    return data;
  },
};

export const newContact = {
  addContact: async contactsData => {
    const { data } = await axios.post(
      'https://635570ff483f5d2df3b48ab4.mockapi.io/api/v1/contacts/',
      contactsData
    );
    return data;
  },
};
