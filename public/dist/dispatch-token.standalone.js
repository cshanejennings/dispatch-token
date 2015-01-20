/*! dispatch-token - v1.0.0 - 2015-01-20
* Copyright (c) 2015 [object Object];*/

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function (obj, eventListeners) {
    obj = obj || {};
    eventListeners = eventListeners || {};
    function addEventListener(event, func) {
        if (typeof func === "function") {
            eventListeners[event] = eventListeners[event] || [];
            eventListeners[event].push(func);
        }
    }
    function removeEventListener(event, func) {
        var listeners = eventListeners[event] || [],
            i,
            len = listeners.length;
        for (i = 0; i < len; i += 1) {
            if (listeners[i] === func) {
                listeners.splice(i, 1);
                break;
            }
        }
    }
    function dispatchEvent(event) {
        var eventType = event.type,
            listeners = eventListeners[eventType] || [],
            j,
            len = listeners.length,
            loop = listeners.concat();
        function getFunction(callback) {
            if (typeof callback === "function") {
                return callback;
            }
            return function () { return; };
        }
        for (j = 0; j < len; j += 1) {
            getFunction(loop[j])(event);
        }
    }
    obj.addEventListener = addEventListener;
    obj.removeEventListener = removeEventListener;
    obj.dispatchEvent = dispatchEvent;
    return obj;
};
},{}]},{},[1]);
