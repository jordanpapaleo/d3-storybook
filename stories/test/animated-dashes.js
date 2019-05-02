import * as d3 from 'd3'

export default function (svg, width, height) {
  var points = [
    [480, 40],
    [480, 400],
    [160, 320],
    [360, 340],
    [480, 440],
    [600, 340],
    [800, 320],
    [480, 400],
    [480, 40],
    [480, 440],
    [360, 100],
    [480, 400],
    [600, 100],
    [480, 440],
  ]

  var line = d3.line().curve(d3.curveCardinalClosed.tension(0.1))

  var origDash = '1 4 4 8'

  // duration base
  var time = 12000

  // SET UP SVG
  svg
    .datum(points)
    .attr('width', width)
    .attr('height', height)

  // APPEND COLOR GRADIENTS

  // append radial color gradient to new svg <defs> element
  var radialGradient = svg.append('defs').append('radialGradient')
    .attr('id', 'radial-gradient')
    .attr('cx', '50%')
    .attr('cy', '20%')
    .attr('r', '80%')

  // define color scales
  var numColors = 9

  var gradientScale = d3.scaleLinear()
    .domain([0, (numColors - 1) / 2, numColors - 1])
    .range(['lightcoral', 'purple', 'darkslateblue'])

  // bind specific color stops to radialGradient
  radialGradient.selectAll('stop')
    .data(d3.range(numColors))
    .enter()
    .append('stop')
    .attr('offset', (d, i) => (i / (numColors - 1)) * 100 + '%')
    .attr('stop-color', (d) => gradientScale(d))

  // APPEND LINE PATHS
  // faint outline of path
  svg.append('path')
    .style('stroke-dasharray', origDash)
    .attr('d', line)

  var path = svg.append('path')
    .style('stroke', 'url(#radial-gradient)')
    .style('stroke-width', '4')
    .attr('d', line)

  // PREPARE FOR PATH TRANSITIONS USING STROKE-DASHARRAY & STROKE-DASHOFFSET
  var length = path.node().getTotalLength()

  // calc sum of each digit of initial dash array
  var dashSum = origDash
    .split(' ')
    .map(x => +x)
    .reduce((accumulator, currentVal) => accumulator + currentVal, 0)

  // calc number of times dashSum must repeat to fill path length
  var dashTimes = Math.ceil(length / dashSum)

  // create dash string as origDash repeated dashTimes
  var dashFill = new Array(dashTimes + 1).join(origDash + ' ')

  // combine dashFill with total path length for (double) dashed stroke value
  var dashStr = `${dashFill}, ${length}`

  // dashed path initially blank
  path
    .style('stroke-dasharray', dashStr)
    .style('stroke-dashoffset', -length)

  // APPEND CIRCLES/POINTS
  // little guys
  svg.selectAll('.point')
    .data(points)
    .enter()
    .append('circle')
    .attr('r', 4)
    .style('fill', (d, i) => gradientScale(i))
    .attr('transform', (d) => `translate(${d})`)

  function goPath () {
    path
      .transition()
      .duration(time * 2)
      .styleTween('stroke-dashoffset', drawDashed)
      .transition()
      .duration(time * 2)
      .styleTween('stroke-dashoffset', drawSolid)
      .transition()
      .duration(time * 2)
      .styleTween('stroke-dashoffset', clearSolid)
      .transition()
      .duration(time * 2)
      .styleTween('stroke-dashoffset', clearDashed)
      .on('end', goPath)
  }

  function drawDashed () {
    var i = d3.interpolateString(-length, '0')
    return (t) => i(t)
  }
  function drawSolid () {
    var i = d3.interpolateString('0', length)
    return (t) => i(t)
  }

  function clearSolid () {
    var i = d3.interpolateString(length, '0')
    return (t) => i(t)
  }

  function clearDashed () {
    var i = d3.interpolateString('0', -length)
    return (t) => i(t)
  }

  goPath()
}
