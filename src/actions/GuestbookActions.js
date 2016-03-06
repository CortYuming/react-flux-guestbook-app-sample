'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher';
import http from './http';
import {API_HOST} from '../settings';


const GuestbookActions = {
  getList: (url=`${API_HOST}guestbooks/`) => {
    Promise.resolve(
      http.get(url)
    ).then((parsedJson) => {
      AppDispatcher.dispatch({
        actionType: 'GUESTBOOK/GET_LIST',
        data: parsedJson
      });
    });
  },
  create: (body={}) => {
    Promise.resolve(
      http.post(`${API_HOST}guestbooks/`, body)
    ).then((parsedJson) => {
      AppDispatcher.dispatch({
        actionType: 'GUESTBOOK/CREATE',
        data: parsedJson
      });
    });
  },
  update: (id, body={}) => {
    Promise.resolve(
      http.patch(`${API_HOST}guestbooks/${id}`, body)
    ).then((parsedJson) => {
      AppDispatcher.dispatch({
        actionType: 'GUESTBOOK/UPDATE',
        data: parsedJson
      });
    });
  },
  delete: (id) => {
    Promise.resolve(
      http.delete(`${API_HOST}guestbooks/${id}`)
    ).then(() => {
      AppDispatcher.dispatch({
        actionType: 'GUESTBOOK/DELETE',
        id: id
      });
    });
  }
};


export default GuestbookActions;
