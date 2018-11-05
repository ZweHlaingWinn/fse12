//buildin API api.nodejs.org
const http = require('http');

//third party api
const jqery= require('jquery');


//file (realative path)
const lib = require('./lib.js')

console.log(lib.circleArea(10));

console.log(lib.everything);

console.log(lib.something);
