import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data.js';

function Headline({ headline, id }) {
  let newsDetail = data.filter((news) => news.title === headline);
  console.log('Details', newsDetail);
  return (
    <>
      <Link to={`/details/${id}`}>
        <h3>{headline}</h3>
      </Link>
    </>
  );
}

export default Headline;
