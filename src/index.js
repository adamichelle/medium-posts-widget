import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './Widget';

const el = document.getElementById('medium-posts-widget');
const rssFeedLink = el.getAttribute('data-medium-rss')
ReactDOM.render(<Widget mediumRSSFeedLink={rssFeedLink} />, el);

