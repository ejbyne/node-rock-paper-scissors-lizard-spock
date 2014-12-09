module.exports = function(grunt){

  grunt.initConfig({
    jasmine_node: {
      options: {
        forceExit: true,
      },
      all: ['spec/']
      },

    jshint: {
        src: ['src/*.js']
    },
    
    watch: {
      scripts: {
        files: ['src/*.js'],
        tasks: ['jshint']
      }
    }

  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jasmine_node', 'jshint']);

};