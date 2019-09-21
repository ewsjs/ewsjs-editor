const Bundler = require('parcel-bundler');
const rimraf = require('rimraf');
const Path = require('path');
const process = require('process');
const fg = require('fast-glob');

process.env.NODE_ENV="production"
const buildDir = Path.resolve("build/renderer");
console.log(buildDir);

rimraf.sync(buildDir);

// Bundler options
const options = {
  outDir: './build/renderer', // The out directory to put the build files in, defaults to dist
  // outFile: 'index.html', // The name of the outputFile
  publicUrl: './/', // The url to serve on, defaults to '/'
  watch: false, // Whether to watch the files and rebuild them on change, defaults to process.env.NODE_ENV !== 'production'
  cache: true, // Enabled or disables caching, defaults to true
  cacheDir: '.cache', // The directory cache gets put in, defaults to .cache
  contentHash: true, // Disable content hash from being included on the filename
  scopeHoist: false, // Turn on experimental scope hoisting/tree shaking flag, for smaller production bundles
  target: 'browser', // Browser/node/electron, defaults to browser
  logLevel: 3, // 5 = save everything to a file, 4 = like 3, but with timestamps and additionally log http requests to dev server, 3 = log info, warnings & errors, 2 = log warnings & errors, 1 = log errors
  sourceMaps: false, // Enable or disable sourcemaps, defaults to enabled (minified builds currently always create sourcemaps)
  detailedReport: false, // Prints a detailed report of the bundles, assets, filesizes and times, defaults to false, reports are only printed if watch is disabled
};

(async function() {
  const entryFiles = await fg("renderer/pages/**/*.html", { dot: true, onlyFiles: true, caseSensitiveMatch: true,  });
  console.log(entryFiles);
  
  for (const entryFile of entryFiles) {
    const outDir = Path.resolve(Path.dirname(entryFile).replace("renderer/pages", "build/renderer"));
    console.log(outDir);
    // Initializes a bundler using the entrypoint location and options provided
    const bundler = new Bundler(entryFile, { ...options, outDir: `${outDir}/` });
    // Run the bundler, this returns the main bundle
    // Use the events if you're using watch mode as this promise will only trigger once and not for every rebuild
    const bundle = await bundler.bundle();
  }
})();