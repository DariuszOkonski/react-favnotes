import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import TwittersItems from './TwittersList/TwittersItems';
import { TwittersContext } from '../contexts/TwittersContext/TwittersContext';

const ViewContainer = () => {
  const { twitters } = useContext(TwittersContext);

  return (
    <section id="view-container">
      <Switch>
        <Route exact path="/" render={() => <TwittersItems twitters={twitters} />} />
        <Route exact path="/articles" render={() => <div>Articles</div>} />
        <Route exact path="/notes" render={() => <div>Notes</div>} />
        <Route render={() => <div>Error</div>} />
      </Switch>

    </section>
  );
}

export default ViewContainer;