
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

              var vehicles;

              if (req.url === '/api/vehicles') {
                vehicles = [
                  { make: 'Honda', vin: '123', plateNumber: 'abc-123' },
                  { make: 'Toyota', vin: '321', plateNumber: '123-abc' }
                ];
                res.end(JSON.stringify(vehicles));
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
