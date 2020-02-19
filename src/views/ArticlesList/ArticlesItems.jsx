import React, { useContext } from 'react';
import { ArticlesContext } from '../../contexts/ArticlesContext/ArticlesContext';
import EmptyDisplay from '../../components/EmptyDisplay';
import ArticleItem from './ArticleItem';

const ArticlesItems = () => {
  const { articles } = useContext(ArticlesContext)

  return articles.length ? (
    <div id="articlesItems">
      {
        articles.map(article =>
          <ArticleItem key={article.id} {...article} />
        )
      }
    </div>
  ) : (
      <EmptyDisplay />
    );
}

export default ArticlesItems;