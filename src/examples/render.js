
var Canvas = require('flow-view').Canvas,
    dflow    = require('dflow'),
    examples = require('./index')

/**
 * Render example into given div.
 *
 * Alos, execute dflow graph.
 *
 * @param {String} divId
 * @param {String} example
 *
 * @returns {Object} graph
 */

function renderExample (divId, example) {
  var graph = examples[example]
  console.log(graph)

  var canvas = new Canvas(divId)

  canvas.createView(graph.view)

  dflow.fun(graph)()
}

module.exports = renderExample

