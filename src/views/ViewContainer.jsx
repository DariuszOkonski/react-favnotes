import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TwittersItems from './TwittersList/TwittersItems';
import NoteItem from './NotesList/NoteItem';
import ArticlesItems from './ArticlesList/ArticlesItems';

const ViewContainer = () => {

  return (
    <section id="view-container">
      <Switch>
        <Route exact path="/" render={() => <TwittersItems />} />
        <Route exact path="/articles" render={() => <ArticlesItems />} />
        <Route exact path="/notes" render={() => <NoteItem />} />
        <Route render={() => <div>Error</div>} />
      </Switch>

    </section>
  );
}

export default ViewContainer;