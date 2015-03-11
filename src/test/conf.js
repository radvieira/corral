
var child = require('child_process');
child.exec('grunt connect:server:keepalive');

exports.config = {
  specs: ['**/*-e2e-spec.js'],
  seleniumServerJar: './selenium-server-standalone-2.43.1.jar'
};
