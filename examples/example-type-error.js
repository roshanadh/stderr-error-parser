const { exec } = require("child_process");
const path = require("path");

const parseError = require("../index.js");

const filePath = path.resolve(
	__dirname,
	"executable-js-files",
	"throws-type-error.js"
);

exec(`node ${filePath}`, (error, stdout, stderr) => {
	if (stderr.trim() !== "") {
		const _parsed = parseError(filePath, stderr, stdout);
		console.dir(_parsed);
	} else {
		console.log(stdout);
	}
});
