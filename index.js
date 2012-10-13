
var Node = require('./lib/Node.js');

exports.Node = Node;

var Edge = require('./lib/Edge.js');

exports.Edge = Edge;

var Edge = require('./lib/Edge.js');

exports.Edge = Edge;

var Graph = require('./lib/Graph.js');

exports.Graph = Graph;

//Create a global dflow graph, a.k.a root.
var dflow = {};
dflow.root = new Graph();
process.dflow = dflow;

