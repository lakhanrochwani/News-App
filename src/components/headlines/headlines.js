import React, { useState, useEffect } from 'react';

function Headlines(props) {
  // let [news, setNews] = useState([]);
  // // useEffect(() => {

  // // }, []);
  console.log(props.headline);
  return (
    <>
      <h3>{props.headline}</h3>
    </>
  );
}

export default Headlines;
