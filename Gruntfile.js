module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mocha: {
      all: {
        options: {
          log: true,
          reporter: 'Spec',
          run: false,
          timeout: 10000
        }
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['mocha']);
  grunt.loadNpmTasks('grunt-mocha');
};
