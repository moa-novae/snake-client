const {connect} = require('./client');
const {setupInput} = require('./input.js');
console.log('Connecting ...');



setupInput(connect());


