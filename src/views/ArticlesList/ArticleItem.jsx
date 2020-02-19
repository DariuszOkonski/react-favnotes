import React, { useContext } from 'react';
import { ArticlesContext } from '../../contexts/ArticlesContext/ArticlesContext';

const ArticleItem = ({ id, name, description, twitterPage }) => {
  const { removeArticle } = useContext(ArticlesContext);

  return (
    <div id="articleItem">
      <div className="description">
        <h2 className="header">{name}</h2>
        <p className="paragraph">{description}</p>

        <button className="btn btn-transparent">
          <a href={twitterPage} target="_blank" rel="noopener noreferrer">visit twitter page</a>
        </button>

        <button
          onClick={() => removeArticle(id)}
          className="btn btn-transparent"
        >remove</button>
      </div>
    </div>
  );
}

export default ArticleItem;