import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const ArticlesContext = createContext();

const ArticlesContextProvider = (props) => {
  const [articles, setArticles] = useState([
    { id: 1, name: 'Dan Abramov', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla tenetur voluptas repellendus corrupti laudantium alias cum dolorem, illum perferendis facere officiis at dolorum vero ea laborum et a aperiam doloremque.', twitterPage: 'https://twitter.com/dan_abramov' },
    { id: 2, name: 'Ryan Florence', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla tenetur voluptas repellendusLorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla tenetur voluptas repellendus corrupti laudantium alias cum dolorem, illum perferendis facere officiis at dolorum vero ea laborum et a aperiam doloremque.corrupti laudantium alias cum dolorem, illum perferendis facere officiis at dolorum vero ea laborum et a aperiam doloremque.', twitterPage: 'https://twitter.com/ryanflorence' },
  ]);

  const removeArticle = (id) => {
    setArticles(articles.filter(article => article.id !== id));
  }

  const addArticle = (name, description, twitterPage) => {
    setArticles([...articles, { id: uuid(), name, description, twitterPage }])
  }

  const editArticle = (id, name, description, twitterPage) => {
    const editedElement = {
      id, name, description, twitterPage
    }

    const tempArr = articles.map(el => {
      if (el.id === id) {
        return editedElement;
      }
      return el;
    });

    setArticles(tempArr);
  }

  return (
    <ArticlesContext.Provider value={{ articles, removeArticle, addArticle, editArticle }}>
      {props.children}
    </ArticlesContext.Provider>
  );
}

export default ArticlesContextProvider;