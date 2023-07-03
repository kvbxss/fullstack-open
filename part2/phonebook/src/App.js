import React, { useState } from 'react';

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
      <div>
        Search: <input value={searchQuery} onChange={handleSearchChange} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person, index) => (
          <li key={index}>
            {person.name} - {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
