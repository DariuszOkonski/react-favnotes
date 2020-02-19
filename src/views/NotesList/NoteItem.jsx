import React, { useContext } from 'react';
import { NotesContext } from '../../contexts/NotesContext/NotesContext';

const NoteItem = ({ id, name, description }) => {
  const { removeNote } = useContext(NotesContext);

  return (
    <div id="noteItem">
      <div className="description">
        <h2 className="header">{name}</h2>
        <p className="paragraph">{description}</p>

        <button
          onClick={() => removeNote(id)}
          className="btn btn-transparent"
        >remove</button>
      </div>
    </div>
  );
}

export default NoteItem;