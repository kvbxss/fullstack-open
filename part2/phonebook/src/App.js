import React, { useState } from 'react';
import SearchFilter from './SearchFilter';
import PersonForm from './PersonForm';
import Person from './Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123-4567890' },
    { name: 'Ada Lovelace', number: '987-6543210' },
    { name: 'Grace Hopper', number: '456-7890123' },
    { name: 'Linus Torvalds', number: '789-0123456' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (newName.trim() === '' || newNumber.trim() === '') {
      return; // Ignore empty name or number
    }

    const isDuplicate = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${newName} is already added to the phonebook!`);
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    setPersons([...persons, newPerson]);
    setNewName('');
    setNewNumber('');
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
      <h3>Add a new person</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h3>Numbers</h3>
      <ul>
        {filteredPersons.map((person, index) => (
          <Person key={index} name={person.name} number={person.number} />
        ))}
      </ul>
    </div>
  );
};

export default App;
