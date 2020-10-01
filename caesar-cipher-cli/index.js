const Stream = require('stream');
const { pipeline } = require('stream');
const path = require('path');
const fs = require('fs');

const { encode } = require('./utils');
const { decode } = require('./utils');

const { action } = require('./arguments');
const { shift } = require('./arguments');
const { input } = require('./arguments');
const { output } = require('./arguments');

const pathToRead = path.join(__dirname, input);
const pathToWrite = path.join(__dirname, output);

const readStream = fs.createReadStream(pathToRead);
const writeStream = fs.createWriteStream(pathToWrite);

// const readStream = process.stdin;
// const writeStream = process.stdout;

const cypher = action === 'encode' ? encode : decode;

const transformStream = new Stream.Transform({
    transform(chunk, encoding, callback) {
        const transformed = cypher(chunk.toString(), shift);
        this.push(transformed);
        callback();
    }
})

pipeline(
    readStream,
    transformStream,
    writeStream,
    ((err) => {
        if (err) {
            console.log(err)
        }
        console.log('success')
    })
)

// process.stdin.pipe(transformStream).pipe(process.stdout);

// transform: (data, _, done) => {
//     done(null, { ...data, index: count++ })
//   }

// const input = 'inputTest.txt';
// const output = 'outputTest.txt';