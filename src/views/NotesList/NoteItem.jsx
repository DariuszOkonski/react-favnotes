import React from 'react';

const NoteItem = () => {
  return (
    <div id="noteItem">
      <div className="description">
        <h2 className="header">Note Name</h2>
        <p className="paragraph">Note Description</p>

        <button className="btn btn-transparent">remove</button>
      </div>
    </div>
  );
}

export default NoteItem;