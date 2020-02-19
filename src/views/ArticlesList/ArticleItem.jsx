import React from 'react';

const ArticleItem = () => {
  return (
    <div id="articleItem">
      <div className="description">
        <h2 className="header">Name</h2>
        <p className="paragraph">Description</p>

        <button className="btn btn-transparent">
          <a href="#" target="_blank" rel="noopener noreferrer">visit twitter page</a>
        </button>

        <button className="btn btn-transparent">remove</button>
      </div>
    </div>
  );
}

export default ArticleItem;