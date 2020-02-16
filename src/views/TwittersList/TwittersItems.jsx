import React, { useContext } from 'react';
import { TwittersContext } from '../../contexts/TwittersContext/TwittersContext';

const TwittersItems = () => {
  const { twitters } = useContext(TwittersContext);

  console.log(twitters)
  return (
    <div id="twittersItems">
      <h1>TwittersItems</h1>
      <h1>TwittersItems</h1>
    </div>
  );
}

export default TwittersItems;