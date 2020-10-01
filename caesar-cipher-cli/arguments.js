const argv = require('minimist')(process.argv.slice(2));

const action = argv['action'];
const shift = argv['shift'];
const input = argv['input'];
const output = argv['output'];

module.exports = {
    action, shift, 
    input, output
}