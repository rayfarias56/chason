module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-sass');
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'public/js/script.js': ['src/js/*.js']
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'public/css/style.css': 'src/sass/*.scss'
                }
            }
        },
        watch: {
            options: {livereload: true},
            scripts: {
                files: ['src/js/*.js'],
                tasks: ['uglify']
            },
            sass: {
                files: ['src/sass/*.scss'],
                tasks: ['sass']
            }
        },
        express: {
            options: {},
            dev: {
                options: {
                    script: 'app.js'
                }
            }
        }
    });

    grunt.registerTask('serve', ['express:dev', 'watch']);
    grunt.registerTask('default', ['sass', 'uglify', 'serve']);
};