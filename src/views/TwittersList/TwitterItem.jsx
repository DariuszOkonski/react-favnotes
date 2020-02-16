import React from 'react';

const TwitterItem = ({ id, picture, name, description, twitterPage }) => {
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

        <button className="btn btn-transparent">remove</button>
      </div>
    </div>
  );
}

export default TwitterItem;