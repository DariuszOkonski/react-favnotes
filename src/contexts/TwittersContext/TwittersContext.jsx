import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const TwittersContext = createContext();

const TwittersContextProvider = (props) => {
  const [twitters, setTwitters] = useState([
    { id: 1, picture: 'https://miro.medium.com/max/2400/1*2ysGC1u4jayrk3Uu3VG6Zg.jpeg', name: 'Michael Jackson', description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.', twitterPage: 'https://twitter.com/mjackson' },
    { id: 2, picture: 'https://pbs.twimg.com/profile_images/1097518581250613249/4poDd0IC_400x400.png', name: 'Kent C. Dodds', description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS', twitterPage: 'https://twitter.com/kentcdodds' },
    { id: 3, picture: 'https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/square_480/oapgW_Fp_400x400.jpg', name: 'Dan Abramov', description: 'Working on react.js.', twitterPage: 'https://twitter.com/dan_abramov' },
    { id: 4, picture: 'https://pbs.twimg.com/profile_images/1166030195834273794/pBb6hjVb_400x400.jpg', name: 'Ryan Florence', description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.', twitterPage: 'https://twitter.com/ryanflorence' },

  ])

  const removeTwitt = (id) => {
    setTwitters(twitters.filter(twitt => twitt.id !== id));
  }

  const addTwitt = (picture, name, description, twitterPage) => {
    setTwitters([...twitters, { id: uuid(), picture, name, description, twitterPage }])
  }

  const editTwitt = (id, name, picture, description, twitterPage) => {
    const editedElement = {
      id, name, picture, description, twitterPage
    }

    const tempArr = twitters.map(el => {
      if (el.id === id) {
        return editedElement;
      }
      return el;
    })

    setTwitters(tempArr);
  }

  return (
    <TwittersContext.Provider value={{ twitters, removeTwitt, addTwitt, editTwitt }}>
      {props.children}
    </TwittersContext.Provider>
  );
}

export default TwittersContextProvider;