import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
// import Site from '../components/Stats/Site';

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about me"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2>
            <Link to="/stats">Stats</Link>
          </h2>
        </div>
      </header>
      <Personal />
      <div className="gif-container" style={{ textAlign: 'center', marginTop: '20px' }}>
        <img src="images\projects\travel_map.gif" alt="Countries Visited" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      {/* <Site /> */}
    </article>
  </Main>
);

export default Stats;
