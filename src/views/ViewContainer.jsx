import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TwittersItems from './TwittersList/TwittersItems';
import ArticlesItems from './ArticlesList/ArticlesItems';
import NotesItems from './NotesList/NotesItems';

const ViewContainer = () => {

  return (
    <section id="view-container">
      <Switch>
        <Route exact path="/" render={() => <TwittersItems />} />
        <Route exact path="/articles" render={() => <ArticlesItems />} />
        <Route exact path="/notes" render={() => <NotesItems />} />
        <Route render={() => <div>Error</div>} />
      </Switch>

    </section>
  );
}

export default ViewContainer;