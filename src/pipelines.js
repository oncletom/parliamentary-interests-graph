'use strict';

var gasket = require('gasket');

module.exports = gasket({
  assemble: [
    "cat data/01*.csv",
    "csv-parser -s ';'"
  ],

  activity: [
    "cat data/02*.csv",
    "csv-parser -s ';'",
    "jsonmap --file=src/filters/null-value.js",
    "jsonfilter 'doc'",
    "jsonmap --file=src/maps/activities.js"
  ],

  activites_pro_5ans: [
    "cat data/03*.csv",
    "csv-parser -s ';'",
    "jsonmap --file=src/filters/null-value.js",
    "jsonfilter 'doc'",
    "jsonmap --file=src/maps/activites_pro_5ans.js"
  ],

  organes_dirigeants: [
    "cat data/05*.csv",
    "csv-parser -s ';'",
    "jsonmap --file=src/filters/null-value.js",
    "jsonfilter 'doc'",
    "jsonmap --file=src/maps/organes_dirigeants.js"
  ],

  fonctions_mandats: [
    "cat data/09*.csv",
    "csv-parser -s ';'",
    "jsonmap --file=src/filters/null-value.js",
    "jsonfilter 'doc'",
    "jsonmap --file=src/maps/fonctions_mandats.js"
  ]
});