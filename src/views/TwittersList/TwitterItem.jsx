import React, { useContext } from 'react';
import { TwittersContext } from '../../contexts/TwittersContext/TwittersContext';

const TwitterItem = ({ id, picture, name, description, twitterPage }) => {
  const { removeTwitt } = useContext(TwittersContext);

  return (
    <div id="twitterItem">
      <div className="image">
        <img src={picture} alt={`${name}`} />
      </div>

      <div className="description">
        <h2 className="header">{name}</h2>
        <p className="paragraph">{description}</p>

        <button className="btn btn-transparent">
          <a href={twitterPage} target="_blank" rel="noopener noreferrer">visit twitter page</a>
        </button>

        <button onClick={() => removeTwitt(id)} className="btn btn-transparent">remove</button>
      </div>
    </div>
  );
}

export default TwitterItem;