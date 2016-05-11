'use strict';

const curver = require('./index.js');

curver('packstat').then(version => {
	console.log(version);
});
