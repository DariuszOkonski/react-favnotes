import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter } from 'react-router-dom';
import ViewContainer from './views/ViewContainer';
import TwittersContextProvider from './contexts/TwittersContext/TwittersContext';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navigation />
        <TwittersContextProvider>

          <ViewContainer />

        </TwittersContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
