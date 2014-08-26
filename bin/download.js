#!/usr/bin/env node

'use strict';

var http = require('http');
var unzip = require('unzip');
var fs = require('fs');

http.request(process.argv[2], function(response){
  response.pipe(
    unzip.Extract({ path: './', verbose: true }).on('close', renameDownloadFolder)
  );
}).end();

function renameDownloadFolder(){
  fs.rename('./declarations-dinterets-parlementaires', './data');
}