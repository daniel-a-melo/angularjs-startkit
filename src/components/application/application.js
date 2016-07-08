(function() {

    var angular = require('angular');
    //require('../side-bar/sideBar.js');
    require('../smart-label/smart-label.js');

    angular.module('app').component('application', {
        bindings : {
          title : '@'
        },
        template : require('./application.html'),
        controller : function() {
          this.styles = require('./application.css');
        }
    });


}());
