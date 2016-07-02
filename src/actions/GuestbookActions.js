'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher';
import requests from './requests';
import {API_HOST} from '../settings';


const GuestbookActions = {
  getList: (url=`${API_HOST}guestbooks/`) => {
    return Promise.resolve(
      requests.get(url)
    ).then((parsedJson) => {
      AppDispatcher.dispatch({
        actionType: 'GUESTBOOK/GET_LIST',
        data: parsedJson
      });
    });
  },
  create: (body={}) => {
    return Promise.resolve(
      requests.post(`${API_HOST}guestbooks/`, body)
    ).then((parsedJson) => {
      AppDispatcher.dispatch({
        actionType: 'GUESTBOOK/CREATE',
        data: parsedJson
      });
    });
  },
  update: (id, body={}) => {
    return Promise.resolve(
      requests.patch(`${API_HOST}guestbooks/${id}`, body)
    ).then((parsedJson) => {
      AppDispatcher.dispatch({
        actionType: 'GUESTBOOK/UPDATE',
        data: parsedJson
      });
    });
  },
  delete: (id) => {
    return Promise.resolve(
      requests.delete(`${API_HOST}guestbooks/${id}`)
    ).then(() => {
      AppDispatcher.dispatch({
        actionType: 'GUESTBOOK/DELETE',
        id: id
      });
    });
  }
};


export default GuestbookActions;
