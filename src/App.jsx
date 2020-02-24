import React, { useState, Fragment } from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter } from 'react-router-dom';
import ViewContainer from './views/ViewContainer';
import TwittersContextProvider from './contexts/TwittersContext/TwittersContext';
import NewItem from './views/NewItem';
import { AppContext } from './contexts/AppContext/AppContext';
import ArticlesContextProvider from './contexts/ArticlesContext/ArticlesContext';
import NotesContextProvider from './contexts/NotesContext/NotesContext';
import EditTwitter from './views/Edit/EditTwitter';
import EditArticle from './views/Edit/EditArticle';
import EditNote from './views/Edit/EditNote';

function App() {
  const [id, setId] = useState(null);

  const [twitter, setTwitter] = useState(false);
  const setFormTwitterOn = (id) => {
    setTwitter(true)
    setId(id);
  }
  const setFormTwitterOff = () => {
    setTwitter(false);
    setId(null);
  }

  const [article, setArticle] = useState(false);
  const setFormArticleOn = (id) => {
    setArticle(true);
    setId(id);
  }
  const setFormArticleOff = () => {
    setArticle(false);
    setId(null);
  }

  const [note, setNote] = useState(false);
  const setFormNoteOn = (id) => {
    setNote(true);
    setId(id);
  }
  const setFormNoteOff = () => {
    setNote(false);
    setId(null);
  }

  const [isFormOn, setIsFormOn] = useState(false);
  const setFormOn = () => {
    setIsFormOn(true);
  }
  const setFormOff = () => {
    setIsFormOn(false);
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>

      <div className="App">
        <Navigation setFormOn={setFormOn} />

        <TwittersContextProvider>
          <ArticlesContextProvider>
            <NotesContextProvider>

              <AppContext.Provider value={{ setFormOff, setFormTwitterOn, setFormTwitterOff, setFormArticleOn, setFormArticleOff, setFormNoteOn, setFormNoteOff }}>
                <Fragment>
                  {
                    isFormOn ? <NewItem setFormOff={setFormOff} /> : null
                  }
                </Fragment>
                <Fragment>
                  {
                    twitter ? <EditTwitter id={id} /> : null
                  }
                  {
                    article ? <EditArticle id={id} /> : null
                  }
                  {
                    note ? <EditNote id={id} /> : null
                  }
                </Fragment>


                <ViewContainer />
              </AppContext.Provider>

            </NotesContextProvider>
          </ArticlesContextProvider>
        </TwittersContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
