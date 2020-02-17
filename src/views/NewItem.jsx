import React, { Component } from 'react';

class NewItem extends Component {
  headerInfo = {
    twitter: 'Add new Twitter account',
    article: 'Add new Article',
    notes: 'Add new Note'
  };
  state = {
    twitter: true,
    article: false,
    notes: false,
    header: ''
  }

  componentDidMount() {
    this.setState({
      header: this.headerInfo.twitter
    })
  }

  handleChange = (e) => {
    this.setState({
      twitter: false,
      article: false,
      notes: false
    });

    this.setState({
      [e.target.id]: true,
      header: this.headerInfo[e.target.id]
    });

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