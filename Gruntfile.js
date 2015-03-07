
module.exports = function(grunt) {

  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: 3000
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');

};
