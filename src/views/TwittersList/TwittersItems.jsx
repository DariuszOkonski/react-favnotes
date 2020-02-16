import React, { useContext } from 'react';
import { TwittersContext } from '../../contexts/TwittersContext/TwittersContext';
import TwitterItem from './TwitterItem';

const TwittersItems = () => {
  const { twitters } = useContext(TwittersContext);

  return (
    <div id="twittersItems">
      {
        twitters.map(twitter =>
          <TwitterItem key={twitter.id} {...twitter} />
        )
      }
    </div>
  );
}

export default TwittersItems;