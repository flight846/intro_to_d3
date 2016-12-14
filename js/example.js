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

// example-104
var outerWidth104 = 500
var outerHeight104 = 250
var margin104 = { left: 90, top: 30, right: 30, bottom: 40 }
var barPadding104 = 0.2

var xColumn104 = 'region'
var yColumn104 = 'population'
var colorColumn104 = 'religion'

var innerWidth104 = outerWidth104 - margin104.left - margin104.right
var innerHeight104 = outerHeight104 - margin104.top - margin104.bottom

var svg104 = d3.select('#example-104').append('svg')
  .attr('width', outerWidth104)
  .attr('height', outerHeight104)
var g104 = svg104.append('g')
  .attr('transform', 'translate(' + margin104.left + ',' + margin104.top + ')')
var xAxisG104 = g104.append('g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,' + innerHeight104 + ')')
var yAxisG104 = g104.append('g')
  .attr('class', 'y axis')

var xScale104 = d3.scale.ordinal().rangeBands([0, innerWidth104], barPadding104)
var yScale104 = d3.scale.linear().range([innerHeight104, 0])
var colorScale104 = d3.scale.category10()

// Use a modified SI formatter that uses "B" for Billion.
var siFormat104 = d3.format('s')
var customTickFormat104 = function (d) {
  return siFormat104(d).replace('G', 'B')
}

var xAxis104 = d3.svg.axis().scale(xScale104).orient('bottom')
  .outerTickSize(0)
var yAxis104 = d3.svg.axis().scale(yScale104).orient('left')
  .ticks(5)
  .tickFormat(customTickFormat104)
  .outerTickSize(0)

function render104 (data) {
  colorScale104.domain(data.map(function (d) { return d[colorColumn104]; }))
  var stack104 = d3.layout.stack()
    .y(function (d) { return d[yColumn104]; })
    .values(function (d) { return [d]; })

  var stacked104 = stack104(data)

  xScale104.domain(stacked104.map(function (d) { return d[xColumn104]; }))
  yScale104.domain([0, d3.max(stacked104, function (d) { return d.y0 + d.y; })])

  xAxisG104.call(xAxis104)
  yAxisG104.call(yAxis104)

  var bars104 = g104.selectAll('rect').data(stacked104)
  bars104.enter().append('rect')

  bars104
    .attr('x', function (d) { return xScale104(d[xColumn104]); })
    .attr('y', function (d) { return yScale104(d.y0 + d.y); })
    .attr('width', xScale104.rangeBand())
    .attr('height', function (d) { return innerHeight104 - yScale104(d.y); })
    .attr('fill', function (d) { return colorScale104(d[colorColumn104]); })

  bars104.exit().remove()
}

function type104 (d) {
  d.region = 'World'
  d.population = +d.population
  return d
}

d3.csv('religionWorldTotals.csv', type104, render104)

// example-105
function render105 (data) {
  d3.select('#example-105').append('pre')
    .text(JSON.stringify(data, null, 2))
}
function type105 (d) {
  d.population = +d.population
  return d
}

d3.csv('religionByCountryTop5.csv', type105, render105)

// example-106
function render106 (data) {
  var nested106 = d3.nest()
    .key(function (d) { return d.country })
    .entries(data)

  d3.select('#example-106').append('pre')
    .text(JSON.stringify(nested106, null, 2))
}

function type106 (d) {
  d.population = +d.population
  return d
}

d3.csv('religionByCountryTop5.csv', type106, render106)

// example-107
var layerColumn107 = 'religion'
var yColumn107 = 'population'
var xColumn107 = 'country'

function render107 (data) {
  var nested107 = d3.nest()
    .key(function (d) { return d[layerColumn107]; })
    .entries(data)

  var stack107 = d3.layout.stack()
    .y(function (d) { return d[yColumn107]; })
    .values(function (d) { return d.values; })

  var layers107 = stack107(nested107)

  d3.select('#example-107').append('pre')
    .text(JSON.stringify(layers107, null, 2))
}

function type107 (d) {
  d.population = +d.population
  return d
}

d3.csv('religionByCountryTop5.csv', type107, render107)

