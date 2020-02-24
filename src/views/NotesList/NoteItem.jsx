import React, { useContext } from 'react';
import { NotesContext } from '../../contexts/NotesContext/NotesContext';
import { AppContext } from '../../contexts/AppContext/AppContext';

const NoteItem = ({ id, name, description }) => {
  const { removeNote } = useContext(NotesContext);
  const { setFormNoteOn } = useContext(AppContext);

  return (
    <div id="noteItem">
      <div className="description">
        <h2 className="header">{name}</h2>
        <p className="paragraph">{description}</p>

        <button onClick={() => setFormNoteOn(id)} className="btn btn-transparent">edit</button>

        <button
          onClick={() => removeNote(id)}
          className="btn btn-transparent"
        >remove</button>
      </div>
    </div>
  );
}

export default NoteItem;