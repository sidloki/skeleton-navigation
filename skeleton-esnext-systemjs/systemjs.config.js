SystemJS.config({
  "paths": {
    "aurelia-skeleton-navigation/": "dist/"
  },
  "map": {
    "aurelia-bootstrapper": "node_modules/aurelia-bootstrapper/dist/commonjs",
    "aurelia-fetch-client": "node_modules/aurelia-fetch-client/dist/commonjs",
    "aurelia-framework": "node_modules/aurelia-framework/dist/commonjs",
    "aurelia-router": "node_modules/aurelia-router/dist/commonjs",
    "bluebird": "node_modules/bluebird/js/release",
    "bootstrap": "node_modules/bootstrap/dist",
    "font-awesome": "node_modules/font-awesome",
    "jquery": "node_modules/jquery/dist",
    "text": "node_modules/systemjs-plugin-text",
    "whatwg-fetch": "node_modules/whatwg-fetch",
    "aurelia-event-aggregator": "node_modules/aurelia-event-aggregator/dist/commonjs",
    "aurelia-history": "node_modules/aurelia-history/dist/commonjs",
    "aurelia-history-browser": "node_modules/aurelia-history-browser/dist/commonjs",
    "aurelia-loader-default": "node_modules/aurelia-loader-default/dist/commonjs",
    "aurelia-logging-console": "node_modules/aurelia-logging-console/dist/commonjs",
    "aurelia-pal": "node_modules/aurelia-pal/dist/commonjs",
    "aurelia-pal-browser": "node_modules/aurelia-pal-browser/dist/commonjs",
    "aurelia-polyfills": "node_modules/aurelia-polyfills/dist/commonjs",
    "aurelia-templating": "node_modules/aurelia-templating/dist/commonjs",
    "aurelia-templating-binding": "node_modules/aurelia-templating-binding/dist/commonjs",
    "aurelia-templating-resources": "node_modules/aurelia-templating-resources/dist/commonjs",
    "aurelia-templating-router": "node_modules/aurelia-templating-router/dist/commonjs",
    "aurelia-logging": "node_modules/aurelia-logging/dist/commonjs",
    "aurelia-loader": "node_modules/aurelia-loader/dist/commonjs",
    "aurelia-metadata": "node_modules/aurelia-metadata/dist/commonjs",
    "aurelia-path": "node_modules/aurelia-path/dist/commonjs",
    "aurelia-binding": "node_modules/aurelia-binding/dist/commonjs",
    "aurelia-dependency-injection": "node_modules/aurelia-dependency-injection/dist/commonjs",
    "aurelia-task-queue": "node_modules/aurelia-task-queue/dist/commonjs",
    "aurelia-route-recognizer": "node_modules/aurelia-route-recognizer/dist/commonjs"
  },
  "packages": {
    "aurelia-skeleton-navigation": {
      "main": "main.js"
    },
    "node_modules/aurelia-bootstrapper/dist/commonjs": {
      "main": "aurelia-bootstrapper.js"
    },
    "node_modules/aurelia-fetch-client/dist/commonjs": {
      "main": "aurelia-fetch-client.js"
    },
    "node_modules/aurelia-framework/dist/commonjs": {
      "main": "aurelia-framework.js"
    },
    "node_modules/aurelia-router/dist/commonjs": {
      "main": "aurelia-router.js"
    },
    "node_modules/bluebird/js/release": {
      "main": "bluebird.js"
    },
    "node_modules/bootstrap/dist": {
      "main": "js/bootstrap.js",
      "meta": {
        "*.js": {
          "format": "global",
          "exports": "$",
          "deps": [
            "jquery"
          ]
        }
      }
    },
    "node_modules/font-awesome": {},
    "node_modules/jquery/dist": {
      "main": "jquery.js"
    },
    "node_modules/systemjs-plugin-text": {
      "main": "text"
    },
    "node_modules/whatwg-fetch": {
      "main": "fetch.js"
    },
    "node_modules/aurelia-event-aggregator/dist/commonjs": {
      "main": "aurelia-event-aggregator.js"
    },
    "node_modules/aurelia-history/dist/commonjs": {
      "main": "aurelia-history.js"
    },
    "node_modules/aurelia-history-browser/dist/commonjs": {
      "main": "aurelia-history-browser.js"
    },
    "node_modules/aurelia-loader-default/dist/commonjs": {
      "main": "aurelia-loader-default.js"
    },
    "node_modules/aurelia-logging-console/dist/commonjs": {
      "main": "aurelia-logging-console.js"
    },
    "node_modules/aurelia-pal/dist/commonjs": {
      "main": "aurelia-pal.js"
    },
    "node_modules/aurelia-pal-browser/dist/commonjs": {
      "main": "aurelia-pal-browser.js"
    },
    "node_modules/aurelia-polyfills/dist/commonjs": {
      "main": "aurelia-polyfills.js"
    },
    "node_modules/aurelia-templating/dist/commonjs": {
      "main": "aurelia-templating.js"
    },
    "node_modules/aurelia-templating-binding/dist/commonjs": {
      "main": "aurelia-templating-binding.js"
    },
    "node_modules/aurelia-templating-resources/dist/commonjs": {
      "main": "aurelia-templating-resources.js"
    },
    "node_modules/aurelia-templating-router/dist/commonjs": {
      "main": "aurelia-templating-router.js"
    },
    "node_modules/aurelia-logging/dist/commonjs": {
      "main": "aurelia-logging.js"
    },
    "node_modules/aurelia-loader/dist/commonjs": {
      "main": "aurelia-loader.js"
    },
    "node_modules/aurelia-metadata/dist/commonjs": {
      "main": "aurelia-metadata.js"
    },
    "node_modules/aurelia-path/dist/commonjs": {
      "main": "aurelia-path.js"
    },
    "node_modules/aurelia-binding/dist/commonjs": {
      "main": "aurelia-binding.js"
    },
    "node_modules/aurelia-dependency-injection/dist/commonjs": {
      "main": "aurelia-dependency-injection.js"
    },
    "node_modules/aurelia-task-queue/dist/commonjs": {
      "main": "aurelia-task-queue.js"
    },
    "node_modules/aurelia-route-recognizer/dist/commonjs": {
      "main": "aurelia-route-recognizer.js"
    }
  }
});