import React, { useEffect } from 'react';
import './style.css';
import Header from './components/header/header.js';
import Headlines from './components/headlines/headlines.js';
import data from './data/data.js';

export default function App() {
  let newsHeadline = data.map((news) => news.description);
  console.log('DATA', data, newsHeadline);

  return (
    <>
      <h1>News App</h1>
      <Header />
      {newsHeadline.map((headline) => {
        return <Headlines headline={headline} />;
      })}
    </>
  );
}
