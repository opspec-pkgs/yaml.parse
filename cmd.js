const jsYaml = require('js-yaml');
const fs = require('fs');

const parsedYaml = jsYaml.safeLoad(fs.readFileSync('/yaml', 'utf8'));

fs.writeFileSync('/result', JSON.stringify(parsedYaml));