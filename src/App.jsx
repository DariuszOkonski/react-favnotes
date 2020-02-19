import React, { useState } from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter } from 'react-router-dom';
import ViewContainer from './views/ViewContainer';
import TwittersContextProvider from './contexts/TwittersContext/TwittersContext';
import NewItem from './views/NewItem';
import { AppContext } from './contexts/AppContext/AppContext';

function App() {
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
          <AppContext.Provider value={{ setFormOff }}>
            {
              isFormOn ? <NewItem setFormOff={setFormOff} /> : null
            }
          </AppContext.Provider>

          <ViewContainer />
        </TwittersContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