// example-108
var outerWidth108 = 500
var outerHeight108 = 250
var margin108 = { left: 90, top: 30, right: 30, bottom: 40 }
var barPadding108 = 0.2

var xColumn108 = 'country'
var yColumn108 = 'population'
var colorColumn108 = 'religion'
var layerColumn108 = colorColumn108

var innerWidth108 = outerWidth108 - margin108.left - margin108.right
var innerHeight108 = outerHeight108 - margin108.top - margin108.bottom

var svg108 = d3.select('#example-108').append('svg')
  .attr('width', outerWidth108)
  .attr('height', outerHeight108)
var g108 = svg108.append('g')
  .attr('transform', 'translate(' + margin108.left + ',' + margin108.top + ')')
var xAxisG108 = g108.append('g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,' + innerHeight108 + ')')
var yAxisG108 = g108.append('g')
  .attr('class', 'y axis')

var xScale108 = d3.scale.ordinal().rangeBands([0, innerWidth108], barPadding108)
var yScale108 = d3.scale.linear().range([innerHeight108, 0])
var colorScale108 = d3.scale.category10()

// Use a modified SI formatter that uses "B" for Billion.
var siFormat108 = d3.format('s')
var customTickFormat108 = function (d) {
  return siFormat108(d).replace('G', 'B')
}
var xAxis108 = d3.svg.axis().scale(xScale108).orient('bottom')
  .outerTickSize(0)
var yAxis108 = d3.svg.axis().scale(yScale108).orient('left')
  .ticks(5)
  .tickFormat(customTickFormat108)
  .outerTickSize(0)

function render108 (data) {
  var nested108 = d3.nest()
    .key(function (d) { return d[layerColumn108]; })
    .entries(data)

  var stack108 = d3.layout.stack()
    .y(function (d) { return d[yColumn108]; })
    .values(function (d) { return d.values; })

  var layers108 = stack108(nested108)

  xScale108.domain(layers108[0].values.map(function (d) {
    return d[xColumn108]
  }))

  yScale108.domain([
    0,
    d3.max(layers108, function (layer) {
      return d3.max(layer.values, function (d) {
        return d.y0 + d.y
      })
    })
  ])

  colorScale108.domain(layers108.map(function (layer) {
    return layer.key
  }))

  xAxisG108.call(xAxis108)
  yAxisG108.call(yAxis108)

  var layerGroups108 = g108.selectAll('.layer').data(layers108)
  layerGroups108.enter().append('g').attr('class', 'layer')
  layerGroups108.exit().remove()
  layerGroups108.style('fill', function (d) {
    return colorScale108(d.key)
  })

  var bars108 = layerGroups108.selectAll('rect').data(function (d) {
    return d.values
  })

  bars108.enter().append('rect')

  bars108.exit().remove()

  bars108
    .attr('x', function (d) { return xScale108(d[xColumn108]); })
    .attr('y', function (d) { return yScale108(d.y0 + d.y); })
    .attr('width', xScale108.rangeBand())
    .attr('height', function (d) { return innerHeight108 - yScale108(d.y); })
}

function type108 (d) {
  d.population = +d.population
  return d
}

d3.csv('religionByCountryTop5.csv', type108, render108)

// example-109
var outerWidth109 = 500
var outerHeight109 = 250
var margin109 = { left: 90, top: 30, right: 30, bottom: 40 }
var barPadding109 = 0.2

var xColumn109 = 'country'
var yColumn109 = 'population'
var colorColumn109 = 'religion'
var layerColumn109 = colorColumn109

var innerWidth109 = outerWidth109 - margin109.left - margin109.right
var innerHeight109 = outerHeight109 - margin109.top - margin109.bottom

var svg109 = d3.select('#example-109').append('svg')
  .attr('width', outerWidth109)
  .attr('height', outerHeight109)
var g109 = svg109.append('g')
  .attr('transform', 'translate(' + margin109.left + ',' + margin109.top + ')')
var xAxisG109 = g109.append('g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,' + innerHeight109 + ')')
var yAxisG109 = g109.append('g')
  .attr('class', 'y axis')
var colorLegendG109 = g109.append('g')
  .attr('class', 'color-legend')
  .attr('transform', 'translate(260, 0)')

