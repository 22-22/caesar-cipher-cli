const minimist = require('minimist');
const argv = minimist(process.argv.slice(2),
    {
        alias: {
            a: 'action', s: 'shift',
            i: 'input', o: 'output'
        }
    });

const action = typeof argv['action'] === 'string' ? argv['action'] : '';
const shift = typeof argv['shift'] === 'number' ? argv['shift'] : '';
const input = typeof argv['input'] === 'string' ? argv['input'] : '';
const output = typeof argv['output'] === 'string' ? argv['output'] : '';

module.exports = {
    action, shift,
    input, output
}

