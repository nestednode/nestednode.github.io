module.exports = function(grunt) {

    require('loadup-grunt-tasks')(grunt);

    grunt.initConfig({

        jade: {
            default: {
                src: 'markup/index.jade',
                dest: 'index.html'
            }
        },

        less: {
            default: {
                src: 'style/index.less',
                dest: 'index.css'
            }
        },

        watchChokidar: {
            jade: {
                files: ['markup/*.jade'],
                tasks: ['jade']
            },
            less: {
                files: ['style/*.less'],
                tasks: ['less']
            }
        }

    });

    grunt.registerTask('default', ['jade', 'less', 'watchChokidar']);

};
