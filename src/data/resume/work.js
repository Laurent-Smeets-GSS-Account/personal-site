/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'World Bank',
    position: 'Data Science Consultant',
    url: 'https://www.worldbank.org/',
    location: 'Remote',
    Dates: '2022 - Present',
    summary: 'I held various roles as a Data Scientist at the World Bank, primarily focusing on automating processes and making analyses available via open-source code. I assisted in automating the creation of the 2024 [Country Gender Landscapes](https://www.worldbank.org/en/topic/gender/brief/country-gender-landscapes) in R. I led the development of a codebase and algorithms to automatically clean and match data from multiple large databases (300M+ entries) for the Global Digital Divides Project and Technology and Trade project (paper forthcoming). I also created an R Shiny–based Fiscal Microsimulation Tool for the CEQ Lab to model tax reform impacts on poverty and inequality in Georgia and soon to be adapted for Ghana, Azerbaijan, and Uzbekistan.',
  },
  {
    name: 'Ghana Statistical Service (GSS)',
    position: 'Data Science Lead',
    url: 'https://www.statsghana.gov.gh/',
    location: 'Accra, Ghana',
    Dates: '2022 - 2024',
    summary: 'I assisted in setting up and led the Data Science Unit at the Ghana Statistical Service (GSS), supervising a team of nine data scientists responsible for leveraging non-traditional data sources to produce official statistics, automate statistical workflows, and modernize data processes. Projects included launching an online StatsBank for disseminating GSS statistics; introducing a geospatial platform for publishing gridded census data; utilizing large language models (LLMs) for automated ISIC/ISCO code classification; integrating drone imagery to assess marine litter; implementing a Reproducible Analytical Pipeline (RAP) for regular CPI releases; and applying Automatic Identification System (AIS) data as a proxy for trade flow.',
    highlights: [
      'Tracey Li, Rachel Bowers, Omar Seidu, Gloria Akoto-Bamfo, David Bessah, Victor Owusu, Laurent Smeets (2021). Analysis of call detail records to inform the COVID‑19 response in Ghana—opportunities and challenges. Data & Policy 3, Cambridge University Press.',
      'Abigail Barenblitt, Amanda Payton, David Lagomasino, Lola Fatoyinbo, Kofi Asare, Kenneth Aidoo, Hugo Pigott, Charles Kofi Som, Laurent Smeets, Omar Seidu, Danielle Wood (2022). The large footprint of small-scale artisanal gold mining in Ghana. Science of The Total Environment 781, p. 146644.',
    ],
  },
  {
    name: 'UNFPA',
    position: 'Data Science Consultant',
    url: 'https://www.unfpa.org/',
    location: 'Abuja, Nigeria',
    Dates: '2022',
    summary: 'Developed automated fuzzy-matching and machine learning methods to link data from the Nigeria Census with the post-enumeration survey (PES) for the upcoming Nigeria Population and Housing Census.',
  },
  {
    name: 'GOPA Group Luxembourg',
    position: 'Data Science Consultant and Workstream Lead',
    url: 'https://www.gopa.lu/',
    location: 'Remote',
    Dates: '2022',
    summary: 'Developed a use case leveraging novel data sources to generate EU-wide urban passenger mobility statistics for Eurostat under the Data Landscaping project, “Traffic and Mobility Data Sources for Official Statistics.”',
  },
  {
    name: 'Ghana Statistical Service (GSS)',
    position: 'ODI Fellow and Data Scientist',
    url: 'https://www.statsghana.gov.gh/',
    location: 'Accra, Ghana',
    Dates: '2019 - 2022',
    summary: 'Facilitated the modernization and digitalization of price statistics (primarily consumer inflation) by streamlining data collection, calculation, quality assurance, and dissemination. I also supported and trained various GSS departments in adopting open-source software solutions (R, Python, JavaScript libraries), helping the organization transition away from proprietary tools.',
  },
  {
    name: 'Statistics Netherlands (CBS)',
    position: 'Research Intern',
    url: 'https://www.statsghana.gov.gh/',
    location: 'The Hague, Netherlands"',
    Dates: '2018 - 2019',
    summary: 'Worked on automatic transport mode classification from GPS data using machine learning models, detailed in [Automatic Travel Mode Prediction in a National Travel Survey (Laurent Smeets, Peter Lugtig, Barry Schouten, CBS Discussion Paper, 2019)](https://www.cbs.nl/‑/media/_pdf/2019/51/dp‑smeets‑lugtig‑schouten‑‑‑vervoermiddelpredictie.pdf).',
  },
  {
    name: 'Utrecht University',
    position: 'Research Assistant',
    url: 'https://www.rensvandeschoot.com/',
    location: 'Utrecht, Netherlands',
    Dates: '2018 - 2019',
    summary: 'Developed over twenty tutorials and online teaching materials on Bayesian analyses for Prof. Rens van de Schoot, including authoring online content for a book on multilevel modeling. Additionally, created an R Shiny app to assist users in defining priors for Bayesian linear regression using the concept of the [plausible parameter space](https://zenodo.org/records/4059418).',
  },
  {
    name: 'Embassy of the Kingdom of the Netherlands',
    position: 'Intern',
    url: 'https://www.statsghana.gov.gh/',
    location: 'Kigali, Rwanda',
    Dates: '2016 - 2017',
    summary: 'Supported multiple private sector development programmes and analysed investment opportunities for Dutch firms in Rwanda',
  },
];

export default work;
