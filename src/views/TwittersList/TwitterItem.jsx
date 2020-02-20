import React, { useContext } from 'react';
import { TwittersContext } from '../../contexts/TwittersContext/TwittersContext';
import { AppContext } from '../../contexts/AppContext/AppContext';

const TwitterItem = ({ id, picture, name, description, twitterPage }) => {
  const { removeTwitt } = useContext(TwittersContext);
  const { setFormTwitterOn } = useContext(AppContext);

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

        <button onClick={() => setFormTwitterOn(id)} className="btn btn-transparent">edit</button>
        <button onClick={() => removeTwitt(id)} style={{ color: 'white' }} className="btn">remove</button>
      </div>
    </div>
  );
}

export default TwitterItem;