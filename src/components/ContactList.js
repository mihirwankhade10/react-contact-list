import React, { useEffect, useState } from 'react';
import { fetchContacts, updateContact, deleteContact } from '../api/api';
import './ContactList.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContactsData = async () => {
      try {
        const contactsData = await fetchContacts();
        setContacts(contactsData);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContactsData();
  }, []);

  const handleUpdateContact = async (id) => {
    try {
      const updatedContact = {
        name: 'Updated Name',
        email: 'updated@example.com',
        phone: '987-654-3210',
      };

      await updateContact(id, updatedContact);
      setContacts((prevContacts) =>
        prevContacts.map((contact) => {
          if (contact.id === id) {
            return { ...contact, ...updatedContact };
          }
          return contact;
        })
      );
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await deleteContact(id);
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== id)
      );
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className="contact-list-container">
      <h2>Contact List</h2>
      <ul className="contact-list">
        {contacts.map((contact) => (
          <li className="contact-item" key={contact.id}>
            {contact.name} - {contact.email} - {contact.phone}
            <button className="btn-update" onClick={() => handleUpdateContact(contact.id)}>
              Update
            </button>
            <button className="btn-delete" onClick={() => handleDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
