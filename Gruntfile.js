module.exports = function(grunt){
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    less:{
      style:{
        files:{
          "build/css/style.css":"source/less/style.less"
        }
      }
    },

    clean:{
      build:["build"]
    },

    copy:{
      build:{
        files:[{
          expand: true, cwd: "source", src:["img/**/*","*.html","fonts/**/*","js/**/*"],
          dest: "build"
        }]
      }
    },

    watch:{
      style:{
        files:["source/*.html","source/less/**/*.less","source/js/*.js","source/fonts/**/*.woff"],
        tasks:["clean","copy","less"],
        options:{
          spawn: false,
          livereload: true
        }
      }
    },

    csso:{
      style:{
        options:{
          report: "gzip"
        },
        files:{
          "build/css/style.min.css":["build/css/style.css"]
        }
      }
    },

    imagemin:{
      images:{
        options:{
          optimizationLevel: 3
        },
        files:[{
          expand: true,
          src:["build/img/**/*.{png,jpg,gif}"]
        }]
      }
    }

  });

  grunt.registerTask("build",[
    "clean",
    "copy",
    "less",
    "csso",
    "imagemin"
  ]);

}

/*
connect: {
  server: {
    options: {
      port: 9000,
      base: 'build/',
      hostname: '0.0.0.0',
      protocol: 'http',
      livereload: true,
      open: true,
    }
  }
}
*/
