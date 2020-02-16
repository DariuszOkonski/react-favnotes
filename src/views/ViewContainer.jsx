import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TwittersItems from './TwittersList/TwittersItems';

const ViewContainer = () => {
  return (
    <section id="view-container">
      <Switch>
        <Route exact path="/" component={TwittersItems} />
        <Route exact path="/articles" render={() => <div>Articles</div>} />
        <Route exact path="/notes" render={() => <div>Notes</div>} />
        <Route render={() => <div>Error</div>} />
      </Switch>

    </section>
  );
}

export default ViewContainer;