var angular = require('angular');

module.exports = {
  component : function(moduleName, componentConfig) {
    var _ = require('lodash');
    var componentId = _.kebabCase(componentConfig.name);
    if (!componentConfig.def.template && !componentConfig.def.templateUrl) {
      var templateBody = require('../components/' + componentId +'/'+ componentId + '.html');
      componentConfig.def.template = templateBody;
    }

    angular.module(moduleName).component(componentConfig.name, componentConfig.def);
  }
}

