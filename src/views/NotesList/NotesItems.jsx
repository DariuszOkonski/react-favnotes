import React, { useContext } from 'react';
import { NotesContext } from '../../contexts/NotesContext/NotesContext';
import EmptyDisplay from '../../components/EmptyDisplay';
import NoteItem from './NoteItem';

const NotesItems = () => {
  const { notes } = useContext(NotesContext);

  return notes.length ? (
    <div>
      {
        notes.map(note =>
          <NoteItem key={note.id} {...note} />
        )
      }
    </div>
  ) : (
      <EmptyDisplay />
    )
}

export default NotesItems;