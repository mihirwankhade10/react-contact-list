import React from 'react';
import './App.css';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <div>
      <h1 className="app-heading">React-Contact-List</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default App;
