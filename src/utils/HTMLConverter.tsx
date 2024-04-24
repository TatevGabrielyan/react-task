import ReactDOMServer from 'react-dom/server';
import React from 'react';

const convertToHTML = (component: React.ReactElement) => {
  const html = ReactDOMServer.renderToStaticMarkup(component);
  return html;
};

export default convertToHTML;
