const skills = [
  {
    title: 'R',
    competency: 5,
    category: ['Data Science', 'Computer Languages', 'Statistics'],
  },
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Computer Languages', 'Javascript'],
  },
  {
    title: 'D3',
    competency: 3,
    category: ['Web Development', 'Javascript', 'Data Visualization'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Data Science', 'Python', 'Computer Languages', 'Statistics'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Tensorflow + Keras + PyTorch',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Data Visualization',
    competency: 5,
    category: ['Data Science', 'Data Visualization'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Heroku',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Spark',
    competency: 4,
    category: ['Tools', 'Python'],
  },
  {
    title: 'tidyverse',
    competency: 5,
    category: ['R', 'Data Science'],
  },
  {
    title: 'shiny',
    competency: 5,
    category: ['R', 'Data Science', 'Tools', 'Web Development'],
  },
  {
    title: 'Markdown + Quarto',
    competency: 5,
    category: ['R', 'Data Science', 'Tools', 'Python'],
  },
  {
    title: 'Microsoft Office',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'LaTeX',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Earth Engine',
    competency: 3,
    category: ['Data Science', 'Tools', 'Python', 'Javascript'],
  },
  {
    title: 'ggplot2',
    competency: 5,
    category: ['R', 'Data Science', 'Data Visualization'],
  },
  {
    title: 'Stata',
    competency: 3,
    category: ['Statistics'],
  },
  {
    title: 'MySQL',
    competency: 3,
    category: ['Data Science', 'Computer Languages'],
  },
  {
    title: 'PostgreSQL',
    competency: 3,
    category: ['Data Science', 'Computer Languages'],
  },
  {
    title: 'GIT + GitHub',
    competency: 4,
    category: ['Tools', 'Computer Languages'],
  },
  {
    title: 'QGIS',
    competency: 3,
    category: ['Data Science', 'Computer Languages'],
  },
  {
    title: 'Dutch',
    competency: 5,
    category: ['Human Language'],
  },
  {
    title: 'English',
    competency: 5,
    category: ['Human Language'],
  },
  {
    title: 'French',
    competency: 2,
    category: ['Human Language'],
  },
  {
    title: 'Spanish',
    competency: 2,
    category: ['Human Language'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  // '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
