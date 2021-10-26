import React, { useState, useEffect } from 'react';
import Headline from '../headline/headline.js';

function Headlines(props) {
  const renderHeadlines = props.headlines.map((headline, index) => {
    return <Headline key={index} id={index} headline={headline} />;
  });
  return (
    <>
      <h2>Headlines of Today</h2>
      {renderHeadlines}
    </>
  );
}

export default Headlines;
