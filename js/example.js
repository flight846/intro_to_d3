$('#nav').affix({
  offset: {
    top: $('#nav').offset().top,
    bottom: ($('footer').outerHeight(true) + 40)
  }
})

// example 100
// config vars
var outerWidth100 = 500
var outerHeight100 = 250
var barPadding100 = 0.2

// D3 margin convenntion
var margin100 = { left: 90, top: 30, right: 30, bottom: 30 }

// set x, y data
var xColumn100 = 'country'
var yColumn100 = 'population'

// Label vars
var xAxisLabelText100 = 'Top 5 countries'
var xAxisLabelOffset100 = 50

var yAxisLabelText100 = 'Population'
var yAxisLabelOffset100 = 60

// set inner margin
var innerWidth100 = outerWidth100 - margin100.left - margin100.right
var innerHeight100 = outerHeight100 - margin100.top - margin100.bottom

// create svg
var svg100 = d3.select('#example-100').append('svg')
  .attr('width', outerWidth100)
  .attr('height', outerHeight100 + xAxisLabelOffset100)

var g100 = svg100.append('g')
  .attr('transform', 'translate(' + margin100.left + ',' + margin100.top + ')')

// setup axis
var xAxisG100 = g100.append('g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,' + innerHeight100 + ')')
var xAxisLabel100 = xAxisG100.append('text')
  .style('text-anchor', 'middle')
  .attr('transform', 'translate(' + (innerWidth100 / 2) + ',' + xAxisLabelOffset100 + ')')
  .attr('class', 'label')
  .text(xAxisLabelText100)
var yAxisG100 = g100.append('g')
  .attr('class', 'y axis')
var yAxisLabel100 = yAxisG100.append('text')
  .style('text-anchor', 'middle')
  .attr('transform', 'translate(-' + yAxisLabelOffset100 + ',' + (innerHeight100 / 2) + ') rotate(-90)')
  .attr('class', 'label')
  .text(yAxisLabelText100)

// set x, y scale range
var xScale100 = d3.scale.ordinal().rangeBands([0, innerWidth100], barPadding100)
var yScale100 = d3.scale.linear().range([innerHeight100, 0])

// Use a modified SI formatter that uses "B" for Billion.
var siFormat100 = d3.format('s')
var customTickFormat100 = function (d) {
  return siFormat100(d).replace('G', 'B')
}

var xAxis100 = d3.svg.axis().scale(xScale100).orient('bottom')
  .outerTickSize(0)
var yAxis100 = d3.svg.axis().scale(yScale100).orient('left')
  .ticks(5)
  .tickFormat(customTickFormat100)
  .outerTickSize(0)

// maps data space to pixel space
function render100 (data) {
  xScale100.domain(data.map(function (d) { return d[xColumn100]; }))
  yScale100.domain([0, d3.max(data, function (d) { return d[yColumn100]; })])

  // render axes
  xAxisG100.call(xAxis100)
  yAxisG100.call(yAxis100)

  var bars100 = g100.selectAll('rect').data(data)

  // enter phase
  bars100.enter().append('rect')

  // Update phase
  bars100
    .attr('x', function (d) { return xScale100(d[xColumn100]); })
    .attr('y', function (d) { return yScale100(d[yColumn100]); })
    .attr('width', xScale100.rangeBand())
    .attr('height', function (d) { return innerHeight100 - yScale100(d[yColumn100]); })

  // exit phase
  bars100.exit().remove()
}

function type100 (d) {
  d.population = +d.population
  return d
}

d3.csv('populationByCountry2015.csv', type100, render100)

// example 101
var outerWidth101 = 500
var outerHeight101 = 250
var margin101 = { left: 90, top: 30, right: 30, bottom: 40 }
var barPadding101 = 0.2

var xColumn101 = 'religion'
var yColumn101 = 'population'

var innerWidth101 = outerWidth101 - margin101.left - margin101.right
var innerHeight101 = outerHeight101 - margin101.top - margin101.bottom

var svg101 = d3.select('#example-101').append('svg')
  .attr('width', outerWidth101)
  .attr('height', outerHeight101)
var g101 = svg101.append('g')
  .attr('transform', 'translate(' + margin101.left + ',' + margin101.top + ')')
var xAxisG101 = g101.append('g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,' + innerHeight101 + ')')
var yAxisG101 = g101.append('g')
  .attr('class', 'y axis')
var xScale101 = d3.scale.ordinal().rangeBands([0, innerWidth101], barPadding101)
var yScale101 = d3.scale.linear().range([innerHeight101, 0])

