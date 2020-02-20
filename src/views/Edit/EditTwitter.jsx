import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/AppContext/AppContext';
import { TwittersContext } from '../../contexts/TwittersContext/TwittersContext';

const EditTwitter = ({ id }) => {
  const { setFormTwitterOff } = useContext(AppContext);
  const { twitters, editTwitt } = useContext(TwittersContext);

  const [name, setName] = useState('');
  const [twitterPage, setTwitterPage] = useState('');
  const [picture, setPicture] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const twitt = twitters.find(twitt => twitt.id === id);

    setName(twitt.name);
    setTwitterPage(twitt.twitterPage);
    setPicture(twitt.picture);
    setDescription(twitt.description);
  }, [twitters, id])

  const handleSubmit = (e) => {
    e.preventDefault();

    editTwitt(id, name, picture, description, twitterPage);

    setName('');
    setTwitterPage('');
    setPicture('');
    setDescription('');
    setFormTwitterOff();
  }

  return (
    <section id="edit">
      <div className="editBoard">
        <button
          onClick={setFormTwitterOff}
          className="btn btnClose"
        >x</button>
        <h3 className="header">Edit Twitt: {id}</h3>

        <div className="application">
          <form
            className="newForm"
            onSubmit={handleSubmit}
          >
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

            <button className="btn btn-transparent">change twitt</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EditTwitter;