module.exports = function(grunt){
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({

    //компилятор лесс
    less: {
      style: {
        files: {
          "build/css/style.css": "source/less/style.less"
        }
      }
    },

    // grunt-watch
    watch: {
      style: {
        files: ["source/*.html", "source/less/**/*.less", "source/js/*.js", "source/fonts/**/*.woff", "source/js/*.js"],
        tasks: ["clean", "copy", "less"],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },

    // grunt-copy
    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "source",
          src: [
            "img/**/*", "*.html", "fonts/**/*", "js/**/*"
          ],
          dest: "build"
        }]
      }
    },

    // grunt-clean
    clean: {
      build: ["build"]
    },

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
    },

  });

grunt.registerTask("build", [
    "clean",
    "copy",
    "less",
  ]);

grunt.registerTask("server", [
    "connect",
    "watch"
  ]);

};
