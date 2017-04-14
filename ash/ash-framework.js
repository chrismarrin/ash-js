/**
 * Ash framework core
 *
 * @author Brett Jephson
 */
var core = {
    VERSION: '0.2.0'
};

core.Engine = require('./core/engine');
core.ComponentMatchingFamily = require('./core/componentmatchingfamily');
core.Entity = require('./core/entity');
core.EntityList = require('./core/entitylist');
core.Family = require('./core/family');
core.Node = require('./core/node');
core.NodeList = require('./core/nodelist');
core.NodePool = require('./core/nodepool');
core.System = require('./core/system');
core.SystemList = require('./core/systemlist');

// util classes
// TODO separate this?
core.Class = require('./brejep/class');
core.Signals = require('./vendor/signals');

module.exports = core;

