import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav id="navigation">
      <section className="logo-nav">
        <h2 className="logo-nav__header">FavNotes</h2>
        <ul className="logo-nav__items">
          <li className="logo-nav__item"><NavLink exact to="/">twitters</NavLink></li>
          <li className="logo-nav__item"><NavLink to="/articles">articles</NavLink></li>
          <li className="logo-nav__item"><NavLink to='/notes'>notes</NavLink></li>
        </ul>
      </section>
      <button className="btn">new item</button>
    </nav>
  );
}

export default Navigation;