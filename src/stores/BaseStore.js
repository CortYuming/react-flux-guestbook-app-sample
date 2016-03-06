'use strict';

import {EventEmitter} from 'events';

import AppDispatcher from '../dispatchers/AppDispatcher';


class BaseStore extends EventEmitter {
  constructor() {
    super();
    AppDispatcher.register(this._onAction.bind(this));
    this.CHANGE_EVENT = 'change';

    this._state = {};
  }

  _getState() {
    return ({});
  }

  _onAction(action) {
    switch (action.actionType) {
      case 'NAME/ACTION':
        break;
    }

    this.emitChange();
  }

  emitChange() {
    this.emit(this.CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(this.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(this.CHANGE_EVENT, callback);
  }

  update(state_name, data) {
    this._state[state_name].forEach(state => {
      if (data.id === state.id) {
        Object.keys(data).map(index => state[index] = data[index]);
      }
    });
  }

  delete(state_name, id) {
    this._state[state_name] = this._state[state_name].filter(state => state.id !== id);
  }

}


export default BaseStore;
