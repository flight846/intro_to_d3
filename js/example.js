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

// set inner margin
var innerWidth100 = outerWidth100 - margin100.left - margin100.right
var innerHeight100 = outerHeight100 - margin100.top - margin100.bottom

// create svg
var svg100 = d3.select('#example-100').append('svg')
  .attr('width', outerWidth100)
  .attr('height', outerHeight100)

var g100 = svg100.append('g')
  .attr('transform', 'translate(' + margin100.left + ',' + margin100.top + ')')

// setup axis
var xAxisG100 = g100.append('g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,' + innerHeight100 + ')')
var yAxisG100 = g100.append('g')
  .attr('class', 'y axis')

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
