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
        I’m a data nerd who thrives at the intersection of data science,
        official statistics, policy, and development.
        Think of me as the one who brings all those circles together in
        a Venn diagram—using innovative tools and out-of-the-box data
        sources to turn problems into opportunities for growth and change.
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