// Use a modified SI formatter that uses "B" for Billion.
var siFormat101 = d3.format('s')
var customTickFormat101 = function (d) {
  return siFormat101(d).replace('G', 'B')
}
var xAxis101 = d3.svg.axis().scale(xScale101).orient('bottom')
  .outerTickSize(0)
var yAxis101 = d3.svg.axis().scale(yScale101).orient('left')
  .ticks(5)
  .tickFormat(customTickFormat101)
  .outerTickSize(0)

function render101 (data) {
  xScale101.domain(data.map(function (d) { return d[xColumn101]; }))
  yScale101.domain([0, d3.max(data, function (d) { return d[yColumn101]; })])

  xAxisG101
    .call(xAxis101)
    .selectAll('text')
    .attr('dx', '-.8em')
    .attr('dy', '1em')
    .attr('transform', 'rotate(-20)')

  yAxisG101.call(yAxis101)

  var bars101 = g101.selectAll('rect').data(data)

  bars101.enter().append('rect')
    .attr('width', xScale101.rangeBand())

  bars101
    .attr('x', function (d) { return xScale101(d[xColumn101]); })
    .attr('y', function (d) { return yScale101(d[yColumn101]); })
    .attr('height', function (d) { return innerHeight101 - yScale101(d[yColumn101]); })
  bars101.exit().remove()
}
function type101 (d) {
  d.population = +d.population
  return d
}
d3.csv('religionWorldTotals.csv', type101, render101)

// example 102
var outerWidth102 = 500
var outerHeight102 = 250
var margin102 = { left: 90, top: 30, right: 30, bottom: 40 }
var barPadding102 = 0.2

var xColumn102 = 'religion'
var yColumn102 = 'population'
var colorColumn102 = 'religion'

var innerWidth102 = outerWidth102 - margin102.left - margin102.right
var innerHeight102 = outerHeight102 - margin102.top - margin102.bottom

var svg102 = d3.select('#example-102').append('svg')
  .attr('width', outerWidth102)
  .attr('height', outerHeight102)
var g102 = svg102.append('g')
  .attr('transform', 'translate(' + margin102.left + ',' + margin102.top + ')')
var xAxisG102 = g102.append('g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,' + innerHeight102 + ')')
var yAxisG102 = g102.append('g')
  .attr('class', 'y axis')
var xScale102 = d3.scale.ordinal().rangeBands([0, innerWidth102], barPadding102)
var yScale102 = d3.scale.linear().range([innerHeight102, 0])
var colorScale102 = d3.scale.category10()

// Use a modified SI formatter that uses "B" for Billion.
var siFormat102 = d3.format('s')
var customTickFormat102 = function (d) {
  return siFormat102(d).replace('G', 'B')
}
var xAxis102 = d3.svg.axis().scale(xScale102).orient('bottom')
  .outerTickSize(0)
var yAxis102 = d3.svg.axis().scale(yScale102).orient('left')
  .ticks(5)
  .tickFormat(customTickFormat102)
  .outerTickSize(0)

function render102 (data) {
  xScale102.domain(data.map(function (d) { return d[xColumn102]; }))
  yScale102.domain([0, d3.max(data, function (d) { return d[yColumn102]; })])
  colorScale102.domain(data.map(function (d) { return d[colorColumn102]; }))

  xAxisG102
    .call(xAxis102)
    .selectAll('text')
    .attr('dx', '-.8em')
    .attr('dy', '1em')
    .attr('transform', 'rotate(-20)')

  yAxisG102.call(yAxis102)

  var bars102 = g102.selectAll('rect').data(data)

  bars102.enter().append('rect')
    .attr('width', xScale102.rangeBand())

  bars102
    .attr('x', function (d) { return xScale102(d[xColumn102]); })
    .attr('y', function (d) { return yScale102(d[yColumn102]); })
    .attr('height', function (d) { return innerHeight102 - yScale102(d[yColumn102]); })
    .attr('fill', function (d) { return colorScale102(d[colorColumn102]); })

  bars102.exit().remove()
}
function type102 (d) {
  d.population = +d.population
  return d
}
d3.csv('religionWorldTotals.csv', type102, render102)

// example-103
var yColumn103 = 'population'

function render103 (data) {
  var stack103 = d3.layout.stack()
    .y(function (d) {
      return d[yColumn103]
    })
    .values(function (d) {
      return [d]
    })

  var stacked103 = stack103(data)

  d3.select('#example-103').append('pre')
    .text(JSON.stringify(stacked103, null, 2))
}

function type103 (d) {
  d.population = +d.population
  return d
}

d3.csv('religionWorldTotals.csv', type103, render103)