var xScale109 = d3.scale.ordinal().rangeBands([0, innerWidth109], barPadding109)
var yScale109 = d3.scale.linear().range([innerHeight109, 0])
var colorScale109 = d3.scale.category10()

// Use a modified SI formatter that uses "B" for Billion.
var siFormat109 = d3.format('s')
var customTickFormat109 = function (d) {
  return siFormat109(d).replace('G', 'B')
}
var xAxis109 = d3.svg.axis().scale(xScale109).orient('bottom')
  .outerTickSize(0)
var yAxis109 = d3.svg.axis().scale(yScale109).orient('left')
  .ticks(5)
  .tickFormat(customTickFormat109)
  .outerTickSize(0)
var colorLegend109 = d3.legend.color()
  .scale(colorScale109)
  .shapePadding(3)
  .shapeWidth(15)
  .shapeHeight(15)
  .labelOffset(4)

function render109 (data) {
  var nested109 = d3.nest()
    .key(function (d) { return d[layerColumn109]; })
    .entries(data)
  var stack109 = d3.layout.stack()
    .y(function (d) { return d[yColumn109]; })
    .values(function (d) { return d.values; })
  var layers109 = stack109(nested109)

  xScale109.domain(layers109[0].values.map(function (d) {
    return d[xColumn109]
  }))
  yScale109.domain([
    0,
    d3.max(layers109, function (layer) {
      return d3.max(layer.values, function (d) {
        return d.y0 + d.y
      })
    })
  ])
  colorScale109.domain(layers109.map(function (layer) {
    return layer.key
  }))

  xAxisG109.call(xAxis109)
  yAxisG109.call(yAxis109)

  var layerGroups109 = g109.selectAll('.layer').data(layers109)

  layerGroups109.enter().append('g').attr('class', 'layer')

  layerGroups109.exit().remove()

  layerGroups109.style('fill', function (d) {
    return colorScale109(d.key)
  })

  var bars109 = layerGroups109.selectAll('rect').data(function (d) {
    return d.values
  })

  bars109.enter().append('rect')

  bars109.exit().remove()

  bars109
    .attr('x', function (d) { return xScale109(d[xColumn109]); })
    .attr('y', function (d) { return yScale109(d.y0 + d.y); })
    .attr('width', xScale109.rangeBand())
    .attr('height', function (d) { return innerHeight109 - yScale109(d.y); })

  colorLegendG109.call(colorLegend109)
}
function type109 (d) {
  d.population = +d.population
  return d
}

d3.csv('religionByCountryTop5.csv', type109, render109)

// example-110
var outerWidth110 = 500
var outerHeight110 = 250
var margin110 = { left: 90, top: 30, right: 30, bottom: 40 }
var barPadding110 = 0.2

var xColumn110 = 'country'
var yColumn110 = 'population'
var colorColumn110 = 'religion'
var layerColumn110 = colorColumn110

var innerWidth110 = outerWidth110 - margin110.left - margin110.right
var innerHeight110 = outerHeight110 - margin110.top - margin110.bottom

var svg110 = d3.select('#example-110').append('svg')
  .attr('width', outerWidth110)
  .attr('height', outerHeight110)
var g110 = svg110.append('g')
  .attr('transform', 'translate(' + margin110.left + ',' + margin110.top + ')')
var xAxisG110 = g110.append('g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,' + innerHeight110 + ')')
var yAxisG110 = g110.append('g')
  .attr('class', 'y axis')
var colorLegendG110 = g110.append('g')
  .attr('class', 'color-legend')
  .attr('transform', 'translate(235, 0)')

var xScale110 = d3.scale.ordinal().rangeBands([0, innerWidth110], barPadding110)
var yScale110 = d3.scale.linear().range([innerHeight110, 0])
var colorScale110 = d3.scale.category10()

var xAxis110 = d3.svg.axis().scale(xScale110).orient('bottom')
  .outerTickSize(0)
var yAxis110 = d3.svg.axis().scale(yScale110).orient('left')
  .ticks(5)
  .tickFormat(d3.format('s'))
  .outerTickSize(0)
var colorLegend110 = d3.legend.color()
  .scale(colorScale110)
  .shapePadding(2)
  .shapeWidth(15)
  .shapeHeight(15)
  .labelOffset(4)

