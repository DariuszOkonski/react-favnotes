import React from 'react';

const NewFormTwitter = () => {
  return (
    <form className="newForm">
      <input type="text" placeholder="Twitter Name..." required />

      <input type="text" placeholder="Twitter Link..." required />

      <input type="text" placeholder="Image Url..." required />

      <textarea placeholder="Description..." required></textarea>

      <button className="btn btn-transparent">Add New Item</button>
    </form>
  );
}

export default NewFormTwitter;