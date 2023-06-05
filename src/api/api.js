import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchContacts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

export const addContact = async (contact) => {
  try {
    // Dummy API call - Replace with your actual API endpoint
    const response = await axios.post(API_URL, contact);
    return response.data;
  } catch (error) {
    console.error('Error adding contact:', error);
    throw error;
  }
};

export const updateContact = async (id, contact) => {
  try {
    // Dummy API call - Replace with your actual API endpoint
    const response = await axios.put(`${API_URL}/${id}`, contact);
    return response.data;
  } catch (error) {
    console.error('Error updating contact:', error);
    throw error;
  }
};

export const deleteContact = async (id) => {
  try {
    // Dummy API call - Replace with your actual API endpoint
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
};
