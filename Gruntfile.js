module.exports = function(grunt){

  grunt.initConfig({
    jasmine_node: {
      options: {
        forceExit: true,
      },
      all: ['spec/']
      },

    jshint: {
        src: ['public/javascripts/*.js']
    },
    
    watch: {
      scripts: {
        files: ['public/javascripts/*.js'],
        tasks: ['jshint']
      }
    }

  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jasmine_node', 'jshint']);

};
