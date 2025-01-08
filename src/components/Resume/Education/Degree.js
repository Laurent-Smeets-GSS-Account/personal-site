import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({
  data: {
    degree, school, link, year, highlights,
  },
}) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{degree}</h4>
      <p className="school">
        <a href={link}>{school}</a>, {year}
      </p>
    </header>
    {highlights ? (
      <ul className="points">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    ) : null}
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Degree;
