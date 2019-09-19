import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './Widget';
import * as serviceWorker from './serviceWorker';

const el = document.getElementById('medium-posts-widget');
const rssFeedLink = el.getAttribute('data-medium-rss')
ReactDOM.render(<Widget mediumRSSFeedLink={rssFeedLink} />, el);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
