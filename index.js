(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function (css, customDocument) {
  var doc = customDocument || document;
  if (doc.createStyleSheet) {
    var sheet = doc.createStyleSheet()
    sheet.cssText = css;
    return sheet.ownerNode;
  } else {
    var head = doc.getElementsByTagName('head')[0],
        style = doc.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(doc.createTextNode(css));
    }

    head.appendChild(style);
    return style;
  }
};

module.exports.byUrl = function(url) {
  if (document.createStyleSheet) {
    return document.createStyleSheet(url).ownerNode;
  } else {
    var head = document.getElementsByTagName('head')[0],
        link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = url;

    head.appendChild(link);
    return link;
  }
};

},{}],2:[function(require,module,exports){
var css = "flex-box {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\nflex-box[fill] {\n  height: 100%;\n  width: 100%;\n}\nflex-box[axis=\"x\"] {\n  box-orient: horizontal;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -moz-box-orient: horizontal;\n  -moz-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\nflex-box > [flex] {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  min-width: auto;\n  min-height: auto;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  box-flex: 1;\n  flex: 1;\n}\n"; (require("/Users/potch/projects/customel/flex-box/node_modules/cssify"))(css); module.exports = css;
},{"/Users/potch/projects/customel/flex-box/node_modules/cssify":1}],3:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

/* jshint esnext:true */
var css = _interopRequire(require("./flex.css"));

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
window.FlexBoxElement = document.registerElement("flex-box", {
  prototype: FlexBoxElementProto
});

},{"./flex.css":2}]},{},[3]);
