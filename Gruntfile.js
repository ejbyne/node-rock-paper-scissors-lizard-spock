module.exports = function(grunt){

  grunt.initConfig({
    jasmine_node: {
      options: {
        forceExit: true,
      },
      all: ['spec/']
      },

    jshint: {
        src: ['public/javascripts/AutoPlayer.js', 'public/javascripts/Game.js',
              'public/javascripts/PageInteraction.js', 'public/javscripts/Player.js']
    },
    
    watch: {
      scripts: {
        files: ['public/javascripts/*.js', 'spec/*Spec.js'],
        tasks: ['jasmine', 'jshint']
      }
    },

    jasmine: {
      pivotal: {
        src: ['public/javascripts/*.js'],
        tasks: 'jasmine:pivotal:build',
        options: {
         specs: 'spec/*Spec.js',
         vendor: ['public/javascripts/jquery-2.1.1.min.js', 'public/javascripts/jquery-ui.min.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['jasmine', 'jshint']);

};
