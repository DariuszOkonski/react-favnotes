import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TwittersItems from './TwittersList/TwittersItems';
import ArticleItem from './ArticlesList/ArticleItem';
import NoteItem from './NotesList/NoteItem';

const ViewContainer = () => {

  return (
    <section id="view-container">
      <Switch>
        <Route exact path="/" render={() => <TwittersItems />} />
        <Route exact path="/articles" render={() => <ArticleItem />} />
        <Route exact path="/notes" render={() => <NoteItem />} />
        <Route render={() => <div>Error</div>} />
      </Switch>

    </section>
  );
}

export default ViewContainer;