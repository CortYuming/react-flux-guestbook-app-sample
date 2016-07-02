'use strict';


const requests = {
  get: (url) => {
    return fetch(
      url
    ).then((response) => {
      return response.json();
    }).catch((error) => {
      console.error(error);
    });
  },
  post: (url, body) => {
    return fetch(
      url,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    ).then((response) => {
      if (response.status !== 201) {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response.json();
    }).catch((error) => {
      console.error(error);
    });
  },
  patch: (url, body) => {
    return fetch(
      url,
      {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    ).then((response) => {
      if (response.status !== 200) {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response.json();
    }).catch((error) => {
      console.error(error);
    });
  },
  delete: (url) => {
    return fetch(
      url,
      {method: 'DELETE'}
    ).then((response) => {
      if (response.status !== 200) {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }).catch((error) => {
      console.error(error);
    });
  }
};


export default requests;
