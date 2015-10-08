#!/usr/bin/env node

'use strict';

var program = require('commander')
var open = require('open')
var pkg = require('./package.json')

program
  .version(pkg.version)
  .description('Opens a URL in specified browser')
  .arguments('<url> [browser]')
  .action(function(url, browser) {
    open(url, browser)
  })
  .parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}
