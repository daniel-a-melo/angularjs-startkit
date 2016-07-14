var registry = require('../../core/componentRegistry.js');

registry.component('app', {
  name : 'smartLabel',
  def : {
    bindings : {
      text : '@'
    },
    controller : SmartLabelComponent
  }
});

function SmartLabelComponent() {
  this.styles = require('./smart-label.css');
}