function render110 (data) {
  var nested110 = d3.nest()
    .key(function (d) { return d[layerColumn110]; })
    .entries(data)
  var stack110 = d3.layout.stack()
    .y(function (d) { return d[yColumn110]; })
    .values(function (d) { return d.values; })

  var layers110 = stack110(nested110)

  xScale110.domain(layers110[0].values.map(function (d) {
    return d[xColumn110]
  }))

  yScale110.domain([
    0,
    d3.max(layers110, function (layer) {
      return d3.max(layer.values, function (d) {
        return d.y
      })
    })
  ])

  colorScale110.domain(layers110.map(function (layer) {
    return layer.key
  }))

  xAxisG110.call(xAxis110)
  yAxisG110.call(yAxis110)

  var layerGroups110 = g110.selectAll('.layer').data(layers110)
  layerGroups110.enter().append('g').attr('class', 'layer')
  layerGroups110.exit().remove()
  layerGroups110.style('fill', function (d) {
    return colorScale110(d.key)
  })

  var bars110 = layerGroups110.selectAll('rect').data(function (d) {
    return d.values
  })
  var barWidth110 = xScale110.rangeBand() / colorScale110.domain().length

  bars110.enter().append('rect')
  bars110.exit().remove()

  bars110
    .attr('x', function (d, i, j) {
      return xScale110(d[xColumn110]) + barWidth110 * j
    })
    .attr('y', function (d) { return yScale110(d.y); })
    .attr('width', barWidth110)
    .attr('height', function (d) { return innerHeight110 - yScale110(d.y); })

  colorLegendG110.call(colorLegend110)
}

function type110 (d) {
  d.population = +d.population
  return d
}

d3.csv('religionByCountryTop5.csv', type110, render110)

// example-111
var outerWidth111 = 500
var outerHeight111 = 250
var margin111 = { left: 90, top: 60, right: 30, bottom: 60 }
var barPadding111 = 0.2

var xColumn111 = 'country'
var radiusColumn111 = 'population'
var radiusMax111 = 40

var innerWidth111 = outerWidth111 - margin111.left - margin111.right
var innerHeight111 = outerHeight111 - margin111.top - margin111.bottom

var svg111 = d3.select('#example-111').append('svg')
  .attr('width', outerWidth111)
  .attr('height', outerHeight111)
var g111 = svg111.append('g')
  .attr('transform', 'translate(' + margin111.left + ',' + margin111.top + ')')
var xAxisG111 = g111.append('g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,' + innerHeight111 + ')')
var xScale111 = d3.scale.ordinal().rangePoints([0, innerWidth111], barPadding111)
var radiusScale111 = d3.scale.sqrt().range([0, radiusMax111])

// Use a modified SI formatter that uses "B" for Billion.
var siFormat111 = d3.format('s')
var customTickFormat111 = function (d) {
  return siFormat111(d).replace('G', 'B')
}

var xAxis111 = d3.svg.axis().scale(xScale111).orient('bottom')
  .outerTickSize(0)

function render111 (data) {
  xScale111.domain(data.map(function (d) { return d[xColumn111]; }))
  radiusScale111.domain([0, d3.max(data, function (d) { return d[radiusColumn111]; })])

  xAxisG111.call(xAxis111)

  var circles111 = g111.selectAll('circle').data(data)
  circles111.enter().append('circle')
  circles111
    .attr('cx', function (d) { return xScale111(d[xColumn111]); })
    .attr('cy', innerHeight111 / 2)
    .attr('r', function (d) { return radiusScale111(d[radiusColumn111]); })
  circles111.exit().remove()
}

function type111 (d) {
  d.population = +d.population
  return d
}

d3.csv('populationByCountry2015.csv', type111, render111)

// example-112
var outerWidth112 = 500
var outerHeight112 = 250
var margin112 = { left: 90, top: 90, right: 30, bottom: 90 }
var barPadding112 = 0.2

var xColumn112 = 'religion'
var radiusColumn112 = 'population'
var radiusMax112 = 25

var innerWidth112 = outerWidth112 - margin112.left - margin112.right
var innerHeight112 = outerHeight112 - margin112.top - margin112.bottom

