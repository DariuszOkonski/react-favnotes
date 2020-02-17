import React from 'react';

const NewFormTwitter = () => {
  return (
    <form className="newForm">
      <input type="text" placeholder="Twitter Name..." />

      <input type="text" placeholder="Twitter Link..." />

      <input type="text" placeholder="Image Url..." />

      <textarea placeholder="Description..."></textarea>

      <button>Add New Item</button>
    </form>
  );
}

export default NewFormTwitter;