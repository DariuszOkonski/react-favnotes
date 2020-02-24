import React, { useState, useContext } from 'react';
import { ArticlesContext } from '../contexts/ArticlesContext/ArticlesContext';
import { AppContext } from '../contexts/AppContext/AppContext';

const NewFormArticle = () => {
  const { addArticle, editArticle } = useContext(ArticlesContext);
  const { setFormOff } = useContext(AppContext);

  const [name, setName] = useState('');
  const [twitterPage, setTwitterPage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addArticle(name, description, twitterPage);

    setName('')
    setTwitterPage('')
    setDescription('');
    setFormOff();
  }

  return (
    <form
      className="newForm"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Article name..."
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

      <textarea
        placeholder="Description..."
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button className="btn btn-transparent">Ann New Article</button>
    </form>
  );
}

export default NewFormArticle;