var svg112 = d3.select('#example-112').append('svg')
  .attr('width', outerWidth112)
  .attr('height', outerHeight112)
var g112 = svg112.append('g')
  .attr('transform', 'translate(' + margin112.left + ',' + margin112.top + ')')
var xAxisG112 = g112.append('g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,' + innerHeight112 + ')')

var xScale112 = d3.scale.ordinal().rangePoints([0, innerWidth112], barPadding112)
var radiusScale112 = d3.scale.sqrt().range([0, radiusMax112])

// Use a modified SI formatter that uses "B" for Billion.
var siFormat112 = d3.format('s')
var customTickFormat112 = function (d) {
  return siFormat112(d).replace('G', 'B')
}

var xAxis112 = d3.svg.axis().scale(xScale112).orient('bottom')
  .outerTickSize(0)

function render112 (data) {
  xScale112.domain(data.map(function (d) { return d[xColumn112]; }))
  radiusScale112.domain([0, d3.max(data, function (d) { return d[radiusColumn112]; })])

  xAxisG112
    .call(xAxis112)
    .selectAll('text')
    .attr('dx', '-.8em')
    .attr('dy', '1em')
    .attr('transform', 'rotate(-20)')

  var circles112 = g112.selectAll('circle').data(data)

  circles112.enter().append('circle')

  circles112
    .attr('cx', function (d) { return xScale112(d[xColumn112]); })
    .attr('cy', innerHeight112 / 2)
    .attr('r', function (d) { return radiusScale112(d[radiusColumn112]); })

  circles112.exit().remove()
}
function type112 (d) {
  d.population = +d.population
  return d
}
d3.csv('religionWorldTotals.csv', type112, render112)

// example-113
var outerWidth113 = 500
var outerHeight113 = 250
var margin113 = { left: 90, top: 90, right: 30, bottom: 90 }
var barPadding113 = 0.2

var xColumn113 = 'religion'
var radiusColumn113 = 'population'
var radiusMax113 = 25
var colorColumn113 = 'religion'

var innerWidth113 = outerWidth113 - margin113.left - margin113.right
var innerHeight113 = outerHeight113 - margin113.top - margin113.bottom

var svg113 = d3.select('#example-113').append('svg')
  .attr('width', outerWidth113)
  .attr('height', outerHeight113)
var g113 = svg113.append('g')
  .attr('transform', 'translate(' + margin113.left + ',' + margin113.top + ')')
var xAxisG113 = g113.append('g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,' + innerHeight113 + ')')

var xScale113 = d3.scale.ordinal().rangePoints([0, innerWidth113], barPadding113)
var radiusScale113 = d3.scale.sqrt().range([0, radiusMax113])
var colorScale113 = d3.scale.category10()

var xAxis113 = d3.svg.axis().scale(xScale113).orient('bottom')
  .outerTickSize(0)

function render113 (data) {
  xScale113.domain(data.map(function (d) { return d[xColumn113]; }))
  radiusScale113.domain([0, d3.max(data, function (d) { return d[radiusColumn113]; })])
  colorScale113.domain(data.map(function (d) { return d[colorColumn113]; }))
  xAxisG113
    .call(xAxis113)
    .selectAll("text")
    .attr("dx", "-.8em")
    .attr("dy", "1em")
    .attr("transform", "rotate(-20)" );

  var circles113 = g113.selectAll('circle').data(data)
  circles113.enter().append('circle')
  circles113
    .attr('cx', function (d) { return xScale113(d[xColumn113]); })
    .attr('cy', innerHeight113 / 2)
    .attr('r', function (d) { return radiusScale113(d[radiusColumn113]); })
    .attr("fill", function (d){ return colorScale113(d[colorColumn113]); });
  circles113.exit().remove()
}

function type113 (d) {
  d.population = +d.population
  return d
}

d3.csv('religionWorldTotals.csv', type113, render113)

// example-114
var sliceSizeColumn114 = "population";
var pie114 = d3.layout.pie();

function render114(data){
  pie114.value(function(d) {
    return d[sliceSizeColumn114];
  });

  var pieData114 = pie114(data);
  d3.select("#example-114").append("pre")
    .text(JSON.stringify(pieData114, null, 2));
}

