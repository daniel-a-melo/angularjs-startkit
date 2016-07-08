(function() {

    var angular = require('angular');

    angular.module('app', [require('angular-material')]);

    require('./components/application/application.js');

    // var angularComponentsContext = require.context('.', true, /.controller.js$|.service.js$|.directive.js$/);
    // angularComponentsContext.keys().forEach(angularComponentsContext);    

}());
