console.log('__dirname: ', __dirname);
moment = require('moment');

var count = 0;
function c() {
	return c++;
}

function p() {
	console.log(c());
}

console.log('index.js done ', moment());