function type114(d){
  d.population = +d.population;
  return d;
}

d3.csv("religionWorldTotals.csv", type114, render114);

// example-115
var sliceSizeColumn115 = "population";
var pie115 = d3.layout.pie();
var arc115 = d3.svg.arc();

arc115.outerRadius(100);
arc115.innerRadius(0);

function render115(data){
  pie115.value(function(d) {
    return d[sliceSizeColumn115];
  });

  var pieData115 = pie115(data);
  var singleSlice115 = pieData115[0];
  var svgPathString115 = arc115(singleSlice115);

  d3.select("#example-115").append("pre")
    .text(JSON.stringify(svgPathString115, null, 2));
}

function type115(d){
  d.population = +d.population;
  return d;
}

d3.csv("religionWorldTotals.csv", type115, render115);

// example-116
var outerWidth116 = 500;
var outerHeight116 = 250;
var margin116 = { left: 90, top: 30, right: 30, bottom: 30 };
var radiusMax116 = 80;

var xColumn116 = "name";
var sliceSizeColumn116 = "population";
var colorColumn116 = "religion";

var innerWidth116  = outerWidth116  - margin116.left - margin116.right;
var innerHeight116 = outerHeight116 - margin116.top  - margin116.bottom;

var svg116 = d3.select("#example-116").append("svg")
 .attr("width",  outerWidth116)
 .attr("height", outerHeight116);
var g116 = svg116.append("g")
 .attr("transform", "translate(" + margin116.left + "," + margin116.top + ")");
var xAxisG116 = g116.append("g")
 .attr("class", "x axis")
 .attr("transform", "translate(0," + innerHeight116 + ")");
var pieG116 = g116.append("g");

var xScale116 = d3.scale.ordinal().rangePoints([0, innerWidth116]);
var colorScale116 = d3.scale.category10();

var xAxis116 = d3.svg.axis().scale(xScale116).orient("bottom")
 .outerTickSize(0);

var pie116 = d3.layout.pie();
var arc116 = d3.svg.arc();

arc116.outerRadius(radiusMax116);
arc116.innerRadius(0);

function render116(data){
 xScale116.domain(data.map( function (d){ return d[xColumn116]; }));
 colorScale116.domain(data.map(function (d){ return d[colorColumn116]; }));

 pie116.value(function(d) { return d[sliceSizeColumn116]; });

 xAxisG116.call(xAxis116);

 var pieData116 = pie116(data);

 pieG116.attr("transform", "translate(" + innerWidth116 / 2 + "," + innerHeight116 / 2 + ")");

 var slices116 = pieG116.selectAll("path").data(pieData116);

 slices116.enter().append("path");

 slices116
   .attr("d", arc116)
   .attr("fill", function (d){ return colorScale116(d.data[colorColumn116]); });
 slices116.exit().remove();
}

function type116(d){
 d.name = "World";
 d.population = +d.population;
 return d;
}

d3.csv("religionWorldTotals.csv", type116, render116);

