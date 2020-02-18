import React, { useContext, useState } from 'react';
import { TwittersContext } from '../contexts/TwittersContext/TwittersContext';

const NewFormTwitter = ({ setFormOff }) => {
  const { addTwitt } = useContext(TwittersContext);

  const [name, setName] = useState('');
  const [twitterPage, setTwitterPage] = useState('');
  const [picture, setPicture] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addTwitt(picture, name, description, twitterPage);

    setName('');
    setTwitterPage('');
    setPicture('');
    setDescription('');
    setFormOff();
  }

  return (
    <form className="newForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Twitter Name..."
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Twitter Link..."
        required
        value={twitterPage}
        onChange={(e) => setTwitterPage(e.target.value)}
      />

      <input
        type="text"
        placeholder="Image Url..."
        required
        value={picture}
        onChange={(e) => setPicture(e.target.value)}
      />

      <textarea
        placeholder="Description..."
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button className="btn btn-transparent">Add New Item</button>
    </form>
  );
}

export default NewFormTwitter;