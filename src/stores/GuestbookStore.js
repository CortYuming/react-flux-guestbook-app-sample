'use strict';

import BaseStore from './BaseStore';


class GuestbookStore extends BaseStore {
  constructor() {
    super();

    this._state = {
      guestbooks: [],
    };
  }

  _getState() {
    return (this._state);
  }

  _onAction(action) {
    switch (action.actionType) {
      case 'GUESTBOOK/GET_LIST':
        this._state.guestbooks = action.data;
        break;
      case 'GUESTBOOK/CREATE':
        this._state.guestbooks.push(action.data);
        break;
      case 'GUESTBOOK/UPDATE':
        this.update('guestbooks', action.data);
        break;
      case 'GUESTBOOK/DELETE':
        this.delete('guestbooks', action.id);
        break;
    }

    this.emitChange();
  }

}


export default new GuestbookStore();
