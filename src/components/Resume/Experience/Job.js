import React from 'react';
import PropTypes from 'prop-types';
// import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

const Job = ({
  data: {
    name, position, url, location, Dates, summary, highlights,
  },
}) => (
  <article className="jobs-container">
    <header>
      <h4>
        {position}
      </h4>
      <p className="employer">
        <span className="employer-name">
          <a href={url}>{name}</a>
        </span>
        <span className="employer-details">
          {location}, {Dates}
        </span>
      </p>

    </header>
    {summary ? (
      <Markdown
        options={{
          overrides: {
            p: {
              props: {
                className: 'summary',
              },
            },
          },
        }}
      >
        {summary}
      </Markdown>
    ) : null}
    {highlights ? (
      <ul className="points">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    ) : null}
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    location: PropTypes.string,
    Dates: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default Job;
