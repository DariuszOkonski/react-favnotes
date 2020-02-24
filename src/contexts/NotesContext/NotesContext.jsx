import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const NotesContext = createContext();

const NotesContextProvider = (props) => {
  const [notes, setNotes] = useState([
    { id: 1, name: 'Description 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat accusamus labore, dolorem cupiditate reiciendis! Iste delectus iure in exercitationem culpa maiores est dolor quaerat dignissimos, cupiditate obcaecati eos unde.' },
    { id: 2, name: 'Description 2', description: 'Lorem ipsum dolor sit amet.' },
    { id: 3, name: 'Description 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minima corrupti cupiditate delectus modi optio.' },
    { id: 4, name: 'Description 4', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem alias temporibus maiores placeat, quaerat et corporis ipsam porro esse ab.' },
  ]);

  const removeNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  }

  const addNote = (name, description) => {
    setNotes([...notes, { id: uuid(), name, description }]);
  }

  const editNote = (id, name, description) => {
    const editedElement = {
      id, name, description
    }

    const tempArr = notes.map(el => {
      if (el.id === id) {
        return editedElement;
      }
      return el;
    });

    setNotes(tempArr);
  }

  return (
    <NotesContext.Provider value={{ notes, removeNote, addNote, editNote }}>
      {props.children}
    </NotesContext.Provider>
  );
}




export default NotesContextProvider;