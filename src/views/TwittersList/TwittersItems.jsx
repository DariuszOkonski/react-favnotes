import React from 'react';
import TwitterItem from './TwitterItem';
import EmptyDisplay from '../../components/EmptyDisplay';

const TwittersItems = ({ twitters }) => {

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