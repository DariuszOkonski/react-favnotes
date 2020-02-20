import React, { useState, useContext } from 'react';
import { NotesContext } from '../contexts/NotesContext/NotesContext';
import { AppContext } from '../contexts/AppContext/AppContext';

const NewFormNotes = () => {
  const { addNote } = useContext(NotesContext);
  const { setFormOff } = useContext(AppContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addNote(name, description);

    setName('');
    setDescription('');
    setFormOff();
  }
  return (
    <form
      className="newForm"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Note name..."
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Description..."
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button className="btn btn-transparent">Add New Note</button>
    </form>
  );
}

export default NewFormNotes;