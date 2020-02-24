import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/AppContext/AppContext';
import { ArticlesContext } from '../../contexts/ArticlesContext/ArticlesContext';

const EditArticle = ({ id }) => {
  const { setFormArticleOff } = useContext(AppContext);
  const { articles, editArticle } = useContext(ArticlesContext);

  const [name, setName] = useState('');
  const [twitterPage, setTwitterPage] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const article = articles.find(twitt => twitt.id === id);

    setName(article.name);
    setTwitterPage(article.twitterPage);
    setDescription(article.description);
  }, [articles, id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    editArticle(id, name, description, twitterPage);

    setName('');
    setTwitterPage('');
    setDescription('');
    setFormArticleOff();
  }

  return (
    <section id="edit">
      <div className="editBoard">
        <button
          onClick={setFormArticleOff}
          className="btn btnClose"
        >x</button>
        <h3 className="header">Edit Article: {id}</h3>

        <div className="application">
          <form
            className="newForm"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Article Name..."
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Article Link..."
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

            <button className="btn btn-transparent">change article</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EditArticle;