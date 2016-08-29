module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //start uglify
    uglify: {
      build: {
        src: 'js/*.js',
        dest: 'js/script.min.js'
      },
      dev: {
        options: {
          compress: false,
          beautify:true,
          preserveComments: 'all'
        },
        src: 'js/*.js',
        dest: 'js/script.dev.js'
      }
    },
     
    //end uglify
    watch: {
      js: {
        files: ['js/*.js'],
        tasks: ['uglify:dev']
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  

  // Default task(s).
  grunt.registerTask('default', ['uglify:dev',]);
  
  

};