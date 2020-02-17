import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter } from 'react-router-dom';
import ViewContainer from './views/ViewContainer';
import TwittersContextProvider from './contexts/TwittersContext/TwittersContext';
import NewItem from './views/NewItem';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navigation />

        <NewItem />

        <TwittersContextProvider>

          <ViewContainer />

        </TwittersContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
