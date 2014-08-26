'use strict';

var concat = require('concat-stream');
var es = require('event-stream');
var ldjson = require('ldjson-stream');
var fs = require('fs');
var csv = require('csv-parser');

var pipelines = require('./src/pipelines');

function updateRow(docs, keyId, keyValue, data){
  docs.some(function(doc){
    if (doc[keyId] === keyValue){

      Object.keys(data).forEach(function(dataKey){
	if (dataKey === keyId) {
	  return;
	}
	else if (doc[dataKey] !== undefined) {
	  if (!Array.isArray(doc[dataKey])) {
	    doc[dataKey] = [doc[dataKey]];
	  }

	  doc[dataKey].push(data[dataKey]);
	}
	else {
	  doc[dataKey] = data[dataKey];
	}
      });

      return true;
    }
  });
}

fs.createReadStream('./data/01_donnees_personnelles.csv')
  .pipe(csv({ separator: ';' }))
  .pipe(concat(function(docs){
    var update = updateRow.bind(null, docs, 'parlementaire');

    es.merge(
      pipelines.run('activity'),
      pipelines.run('activites_pro_5ans'),
      pipelines.run('organes_dirigeants'),
      pipelines.run('fonctions_mandats')
    )
    .pipe(ldjson.parse())
    .on('data', function(doc){
      update(doc.parlementaire, doc);
    })
    .on('end', function(){
      fs.createWriteStream('./dump.json').write(JSON.stringify(docs, null, 2));
    });
  }));