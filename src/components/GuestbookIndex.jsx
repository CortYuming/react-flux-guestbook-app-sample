'use strict';

import React from 'react';

import GuestbookStore from '../stores/GuestbookStore';
import GuestbookActions from '../actions/GuestbookActions';


function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}


class Guestbook extends React.Component {
  render() {
    let guestbook = this.props.guestbook;

    return (
      <li>
        <input
           defaultValue={guestbook.comment}
           id={guestbook.id}
           size='60'
           onInput={this._onUpdateInput.bind(this)}
           />
        <button
           id={guestbook.id}
           onClick={this._onDeleteClick.bind(this)}
           >
          Delete
        </button>
      </li>
    );
  }

  _onUpdateInput(event) {
    GuestbookActions.update(
      this.props.guestbook.id,
      {comment: event.target.value}
    );
  }

  _onDeleteClick() {
    GuestbookActions.delete(this.props.guestbook.id);
  }
}


class Guestbooks extends React.Component {
  render() {
    let guestbooks = this.props.guestbooks;
    let guestbook_components;

    if (isEmpty(guestbooks)) {
      return null;
    } else {
      guestbook_components = guestbooks.slice().reverse().map((guestbook) => {
        return <Guestbook key={guestbook.id} guestbook={guestbook} />;
      });
    }

    return (
      <ul>
        {guestbook_components}
      </ul>
    );
  }
}


class GuestbookIndex extends React.Component {
  constructor() {
    super();
    this.state = GuestbookStore._getState();

    GuestbookActions.getList();
  }

  componentDidMount() {
    GuestbookStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    GuestbookStore.removeChangeListener(this._onChange.bind(this));
  }

  render() {
    let guestbooks = this.state.guestbooks;

    return (
      <div>
        <h2>Guestbook</h2>

        <section>
          <input
             ref='input'
             placeholder='Please enter comments.'
             size='60'
             onKeyDown={this._onEnterKeyDown.bind(this)}
             />
          <button
             onClick={this._onAddClick.bind(this)}
             >
            Add
          </button>
        </section>

        <Guestbooks guestbooks={guestbooks} />
      </div>
    );
  }

  _onChange() {
    this.setState(GuestbookStore._getState());
  }

  _onAddClick() {
    let value = this.refs.input.value;
    if (value) {
      GuestbookActions.create({comment: this.refs.input.value});
      this.refs.input.value = '';
    }
  }

  _onEnterKeyDown(event) {
    const ENTER_KEY_CODE = 13;

    if (event.keyCode === ENTER_KEY_CODE) {
      this._onAddClick();
    }
  }

}


export default GuestbookIndex;
