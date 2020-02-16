import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter } from 'react-router-dom';
import ViewContainer from './views/ViewContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />

        <ViewContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
