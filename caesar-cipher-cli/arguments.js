const minimist = require('minimist');
const argv = minimist(process.argv.slice(2),
    {
        alias: {
            a: 'action', s: 'shift',
            i: 'input', o: 'output'
        }
    });

const action = argv['action'];
const shift = argv['shift'];
const input = argv['input'];
const output = argv['output'];

module.exports = {
    action, shift,
    input, output
}
