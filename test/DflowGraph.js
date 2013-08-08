var DflowGraph, IperGraph, dflow, graph, iper;

dflow = require('../index');

iper = require('iper');

DflowGraph = dflow.DflowGraph;

IperGraph = iper.IperGraph;

graph = new DflowGraph();

describe('DflowGraph', function() {
  describe('inheritance', function() {
    return it('is an IperGraph', function() {
      graph = new IperGraph();
      return graph.should.be.instanceOf(IperGraph);
    });
  });
  return describe('constructor', function() {
    return it('has signature ()', function() {
      graph = new DflowGraph();
      return graph.should.be.instanceOf(DflowGraph);
    });
  });
});
