'use strict';

import React from 'react';  // eslint-disable-line no-unused-vars
import ReactDom from 'react-dom';

import GuestbookIndex from './components/GuestbookIndex.jsx';


ReactDom.render(
  <GuestbookIndex />,
  document.querySelector('.js-container')
);
