module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),

        less:{
            development:{
                files:{
                    'src/estilos/estiloLess.css': 'dev/estilos/estiloLess.less',
                }
            }
        },

        uglify:{
            target:{
                files:{
                    'dev/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })




    //Carregamento de plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Registros de tarefas
    grunt.registerTask('default', ['less', 'uglify']);
}
