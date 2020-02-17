import React, { createContext, useState } from 'react';

export const NewItemContext = createContext();

const NewItemContextProvider = (props) => {
  const [newItem, setNewItem] = useState(false);

  const showNewItem = () => {
    setNewItem(true);
  }

  const hideNewItem = () => {
    setNewItem(false);
  }

  return (
    <NewItemContext.Provider value={{ newItem, showNewItem, hideNewItem }}>
      {props.children}
    </NewItemContext.Provider>
  );
}

export default NewItemContextProvider;