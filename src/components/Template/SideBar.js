import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Laurent Smeets</h2>
        <p>
          <a href="mailto:laurent.smeets@live.nl">laurent.smeets@live.nl</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Laurent. I am a{' '}
        proud data nerd who works at the center of a Venn diagram
        connecting data science, policy, statistics and development.
        For over 7 years, I’ve explored this space both professionally
        and out of personal passion, using innovative tools and non-traditional
        data sources to tackle complex problems with creativity.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy;Laurent Smeets <Link to="/">laurentsmeets.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
