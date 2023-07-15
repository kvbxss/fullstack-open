import React from "react";
import personService from "../services/notes";

const Person = ({ person, handleDelete }) => {
  const handleDeleteClick = () => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(person.id)
        .then(() => {
          handleDelete(person.id);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <li>
      {person.name} {person.number}
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
};

export default Person;
