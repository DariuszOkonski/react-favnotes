import React, { Component } from 'react';
import NewFormTwitter from '../components/NewFormTwitter';
import NewFormArticle from '../components/NewFormArticle';
import NewFormNotes from '../components/NewFormNotes';

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

  displayForm = () => {
    if (this.state.twitter) {
      return (
        <NewFormTwitter />
      )
    } else if (this.state.article) {
      return (
        <NewFormArticle />
      )
    } else if (this.state.notes) {
      return (
        <NewFormNotes />
      )
    } else {
      return (
        <h3>Something went wrong</h3>
      )
    }
  }

  render() {
    const { twitter, article, notes, header } = this.state;

    return (
      <section id="newItem">

        <div className="itemBoard">
          <button
            className="btn btnClose"
            onClick={this.props.setFormOff}
          >x</button>

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


          <div className="application">
            {
              this.displayForm()
            }
          </div>

        </div>
      </section>
    );
  }
}

export default NewItem;