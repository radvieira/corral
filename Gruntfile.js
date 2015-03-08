
module.exports = function(grunt) {

  grunt.initConfig({

    connect: {
      server: {
        options: {
          base: ['src/client', 'bower_components'],
          index: 'index.html',
          port: 3000,
          middleware: function(connect, options, middlewares) {

            middlewares.unshift(function vehicles(req, res, next) {

              if (req.url === '/api/vehicles') {
                res.end(JSON.stringify(['Honda', 'Toyota']));
              } else {
                next();
              }

            });

            return middlewares;

          }
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');

};
