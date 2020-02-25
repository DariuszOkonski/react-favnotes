import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const NotesContext = createContext();

const NotesContextProvider = (props) => {
  const [notes, setNotes] = useState([
    { id: 1, name: 'Note 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat accusamus labore, dolorem cupiditate reiciendis! Iste delectus iure in exercitationem culpa maiores est dolor quaerat dignissimos, cupiditate obcaecati eos unde.' },
    { id: 2, name: 'Note 2', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla tenetur voluptas repellendus corrupti laudantium alias cum dolorem, illum perferendis facere officiis at dolorum vero ea laborum et a aperiam doloremque.' },
    { id: 3, name: 'Note 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minima Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla tenetur voluptas repellendus corrupti laudantium alias cum dolorem, illum perferendis facere officiis at dolorum vero ea laborum et a aperiam doloremque. corrupti cupiditate delectus modi optio.' },
    { id: 4, name: 'Note 4', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem alias temporibus maiores placeat, quaerat et corporis ipsam porro esse ab.' },
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