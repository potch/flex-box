/* jshint esnext:true */
import css from './flex.css';

var FlexBoxElementProto = Object.create(HTMLElement.prototype);

/*
// Lifecycle methods
FlexBoxElementProto.createdCallback = function () {
};

FlexBoxElementProto.attachedCallback = function () {
};

FlexBoxElementProto.detachedCallback = function () {
};

FlexBoxElementProto.attributeChangedCallback = function (attr, oldVal, newVal) {
  if (attr in attrs) {
    attrs[attr].call(this, oldVal, newVal);
  }
};

// Attribute handlers
var attrs = {
  'attr': function (oldVal, newVal) {
  }
};
*/

// Register the element
window.FlexBoxElement = document.registerElement('flex-box', {
  prototype: FlexBoxElementProto
});
