/* eslint-disable */

var fs = require('graceful-fs');
var join = require('path').join;
var cc = require('conventional-changelog');
var wstream = fs.createWriteStream(join(__dirname, '../CHANGELOG.md'), 'utf-8');

cc(
  {
    preset: 'angular',
    releaseCount: 0
  }, // options
  {}, // context
  {}, // gitRawCommitsOpts
  {}, // parserOpts
  {}
)
.pipe(wstream);
