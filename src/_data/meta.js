module.exports = {
  url: process.env.URL || 'https://heimatverein.sustrum-moor.net/',
  siteName: 'Heimatverein SuMo',
  siteDescription:
    'Heimatverein Sustrum-Moor',
  siteType: 'Person', // schema
  locale: 'de_DE',
  lang: 'de',
  skipContent: 'Skip to content',
  author: 'Leonard Pohlmann', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: '', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: '', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#DD4462', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
    opengraph_default_alt:
      'Visible content: Eleventy starter based on workflow for Cube CSS, Every Layout, Design Tokens and Tailwind for uitility, based on the concepts explained in buildexcellentwebsit.es ', // alt text for default meta image
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'Heimatverein Sustrum Moor',
    description:
      'Heimatverein Sustrum Moor'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Leonard Pohlmann',
    street: 'Nord-Süd-Straße 10',
    city: 'Sustrum Moor',
    state: 'Niedersachsen',
    zip: '49762',
    mobileDisplay: '',
    mobileCall: '',
    email: 'mail@leonardp.info',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
