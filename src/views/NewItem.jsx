import React, { Component } from 'react';

class NewItem extends Component {
  state = {
    twitter: true,
    article: false,
    notes: false,
    header: 'Add new Twitter account'
  }

  handleChange = (e) => {
    if (e.target.id === 'twitter') {
      this.setState({
        twitter: true,
        article: false,
        notes: false,
        header: 'Add new Twitter account'
      })
    } else if (e.target.id === 'article') {
      this.setState({
        twitter: false,
        article: true,
        notes: false,
        header: 'Add new Article'
      })
    } else if (e.target.id === 'notes') {
      this.setState({
        twitter: false,
        article: false,
        notes: true,
        header: 'Add new Note'
      })
    }
  }

  render() {
    const { twitter, article, notes, header } = this.state;

    return (
      <section id="newItem">

        <div className="itemBoard">
          <button className="btn">x</button>
          <h3 className="header">{header}</h3>

          <div className="noteOption">
            <label htmlFor="twitter">twitter:
              <input type="radio" name="radiobutton" id="twitter" checked={twitter} onChange={this.handleChange} />
            </label>

            <label htmlFor="article">article:
              <input type="radio" name="radiobutton" id="article" checked={article} onChange={this.handleChange} />
            </label>

            <label htmlFor="notes">notes:
              <input type="radio" name="radiobutton" id="notes" checked={notes} onChange={this.handleChange} />
            </label>
          </div>
        </div>

      </section>
    );
  }
}

export default NewItem;