# stderr-error-parser
Node.js module to parse error stack from the stderr of a Node.js process

## Installation
*stderr-error-parser* is available though [npm](https://npmjs.com/package/stderr-error-parser)
```sh
$ npm i stderr-err-parser
```

## Using
```sh
// import stderr-error-parser
const parseError = require("stderr-error-parser");

const { exec } = require("child_process");
const path = require("path");

// filePath should be an absolute path
const filePath = path.resolve(
	__dirname,
	"executable-js-files",
	"throws-range-error.js"
);

exec(`node ${filePath}`, (error, stdout, stderr) => {
	if (stderr.trim() !== "") {
		const _parsed = parseError(filePath, stderr, stdout);
		console.dir(_parsed);
		/*
		_parsed =
		{
  			outputPart: 'Hello World!\n',
  			errorBody: {
    			errorName: 'RangeError',
    			errorMessage: 'This is a range error.',
    			lineNumber: 2,
    			columnNumber: 7,
    			errorStack: 'RangeError: This is a range error.\n' +
    			  '    at ....'
  			}
		}
		*/
	} else {
		console.log(stdout);
	}
});
```

## Examples
To check some of the examples, clone the repository and install dependencies
```sh
$ git clone https://github.com/roshanadh/stderr-error-parser
$ cd stderr-error-parser
$ npm install
```
Then run the example you want to see
```sh
$ node examples/example-reference-error.js
```

## Tests
To run the test suite, clone the repository and install dependencies, then run
```sh
$ npm test
```