// example-117
var outerWidth117 = 500;
 var outerHeight117 = 250;
 var margin117 = { left: 90, top: 30, right: 150, bottom: 30 };
 var radiusMax117 = 80;

 var xColumn117 = "name";
 var sliceSizeColumn117 = "population";
 var colorColumn117 = "religion";

 var innerWidth117 = outerWidth117 - margin117.left - margin117.right;
 var innerHeight117 = outerHeight117 - margin117.top - margin117.bottom;

 var svg117 = d3.select("#example-117").append("svg")
  .attr("width", outerWidth117)
  .attr("height", outerHeight117);
 var g117 = svg117.append("g")
  .attr("transform", "translate(" + margin117.left + "," + margin117.top + ")");
 var xAxisG117 = g117.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + innerHeight117 + ")");
 // group element that contain all the pie slices
 var pieG117 = g117.append("g");

 // color legend
 var colorLegendG117 = g117.append("g")
  .attr("class", "color-legend")
  .attr("transform", "translate(235, 20)");

 var xScale117 = d3.scale.ordinal().rangePoints([0, innerWidth117]);
 var colorScale117 = d3.scale.category10();

 var xAxis117 = d3.svg.axis().scale(xScale117).orient("bottom")
  .outerTickSize(0);

 var pie117 = d3.layout.pie();
 var arc117 = d3.svg.arc();
 arc117.outerRadius(radiusMax117);
 arc117.innerRadius(0);

 var colorLegend117 = d3.legend.color()
    .scale(colorScale117)
    .shapePadding(3)
    .shapeWidth(15)
    .shapeHeight(15)
    .labelOffset(4);

 function render117(data){
  xScale117.domain(data.map( function (d){ return d[xColumn117]; }));
  colorScale117.domain(data.map(function (d){ return d[colorColumn117]; }));
  pie117.value(function(d) { return d[sliceSizeColumn117]; });

  xAxisG117.call(xAxis117);

  var pieData117 = pie117(data);

  pieG117.attr("transform", "translate(" + innerWidth117 / 2 + "," + innerHeight117 / 2 + ")");

  // binding all pie data to the slice paths
  var slices117 = pieG117.selectAll("path").data(pieData117);
  slices117.enter().append("path");
  slices117
   .attr("d", arc117)
   .attr("fill", function (d){ return colorScale117(d.data[colorColumn117]); });
  slices117.exit().remove();

  colorLegendG117.call(colorLegend117);
 }

 function type117(d){
   d.name = "World";
   d.population = +d.population;
   return d;
 }

 d3.csv("religionWorldTotals.csv", type117, render117);

 // example-118
 var outerWidth118 = 500;
  var outerHeight118 = 250;
  var margin118 = { left: 90, top: 30, right: 150, bottom: 30 };
  var outerRadius118 = 80;
  var innerRadius118 = 40;

  var xColumn118 = "name";
  var sliceSizeColumn118 = "population";
  var colorColumn118 = "religion";

  var innerWidth118 = outerWidth118 - margin118.left - margin118.right;
  var innerHeight118 = outerHeight118 - margin118.top - margin118.bottom;

  var svg118 = d3.select("#example-118").append("svg")
   .attr("width", outerWidth118)
   .attr("height", outerHeight118);
  var g118 = svg118.append("g")
   .attr("transform", "translate(" + margin118.left + "," + margin118.top + ")");
  var xAxisG118 = g118.append("g")
   .attr("class", "x axis")
   .attr("transform", "translate(0," + innerHeight118 + ")");
  // group element that contain all the pie slices
  var pieG118 = g118.append("g");

  // color legend
  var colorLegendG118 = g118.append("g")
   .attr("class", "color-legend")
   .attr("transform", "translate(235, 20)");

  var xScale118 = d3.scale.ordinal().rangePoints([0, innerWidth118]);
  var colorScale118 = d3.scale.category10();

  var xAxis118 = d3.svg.axis().scale(xScale118).orient("bottom")
   .outerTickSize(0);

  var pie118 = d3.layout.pie();
  var arc118 = d3.svg.arc();
  arc118.outerRadius(outerRadius118);
  arc118.innerRadius(innerRadius118);

  var colorLegend118 = d3.legend.color()
     .scale(colorScale118)
     .shapePadding(3)
     .shapeWidth(15)
     .shapeHeight(15)
     .labelOffset(4);

  function render118(data){
   xScale118.domain(data.map( function (d){ return d[xColumn118]; }));
   colorScale118.domain(data.map(function (d){ return d[colorColumn118]; }));
   pie118.value(function(d) { return d[sliceSizeColumn118]; });

   xAxisG118.call(xAxis118);

   var pieData118 = pie118(data);

   pieG118.attr("transform", "translate(" + innerWidth118 / 2 + "," + innerHeight118 / 2 + ")");

   // binding all pie data to the slice paths
   var slices118 = pieG118.selectAll("path").data(pieData118);
   slices118.enter().append("path");
   slices118
    .attr("d", arc118)
    .attr("fill", function (d){ return colorScale118(d.data[colorColumn118]); });
   slices118.exit().remove();

   colorLegendG118.call(colorLegend118);
  }

  function type118(d){
    d.name = "World";
    d.population = +d.population;
    return d;
  }

  d3.csv("religionWorldTotals.csv", type118, render118);
