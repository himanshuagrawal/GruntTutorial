/*"concat":{
            css:{
                src:["src/css/reset.css","src/css/bootstrap.css","src/css/style.css"],
                dest:"dest/css/style.css"
            },
            js:{
                src:"src/js/*.js",
                dest:"dest/js/concat.js"
            }
        },*/
const sass = require('node-sass');
module.exports=function(grunt){
    grunt.initConfig({
        "concat":{
            options: {
                separator:','
            },
            json:{
                src:"JSONAfter/*.json",
                dest:"dest/json/afterQA2.json"
            }
        },
        "sass":{
            options: {
                implementation: sass,
                sourceMap: true
            },
            sassfile:{
                src:"src/css/sass/styles.scss",
                dest:"src/css/style.css"
            }
        },
        "uglify":{
            files:{
            src:"dest/js/concat.js",
            dest:"dest/js/concat.js"
        }
        }
    });
    grunt.loadNpmTasks('grunt-concat-json');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('compilesaas',['sass']);
    grunt.registerTask('concatfiles',['concat:css','concat:js']);
    grunt.registerTask('uglifyjs',['uglify']);
    grunt.registerTask('all',['compilesaas','concatfiles','uglify']);

   
}