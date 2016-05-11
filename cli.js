'use strict';

const curver = require('./index.js');

curver('image-of').then(version => {
	console.log(version);
});
