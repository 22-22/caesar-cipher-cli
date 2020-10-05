const { pipeline } = require('stream');
const fs = require('fs');

const { action } = require('./arguments');
const { shift } = require('./arguments');
const { input } = require('./arguments');
const { output } = require('./arguments');

const { readStream } = require('./streams');
const { writeStream } = require('./streams');
const { transformStream } = require('./streams');

if (!action || !shift) {
    console.error('Action and shift are required!');
    process.exit(1);
}

if (input) {
    fs.promises.access(input, fs.constants.F_OK | fs.constants.R_OK)
        .catch((err) => {
            console.error(`${input} ${err.code === 'ENOENT' ? 'does not exist' : 'is not readable'}`);
            process.exit(1);
        })
}

if (output) {
    fs.promises.access(output, fs.constants.F_OK | fs.constants.W_OK)
        .catch((err) => {
            console.error(`${output} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`);
            process.exit(1);
        })
}

pipeline(
    readStream,
    transformStream,
    writeStream,
    ((err) => {
        if (err) {
            console.log(err.message)
        }
        console.log('success')
    })
)
