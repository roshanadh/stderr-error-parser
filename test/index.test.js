const mocha = require("mocha");
const chai = require("chai");
const { exec } = require("child_process");
const path = require("path");

const parseError = require("../index.js");

const should = chai.should();
const expect = chai.expect;

describe("Response body tests:", () => {
	it("should respond with ReferenceError", done => {
		let filePath = path.resolve(
			__dirname,
			"..",
			"examples",
			"executable-js-files/throws-reference-error.js"
		);
		exec(`node ${filePath}`, (error, stdout, stderr) => {
			if (stderr.trim() !== "") {
				const _parsed = parseError(filePath, stderr, stdout);
				_parsed.outputPart.should.equal("Hello World!\n");
				_parsed.errorBody.errorName.should.equal("ReferenceError");
				_parsed.errorBody.errorMessage.should.equal(
					"This is a reference error."
				);
				_parsed.errorBody.lineNumber.should.equal(2);
				_parsed.errorBody.columnNumber.should.equal(7);
				done();
			} else {
				console.log(stdout);
			}
		});
	});

	it("should respond with SyntaxError", done => {
		let filePath = path.resolve(
			__dirname,
			"..",
			"examples",
			"executable-js-files/throws-syntax-error.js"
		);
		exec(`node ${filePath}`, (error, stdout, stderr) => {
			if (stderr.trim() !== "") {
				const _parsed = parseError(filePath, stderr, stdout);
				_parsed.errorBody.errorName.should.equal("SyntaxError");
				_parsed.errorBody.errorMessage.should.equal(
					"This is a syntax error."
				);
				_parsed.errorBody.lineNumber.should.equal(2);
				expect(_parsed.errorBody.columnNumber).to.be.null;
				done();
			} else {
				console.log(stdout);
			}
		});
	});

	it("should respond with RangeError", done => {
		let filePath = path.resolve(
			__dirname,
			"..",
			"examples",
			"executable-js-files/throws-range-error.js"
		);
		exec(`node ${filePath}`, (error, stdout, stderr) => {
			if (stderr.trim() !== "") {
				const _parsed = parseError(filePath, stderr, stdout);
				_parsed.outputPart.should.equal("Hello World!\n");
				_parsed.errorBody.errorName.should.equal("RangeError");
				_parsed.errorBody.errorMessage.should.equal(
					"This is a range error."
				);
				_parsed.errorBody.lineNumber.should.equal(2);
				_parsed.errorBody.columnNumber.should.equal(7);
				done();
			} else {
				console.log(stdout);
			}
		});
	});

	it("should respond with TypeError", done => {
		let filePath = path.resolve(
			__dirname,
			"..",
			"examples",
			"executable-js-files/throws-type-error.js"
		);
		exec(`node ${filePath}`, (error, stdout, stderr) => {
			if (stderr.trim() !== "") {
				const _parsed = parseError(filePath, stderr, stdout);
				_parsed.outputPart.should.equal("Hello World!\n");
				_parsed.errorBody.errorName.should.equal("TypeError");
				_parsed.errorBody.errorMessage.should.equal(
					"This is a type error."
				);
				_parsed.errorBody.lineNumber.should.equal(2);
				_parsed.errorBody.columnNumber.should.equal(7);
				done();
			} else {
				console.log(stdout);
			}
		});
	});
});
