import React, { useContext, useState } from 'react';
import { TwittersContext } from '../contexts/TwittersContext/TwittersContext';
import { AppContext } from '../contexts/AppContext/AppContext';
import tempImg from '../img/mountain.jpg';
import { useEffect } from 'react';

const NewFormTwitter = () => {
  const { addTwitt } = useContext(TwittersContext);
  const { setFormOff } = useContext(AppContext);

  const [name, setName] = useState('');
  const [twitterPage, setTwitterPage] = useState('');
  const [picture, setPicture] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    const image = pictureValidation();

    addTwitt(image, name, description, twitterPage);

    setName('');
    setTwitterPage('');
    setPicture('');
    setDescription('');
    setFormOff();
  }

  const pictureValidation = () => {
    const validationExtencions = ['.jpg', '.png', '.jpeg'];
    const index = picture.lastIndexOf('.');

    if (index === -1) {
      return tempImg
    } else {
      const extensione = picture.substr(index);

      console.log(validationExtencions.find(el => el === extensione));
      if (validationExtencions.find(el => el === extensione) !== undefined)
        return picture;
      else
        return tempImg;
    }
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

      <button className="btn btn-transparent">Add New Twitt</button>
    </form>
  );
}

export default NewFormTwitter;