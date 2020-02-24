import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/AppContext/AppContext';
import { NotesContext } from '../../contexts/NotesContext/NotesContext';

const EditNote = ({ id }) => {
  const { setFormNoteOff } = useContext(AppContext);
  const { notes, editNote } = useContext(NotesContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const newNote = notes.find(note => note.id === id);

    setName(newNote.name);
    setDescription(newNote.description);
  }, [id, notes]);

  const handleSubmit = (e) => {
    e.preventDefault();

    editNote(id, name, description);

    setName('');
    setDescription('');
    setFormNoteOff();
  }

  return (
    <section id="edit">
      <div className="editBoard">
        <button
          onClick={setFormNoteOff}
          className="btn btnClose"
        >x</button>
        <h3 className="header">Edit Note: {id}</h3>

        <div className="application">
          <form
            className="newForm"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Article Name..."
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

            <button className="btn btn-transparent">change article</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EditNote;