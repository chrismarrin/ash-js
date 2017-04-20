/**
 * Ash-js System
 */

var Class = require('./../brejep/class');

var System = Class.extend({
    previous: null, /* System */
    next: null, /* System */
    priority: 0,

    constructor: function () { },

    addToEngine: function (engine) {
        /* Left deliberately blank */
    },

    removeFromEngine: function (engine) {
        /* Left deliberately blank */
    },

    update: function (time) {
        /* Left deliberately blank */
    },

    is: function (type) {
        return type.prototype.isPrototypeOf(this);
    }
});

module.exports = System;

