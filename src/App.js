import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import Header from './components/header/header.js';
import Headlines from './components/headlines/headlines.js';
import Details from './components/detail/detail.js';
import data from './data/data.js';

export default function App() {
  let newsHeadline = data.map((news) => news.title);
  
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Headlines headlines={newsHeadline} />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
