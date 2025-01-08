import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Laurent Smeets's personal website. Traveling Data Scientist"
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            Hello! Welcome on my online resume.
            I am life-long traveller with a dream to visit every country in the world and
            a passion for all things data.
            Currently looking for interesting data science work.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, view <Link to="/stats">some statistics</Link>, or{' '}
        {/* <Link to="/projects">projects</Link>,{' '} */}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
