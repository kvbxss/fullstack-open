import React, { useState, useEffect } from "react";
import SearchFilter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

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

    if (newName.trim() === "" || newNumber.trim() === "") {
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

    axios.post("http://localhost:3001/persons", newPerson)
    .then((response) => {
      setPersons([...persons, response.data]);
      setNewName("");
      setNewNumber("");
    })
    .catch((error) => {
      console.log(error);
    });
    
    setPersons([...persons, newPerson]);
    setNewName("");
    setNewNumber("");
  };

  

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  };

 
  

  useEffect(hook, []);
  console.log("render", persons.length, "persons");


  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
      />
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
