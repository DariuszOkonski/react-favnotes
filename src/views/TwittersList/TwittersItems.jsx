import React, { useContext } from 'react';
import TwitterItem from './TwitterItem';
import EmptyDisplay from '../../components/EmptyDisplay';
import { TwittersContext } from '../../contexts/TwittersContext/TwittersContext';

const TwittersItems = () => {
  const { twitters } = useContext(TwittersContext);

  return twitters.length ? (
    <div id="twittersItems">
      {
        twitters.map(twitter =>
          <TwitterItem key={twitter.id} {...twitter} />
        )
      }
    </div>
  ) : (
      <EmptyDisplay />
    );
}

export default TwittersItems;