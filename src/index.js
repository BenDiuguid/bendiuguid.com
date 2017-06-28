const main = () => {
  // Load custom tracking code lazily, so it's non-blocking.
  // Replace `./analytics` with either of the following if using one of the
  // other variations:
  // - `./analytics/autotrack.js`
  // - `./analytics/multiple-trackers.js`
  import('./analytics/base.js').then(analytics => analytics.init());

  // Dynamically load css
  dynamicLoadStylesheet('https://fonts.googleapis.com/css?family=Ubuntu');
  dynamicLoadStylesheet(
    'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css'
  );

  // Initate all other code paths here...
};

const dynamicLoadStylesheet = url => {
  const stylesheet = document.createElement('link');
  stylesheet.href = url;
  stylesheet.rel = 'stylesheet';
  document.getElementsByTagName('head')[0].appendChild(stylesheet);
};

// Start the app through its main entry point.
main();
