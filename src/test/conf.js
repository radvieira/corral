
var child = require('child_process');
child.exec('grunt connect:server');

exports.config = {
  specs: ['**/*-e2e-spec.js'],
  seleniumServerJar: './lib/selenium-server-standalone-2.43.1.jar'
};
