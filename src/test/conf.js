var exec = require('child_process').exec,
    child;

child = exec('grunt connect:server:keepalive', function(err, stdout, stderr) {
  console.log(stdout);
  console.log(stderr);
  if (err) {
    console.log(err);
  }
});

process.on('exit', function() {
  child.kill();
});

exports.config = {
  specs: ['**/*-e2e-spec.js'],
  seleniumServerJar: './lib/selenium-server-standalone-2.43.1.jar',
  plugins: [{
    chromeA11YDevTools: {
      treatWarningsAsFailures: true
    },
    path: '../../node_modules/protractor/plugins/accessibility'
  }]
};
