$('#nav').affix({
  offset: {
    top: $('#nav').offset().top
  }
})

// example 58
var data58 = [1, 2, 3, 4, 5]
var scale58 = d3.scale.linear()
  .domain([1, 5]) // Data space
  .range([0, 200]) // Pixel space

var svg58 = d3.select('#example-58').append('svg')
  .attr('width', 250)
  .attr('height', 250)

svg58.selectAll('rect')
  .data(data58)
  .enter().append('rect')
  .attr('x', function (d) { return scale58(d) })
  .attr('y', 50)
  .attr('width', 20)
  .attr('height', 20)

// example 59
var data59 = [1, 2, 3, 4, 5]
var scale59 = d3.scale.linear()
  .domain([1, 5]) // Data space
  .range([0, 200]) // Pixel space

var svg59 = d3.select('#example-59').append('svg')
  .attr('width', 250)
  .attr('height', 250)

svg59.selectAll('rect')
  .data(data59)
  .enter().append('rect')
  .attr('x', scale59)
  .attr('y', 50)
  .attr('width', 20)
  .attr('height', 20)

// example 60
var data60 = [1, 2, 3, 4, 5]
var scale60 = d3.scale.linear()
  .domain([1, 5]) // Data space
  .range([0, 200]) // Pixel space

var svg60 = d3.select('#example-60').append('svg')
  .attr('width', 250)
  .attr('height', 250)

var rects60 = svg60.selectAll('rect').data(data60)

rects60.enter().append('rect')
  .attr('x', scale60)
  .attr('y', 50)
  .attr('width', 20)
  .attr('height', 20)

// example 61
var scale61 = d3.scale.linear()
  .domain([1, 5]) // Data space
  .range([0, 200]) // Pixel space

var svg61 = d3.select('#example-61').append('svg')
  .attr('width', 250)
  .attr('height', 250)

function render61 (data, color) {
  var rects61 = svg61.selectAll('rect').data(data)

  rects61.enter().append('rect')
    .attr('x', scale61)
    .attr('y', 50)
    .attr('width', 20)
    .attr('height', 20)
    .attr('fill', color)
}

render61([1, 2, 3], 'red')
render61([1, 2, 3, 4, 5], 'blue')

// example 62
var scale62 = d3.scale.linear()
  .domain([1, 5]) // Data space
  .range([0, 200]) // Pixel space

var svg62 = d3.select('#example-62').append('svg')
  .attr('width', 250)
  .attr('height', 250)

function render62 (data, color) {
  // Bind data
  var rects62 = svg62.selectAll('rect').data(data)

  // Enter
  rects62.enter().append('rect')
  // Update
  rects62
    .attr('x', scale62)
    .attr('y', 50)
    .attr('width', 20)
    .attr('height', 20)
    .attr('fill', color)
}

render62([1, 2, 2.5], 'red')
render62([1, 2, 3, 4, 5], 'blue')

// example 63
var scale63 = d3.scale.linear()
  .domain([1, 5]) // Data space
  .range([0, 200]) // Pixel space

var svg63 = d3.select('#example-63').append('svg')
  .attr('width', 250)
  .attr('height', 250)

function render63 (data, color) {
  // binds data
  var rects63 = svg63.selectAll('rect').data(data)

  // Enter
  rects63.enter().append('rect')
    .attr('y', 50)
    .attr('width', 20)
    .attr('height', 20)

  // Update phase
  rects63
    .attr('x', scale63)
    .attr('fill', color)
}

render63([1, 2, 3], 'red')
render63([1, 2, 3, 4, 5], 'blue')

// example 64
var scale64 = d3.scale.linear()
  .domain([1, 5]) // Data space
  .range([0, 200]) // Pixel space

var svg64 = d3.select('#example-64').append('svg')
  .attr('width', 250)
  .attr('height', 250)

function render64 (data, color) {
  // Bind data
  var rects64 = svg64.selectAll('rect').data(data)

  // Enter
  rects64.enter().append('rect')
    .attr('y', 50)
    .attr('width', 20)
    .attr('height', 20)

  // Update
  rects64
    .attr('x', scale64)
    .attr('fill', color)
}

render64([1, 2, 2.5], 'red')
render64([1, 2, 3, 4, 5], 'blue')
// render([1, 2],          "green")

// example 65
var scale65 = d3.scale.linear()
  .domain([1, 5]) // Data space
  .range([0, 200]) // Pixel space

var svg65 = d3.select('#example-65').append('svg')
  .attr('width', 250)
  .attr('height', 250)

function render65 (data, color) {
  // Bind data
  var rects65 = svg65.selectAll('rect').data(data)

  // Enter
  rects65.enter().append('rect')
    .attr('y', 50)
    .attr('width', 20)
    .attr('height', 20)

  // Update
  rects65
    .attr('x', scale65)
    .attr('fill', color)

  // Exit
  rects65
    .exit()
    .remove()
}

render65([1, 2, 2.5], 'red')
render65([1, 2, 3, 4, 5], 'blue')
render65([1, 2], 'green')

// example 70
var svg70 = d3.select('#example-70').append('svg')
  .attr('width', 250)
  .attr('height', 250)

var xScale70 = d3.scale.linear().range([0, 250])
var yScale70 = d3.scale.linear().range([0, 250])

function render70 (data) {
  xScale70.domain(d3.extent(data, function (d) { return d.sepal_length; }))
  yScale70.domain(d3.extent(data, function (d) { return d.petal_length; }))

  var circles70 = svg70.selectAll('circle').data(data)

  circles70.enter().append('circle').attr('r', 10)

  circles70
    .attr('cx', function (d) { return xScale70(d.sepal_length); })
    .attr('cy', function (d) { return yScale70(d.petal_length); })

  circles70.exit().remove()
}

function type70 (d) {
  d.sepal_length = +d.sepal_length
  d.sepal_width = +d.sepal_width
  d.petal_length = +d.petal_length
  d.petal_width = +d.petal_width
  return d
}

d3.csv('iris.csv', type70, render70)
// render70(iris_data)

// example 71
var svg71 = d3.select('#example-71').append('svg')
  .attr('width', 250)
  .attr('height', 250)

var xScale71 = d3.scale.linear().range([0, 250])
var yScale71 = d3.scale.linear().range([250, 0])

function render71 (data) {
  xScale71.domain(d3.extent(data, function (d) { return d.sepal_length; }))
  yScale71.domain(d3.extent(data, function (d) { return d.petal_length; }))

  var circles71 = svg71.selectAll('circle').data(data)

  circles71.enter().append('circle').attr('r', 10)

  circles71
    .attr('cx', function (d) { return xScale71(d.sepal_length); })
    .attr('cy', function (d) { return yScale71(d.petal_length); })

  circles71.exit().remove()
}

function type71 (d) {
  d.sepal_length = +d.sepal_length
  d.sepal_width = +d.sepal_width
  d.petal_length = +d.petal_length
  d.petal_width = +d.petal_width
  return d
}

d3.csv('iris.csv', type71, render71)
// render70(iris_data)

// example 72
var outerWidth72 = 300
var outerHeight72 = 250
var circleRadius72 = 5

var svg72 = d3.select('#example-72').append('svg')
  .attr('width', outerWidth72)
  .attr('height', outerHeight72)

var xScale72 = d3.scale.linear().range([0, outerWidth72])
var yScale72 = d3.scale.linear().range([outerWidth72, 0])

function render72 (data) {
  xScale72.domain(d3.extent(data, function (d) { return d.sepal_length; }))
  yScale72.domain(d3.extent(data, function (d) { return d.petal_length; }))

  var circles72 = svg72.selectAll('circle').data(data)

  circles72.enter().append('circle').attr('r', circleRadius72)

  circles72
    .attr('cx', function (d) { return xScale72(d.sepal_length); })
    .attr('cy', function (d) { return yScale72(d.petal_length); })

  circles72.exit().remove()
}

function type72 (d) {
  d.sepal_length = +d.sepal_length
  d.sepal_width = +d.sepal_width
  d.petal_length = +d.petal_length
  d.petal_width = +d.petal_width
  return d
}

d3.csv('iris.csv', type72, render72)
// render70(iris_data)

// example 73
var outerWidth73 = 300
var outerHeight73 = 250
var circleRadius73 = 5
var xColumn73 = 'sepal_length'
var yColumn73 = 'petal_length'

var svg73 = d3.select('#example-73').append('svg')
  .attr('width', outerWidth73)
  .attr('height', outerHeight73)

var xScale73 = d3.scale.linear().range([0, outerWidth73])
var yScale73 = d3.scale.linear().range([outerWidth73, 0])

function render73 (data) {
  xScale73.domain(d3.extent(data, function (d) { return d[xColumn73]; }))
  yScale73.domain(d3.extent(data, function (d) { return d[yColumn73]; }))

  var circles73 = svg73.selectAll('circle').data(data)

  circles73.enter().append('circle').attr('r', circleRadius73)

  circles73
    .attr('cx', function (d) { return xScale73(d[xColumn73]); })
    .attr('cy', function (d) { return yScale73(d[yColumn73]); })

  circles73.exit().remove()
}

function type73 (d) {
  d.sepal_length = +d.sepal_length
  d.sepal_width = +d.sepal_width
  d.petal_length = +d.petal_length
  d.petal_width = +d.petal_width
  return d
}

d3.csv('iris.csv', type73, render73)
// render70(iris_data)

// example 74
var outerWidth74 = 300
var outerHeight74 = 250
var rMin74 = 5; // "r" stands for radius
var rMax74 = 20
var xColumn74 = 'sepal_length'
var yColumn74 = 'petal_length'
var rColumn74 = 'sepal_width'

var svg74 = d3.select('#example-74').append('svg')
  .attr('width', outerWidth74)
  .attr('height', outerHeight74)

var xScale74 = d3.scale.linear().range([0, outerWidth74])
var yScale74 = d3.scale.linear().range([outerWidth74, 0])
var rScale74 = d3.scale.linear().range([rMin74, rMax74])

function render74 (data) {
  xScale74.domain(d3.extent(data, function (d) { return d[xColumn74]; }))
  yScale74.domain(d3.extent(data, function (d) { return d[yColumn74]; }))
  rScale74.domain(d3.extent(data, function (d) { return d[rColumn74]; }))

  var circles74 = svg74.selectAll('circle').data(data)

  circles74.enter().append('circle')

  circles74
    .attr('cx', function (d) { return xScale74(d[xColumn74]); })
    .attr('cy', function (d) { return yScale74(d[yColumn74]); })
    .attr('r', function (d) { return rScale74(d[rColumn74]); })

  circles74.exit().remove()
}

function type74 (d) {
  d.sepal_length = +d.sepal_length
  d.sepal_width = +d.sepal_width
  d.petal_length = +d.petal_length
  d.petal_width = +d.petal_width
  return d
}

d3.csv('iris.csv', type74, render74)
// render70(iris_data)

// example 75
var outerWidth75 = 300
var outerHeight75 = 250
var rMin75 = 5; // "r" stands for radius
var rMax75 = 20
var xColumn75 = 'sepal_length'
var yColumn75 = 'petal_length'
var rColumn75 = 'sepal_width'

var svg75 = d3.select('#example-75').append('svg')
  .attr('width', outerWidth75)
  .attr('height', outerHeight75)

var xScale75 = d3.scale.linear().range([0, outerWidth75])
var yScale75 = d3.scale.linear().range([outerWidth75, 0])
var rScale75 = d3.scale.linear().range([rMin75, rMax75])

function render75 (data) {
  xScale75.domain(d3.extent(data, function (d) { return d[xColumn75]; }))
  yScale75.domain(d3.extent(data, function (d) { return d[yColumn75]; }))
  rScale75.domain(d3.extent(data, function (d) { return d[rColumn75]; }))

  var circles75 = svg75.selectAll('circle').data(data)

  circles75.enter().append('circle')

  circles75
    .attr('cx', function (d) { return xScale75(d[xColumn75]); })
    .attr('cy', function (d) { return yScale75(d[yColumn75]); })
    .attr('r', function (d) { return rScale75(d[rColumn75]); })

  circles75.exit().remove()
}

function type75 (d) {
  d.sepal_length = +d.sepal_length
  d.sepal_width = +d.sepal_width
  d.petal_length = +d.petal_length
  d.petal_width = +d.petal_width
  return d
}

d3.csv('iris.csv', type75, render75)

// example 76
var outerWidth76 = 300
var outerHeight76 = 250
var rMin76 = 5; // "r" stands for radius
var rMax76 = 20
var xColumn76 = 'sepal_length'
var yColumn76 = 'petal_length'
var rColumn76 = 'sepal_width'

var svg76 = d3.select('#example-76').append('svg')
  .attr('width', outerWidth76)
  .attr('height', outerHeight76)

var xScale76 = d3.scale.linear().range([0, outerWidth76])
var yScale76 = d3.scale.linear().range([outerWidth76, 0])
var rScale76 = d3.scale.linear().range([rMin76, rMax76])

function render76 (data) {
  xScale76.domain(d3.extent(data, function (d) { return d[xColumn76]; }))
  yScale76.domain(d3.extent(data, function (d) { return d[yColumn76]; }))
  rScale76.domain(d3.extent(data, function (d) { return d[rColumn76]; }))

  var circles76 = svg76.selectAll('circle').data(data)

  circles76.enter().append('circle')

  circles76
    .attr('cx', function (d) { return xScale76(d[xColumn76]); })
    .attr('cy', function (d) { return yScale76(d[yColumn76]); })
    .attr('r', function (d) { return rScale76(d[rColumn76]); })

  circles76.exit().remove()
}

function type76 (d) {
  d.sepal_length = +d.sepal_length
  d.sepal_width = +d.sepal_width
  d.petal_length = +d.petal_length
  d.petal_width = +d.petal_width
  return d
}

d3.csv('iris.csv', type76, render76)
// render70(iris_data)

// example 77
var outerWidth77 = 300
var outerHeight77 = 250
var rMin77 = 5 // "r" stands for radius
var rMax77 = 20
var xColumn77 = 'sepal_length'
var yColumn77 = 'petal_length'
var rColumn77 = 'sepal_width'
var columnColor77 = 'species'

var svg77 = d3.select('#example-77').append('svg')
  .attr('width', outerWidth77)
  .attr('height', outerHeight77)

var xScale77 = d3.scale.linear().range([0, outerWidth77])
var yScale77 = d3.scale.linear().range([outerWidth77, 0])
var rScale77 = d3.scale.linear().range([rMin77, rMax77])
var colorScale77 = d3.scale.category10() // ordinal scale with range of colors

function render77 (data) {
  xScale77.domain(d3.extent(data, function (d) { return d[xColumn77]; }))
  yScale77.domain(d3.extent(data, function (d) { return d[yColumn77]; }))
  rScale77.domain(d3.extent(data, function (d) { return d[rColumn77]; }))

  var circles77 = svg77.selectAll('circle').data(data)

  circles77.enter().append('circle')

  circles77
    .attr('cx', function (d) { return xScale77(d[xColumn77]); })
    .attr('cy', function (d) { return yScale77(d[yColumn77]); })
    .attr('r', function (d) { return rScale77(d[rColumn77]); })
    .attr('stroke', function (d) { return colorScale77(d[columnColor77]); })
}

function type77 (d) {
  d.sepal_length = +d.sepal_length
  d.sepal_width = +d.sepal_width
  d.petal_length = +d.petal_length
  d.petal_width = +d.petal_width
  return d
}

d3.csv('iris.csv', type77, render77)

// example 78
var outerWidth78 = 300
var outerHeight78 = 250
var rMin78 = 1; // "r" stands for radius
var rMax78 = 6
var xColumn78 = 'sepal_length'
var yColumn78 = 'petal_length'
var rColumn78 = 'sepal_width'
var columnColor78 = 'species'

var svg78 = d3.select('#example-78').append('svg')
  .attr('width', outerWidth78)
  .attr('height', outerHeight78)

var xScale78 = d3.scale.linear().range([0, outerWidth78])
var yScale78 = d3.scale.linear().range([outerWidth78, 0])
var rScale78 = d3.scale.linear().range([rMin78, rMax78])
var colorScale78 = d3.scale.category10() // ordinal scale with range of colors

function render78 (data) {
  xScale78.domain(d3.extent(data, function (d) { return d[xColumn78]; }))
  yScale78.domain(d3.extent(data, function (d) { return d[yColumn78]; }))
  rScale78.domain(d3.extent(data, function (d) { return d[rColumn78]; }))

  var circles78 = svg78.selectAll('circle').data(data)

  circles78.enter().append('circle')

  circles78
    .attr('cx', function (d) { return xScale78(d[xColumn78]); })
    .attr('cy', function (d) { return yScale78(d[yColumn78]); })
    .attr('r', function (d) { return rScale78(d[rColumn78]); })
    .attr('fill', function (d) { return colorScale78(d[columnColor78]); })

  circles78.exit().remove()
}

function type78 (d) {
  d.sepal_length = +d.sepal_length
  d.sepal_width = +d.sepal_width
  d.petal_length = +d.petal_length
  d.petal_width = +d.petal_width
  return d
}

d3.csv('iris.csv', type78, render78)
// render70(iris_data)

// example 79
var outerWidth79 = 300
var outerHeight79 = 250
var circleRadius79 = 2
var xColumn79 = 'population'
var yColumn79 = 'gdp'

var svg79 = d3.select('#example-79').append('svg')
  .attr('width', outerWidth79)
  .attr('height', outerHeight79)

var xScale79 = d3.scale.linear().range([0, outerWidth79])
var yScale79 = d3.scale.linear().range([outerHeight79, 0])

function render79 (data) {
  xScale79.domain(d3.extent(data, function (d) { return d[xColumn79]; }))
  yScale79.domain(d3.extent(data, function (d) { return d[yColumn79]; }))

  var circles79 = svg79.selectAll('circle').data(data)

  circles79.enter().append('circle')

  circles79
    .attr('cx', function (d) { return xScale79(d[xColumn79]); })
    .attr('cy', function (d) { return yScale79(d[yColumn79]); })
    .attr('r', circleRadius79)

  circles79.exit().remove()
}

function type79 (d) {
  d.population = +d.population
  d.gdp = +d.gdp
  return d
}

d3.csv('countries_population_GDP.csv', type79, render79)

// example 80
var outerWidth80 = 300
var outerHeight80 = 250
var circleRadius80 = 2
var xColumn80 = 'population'
var yColumn80 = 'gdp'

var svg80 = d3.select('#example-80').append('svg')
  .attr('width', outerWidth80)
  .attr('height', outerHeight80)

var xScale80 = d3.scale.log().range([0, outerWidth80])
var yScale80 = d3.scale.log().range([outerHeight80, 0])

function render80 (data) {
  xScale80.domain(d3.extent(data, function (d) { return d[xColumn80]; }))
  yScale80.domain(d3.extent(data, function (d) { return d[yColumn80]; }))

  var circles80 = svg80.selectAll('circle').data(data)

  circles80.enter().append('circle')

  circles80
    .attr('cx', function (d) { return xScale80(d[xColumn80]); })
    .attr('cy', function (d) { return yScale80(d[yColumn80]); })
    .attr('r', circleRadius80)

  circles80.exit().remove()
}

function type80 (d) {
  d.population = +d.population
  d.gdp = +d.gdp
  return d
}

d3.csv('countries_population_GDP.csv', type80, render80)

// example 81
var outerWidth81 = 300
var outerHeight81 = 250
var rMin81 = 1
var rMax81 = 6
var xColumn81 = 'population'
var yColumn81 = 'gdp'
var rColumn81 = 'population'

var svg81 = d3.select('#example-81').append('svg')
  .attr('width', outerWidth81)
  .attr('height', outerHeight81)

var xScale81 = d3.scale.log().range([0, outerWidth81])
var yScale81 = d3.scale.log().range([outerHeight81, 0])
var rScale81 = d3.scale.linear().range([rMin81, rMax81])

function render81 (data) {
  xScale81.domain(d3.extent(data, function (d) { return d[xColumn81]; }))
  yScale81.domain(d3.extent(data, function (d) { return d[yColumn81]; }))
  rScale81.domain(d3.extent(data, function (d) { return d[rColumn81]; }))

  var circles81 = svg81.selectAll('circle').data(data)

  circles81.enter().append('circle')

  circles81
    .attr('cx', function (d) { return xScale81(d[xColumn81]); })
    .attr('cy', function (d) { return yScale81(d[yColumn81]); })
    .attr('r', function (d) { return rScale81(d[rColumn81]); })

  circles81.exit().remove()
}

function type81 (d) {
  d.population = +d.population
  d.gdp = +d.gdp
  return d
}

d3.csv('countries_population_GDP.csv', type81, render81)

// example 82
var outerWidth82 = 300
var outerHeight82 = 250
var rMin82 = 1
var rMax82 = 6
var xColumn82 = 'population'
var yColumn82 = 'gdp'
var rColumn82 = 'population'

var svg82 = d3.select('#example-82').append('svg')
  .attr('width', outerWidth82)
  .attr('height', outerHeight82)

var xScale82 = d3.scale.log().range([0, outerWidth82])
var yScale82 = d3.scale.log().range([outerHeight82, 0])
var rScale82 = d3.scale.log().range([rMin82, rMax82])

function render82 (data) {
  xScale82.domain(d3.extent(data, function (d) { return d[xColumn82]; }))
  yScale82.domain(d3.extent(data, function (d) { return d[yColumn82]; }))
  rScale82.domain(d3.extent(data, function (d) { return d[rColumn82]; }))

  var circles82 = svg82.selectAll('circle').data(data)

  circles82.enter().append('circle')

  circles82
    .attr('cx', function (d) { return xScale82(d[xColumn82]); })
    .attr('cy', function (d) { return yScale82(d[yColumn82]); })
    .attr('r', function (d) { return rScale82(d[rColumn82]); })

  circles82.exit().remove()
}

function type82 (d) {
  d.population = +d.population
  d.gdp = +d.gdp
  return d
}

d3.csv('countries_population_GDP.csv', type82, render82)

// example 83
var outerWidth83 = 300
var outerHeight83 = 250
var rMin83 = 0
var rMax83 = 20
var xColumn83 = 'population'
var yColumn83 = 'gdp'
var rColumn83 = 'population'

var svg83 = d3.select('#example-83').append('svg')
  .attr('width', outerWidth83)
  .attr('height', outerHeight83)

var xScale83 = d3.scale.log().range([0, outerWidth83])
var yScale83 = d3.scale.log().range([outerHeight83, 0])
var rScale83 = d3.scale.sqrt().range([rMin83, rMax83])

function render83 (data) {
  xScale83.domain(d3.extent(data, function (d) { return d[xColumn83]; }))
  yScale83.domain(d3.extent(data, function (d) { return d[yColumn83]; }))
  rScale83.domain([0, d3.max(data, function (d) { return d[rColumn83]; })])

  var circles83 = svg83.selectAll('circle').data(data)

  circles83.enter().append('circle')

  circles83
    .attr('cx', function (d) { return xScale83(d[xColumn83]); })
    .attr('cy', function (d) { return yScale83(d[yColumn83]); })
    .attr('r', function (d) { return rScale83(d[rColumn83]); })

  circles83.exit().remove()
}

function type83 (d) {
  d.population = +d.population
  d.gdp = +d.gdp
  return d
}

d3.csv('countries_population_GDP.csv', type83, render83)

// example 84
var outerWidth84 = 300
var outerHeight84 = 250
var innerWidth84 = outerWidth84 - 30
var innerHeight84 = outerHeight84 - 30
var rMin84 = 0
var rMax84 = 20
var xColumn84 = 'population'
var yColumn84 = 'gdp'
var rColumn84 = 'population'

var svg84 = d3.select('#example-84').append('svg')
  .attr('width', outerWidth84)
  .attr('height', outerHeight84)

var xScale84 = d3.scale.log().range([0, innerWidth84])
var yScale84 = d3.scale.log().range([innerWidth84, 0])
var rScale84 = d3.scale.sqrt().range([rMin84, rMax84])

function render84 (data) {
  xScale84.domain(d3.extent(data, function (d) { return d[xColumn84]; }))
  yScale84.domain(d3.extent(data, function (d) { return d[yColumn84]; }))
  rScale84.domain([0, d3.max(data, function (d) { return d[rColumn84]; })])

  var circles84 = svg84.selectAll('circle').data(data)

  circles84.enter().append('circle')

  circles84
    .attr('cx', function (d) { return xScale84(d[xColumn84]); })
    .attr('cy', function (d) { return yScale84(d[yColumn84]); })
    .attr('r', function (d) { return rScale84(d[rColumn84]); })

  circles84.exit().remove()
}

function type84 (d) {
  d.population = +d.population
  d.gdp = +d.gdp
  return d
}

d3.csv('countries_population_GDP.csv', type84, render84)

// example 85
var outerWidth85 = 300
var outerHeight85 = 250
var innerWidth85 = outerWidth85 - 30 - 30
var innerHeight85 = outerHeight85 - 30 - 30
var rMin85 = 0
var rMax85 = 20
var xColumn85 = 'population'
var yColumn85 = 'gdp'
var rColumn85 = 'population'

var svg85 = d3.select('#example-85').append('svg')
  .attr('width', outerWidth85)
  .attr('height', outerHeight85)

var g85 = svg85.append('g')
  .attr('transform', 'translate(30, 30)')

var xScale85 = d3.scale.log().range([0, innerWidth85])
var yScale85 = d3.scale.log().range([innerWidth85, 0])
var rScale85 = d3.scale.sqrt().range([rMin85, rMax85])

function render85 (data) {
  xScale85.domain(d3.extent(data, function (d) { return d[xColumn85]; }))
  yScale85.domain(d3.extent(data, function (d) { return d[yColumn85]; }))
  rScale85.domain([0, d3.max(data, function (d) { return d[rColumn85]; })])

  var circles85 = g85.selectAll('circle').data(data)

  circles85.enter().append('circle')

  circles85
    .attr('cx', function (d) { return xScale85(d[xColumn85]); })
    .attr('cy', function (d) { return yScale85(d[yColumn85]); })
    .attr('r', function (d) { return rScale85(d[rColumn85]); })

  circles85.exit().remove()
}

function type85 (d) {
  d.population = +d.population
  d.gdp = +d.gdp
  return d
}

d3.csv('countries_population_GDP.csv', type85, render85)

// example 86
var outerWidth86 = 300
var outerHeight86 = 250

var marginTop86 = 30
var marginRight86 = 30
var marginBottom86 = 30
var marginLeft86 = 30

var innerWidth86 = outerWidth86 - marginLeft86 - marginRight86
var innerHeight86 = outerHeight86 - marginTop86 - marginBottom86
var rMin86 = 0
var rMax86 = 20
var xColumn86 = 'population'
var yColumn86 = 'gdp'
var rColumn86 = 'population'

var svg86 = d3.select('#example-86').append('svg')
  .attr('width', outerWidth86)
  .attr('height', outerHeight86)

var g86 = svg86.append('g')
  .attr('transform', 'translate(' + marginLeft86 + ',' + marginTop86 + ')')

var xScale86 = d3.scale.log().range([0, innerWidth86])
var yScale86 = d3.scale.log().range([innerWidth86, 0])
var rScale86 = d3.scale.sqrt().range([rMin86, rMax86])

function render86 (data) {
  xScale86.domain(d3.extent(data, function (d) { return d[xColumn86]; }))
  yScale86.domain(d3.extent(data, function (d) { return d[yColumn86]; }))
  rScale86.domain([0, d3.max(data, function (d) { return d[rColumn86]; })])

  var circles86 = g86.selectAll('circle').data(data)

  circles86.enter().append('circle')

  circles86
    .attr('cx', function (d) { return xScale86(d[xColumn86]); })
    .attr('cy', function (d) { return yScale86(d[yColumn86]); })
    .attr('r', function (d) { return rScale86(d[rColumn86]); })

  circles86.exit().remove()
}

function type86 (d) {
  d.population = +d.population
  d.gdp = +d.gdp
  return d
}

d3.csv('countries_population_GDP.csv', type86, render86)

// example 87
var outerWidth87 = 300
var outerHeight87 = 250

// D3 margin convention
var margin87 = { left: 30, top: 30, right: 30, bottom: 30 }

var innerWidth87 = outerWidth87 - margin87.left - margin87.right
var innerHeight87 = outerHeight87 - margin87.top - margin87.bottom
var rMin87 = 0
var rMax87 = 20
var xColumn87 = 'population'
var yColumn87 = 'gdp'
var rColumn87 = 'population'

var svg87 = d3.select('#example-87').append('svg')
  .attr('width', outerWidth87)
  .attr('height', outerHeight87)

var g87 = svg87.append('g')
  .attr('transform', 'translate(' + margin87.left + ',' + margin87.top + ')')

var xScale87 = d3.scale.log().range([0, innerWidth87])
var yScale87 = d3.scale.log().range([innerWidth87, 0])
var rScale87 = d3.scale.sqrt().range([rMin87, rMax87])

function render87 (data) {
  xScale87.domain(d3.extent(data, function (d) { return d[xColumn87]; }))
  yScale87.domain(d3.extent(data, function (d) { return d[yColumn87]; }))
  rScale87.domain([0, d3.max(data, function (d) { return d[rColumn87]; })])

  var circles87 = g87.selectAll('circle').data(data)

  circles87.enter().append('circle')

  circles87
    .attr('cx', function (d) { return xScale87(d[xColumn87]); })
    .attr('cy', function (d) { return yScale87(d[yColumn87]); })
    .attr('r', function (d) { return rScale87(d[rColumn87]); })

  circles87.exit().remove()
}

function type87 (d) {
  d.population = +d.population
  d.gdp = +d.gdp
  return d
}

d3.csv('countries_population_GDP.csv', type87, render87)

var temp_data = [
  { timestamp: '2015-03-20T21:00:00.000Z', temperature: 23.9516625615764 },
  { timestamp: '2015-03-20T22:00:00.000Z', temperature: 23.0728888291688 },
  { timestamp: ' 2015-03-20T23:00:00.000Z', temperature: 22.2708190476318 },
  { timestamp: '2015-03-21T00:00:00.000Z', temperature: 21.3394373423804 },
  { timestamp: '2015-03-21T01:00:00.000Z', temperature: 20.1010743049325 },
  { timestamp: '2015-03-21T02:00:00.000Z', temperature: 18.4150717551479 },
  { timestamp: '2015-03-21T03:00:00.000Z', temperature: 17.7483817583905 },
  { timestamp: '2015-03-21T04:00:00.000Z', temperature: 17.6589726749868 },
  { timestamp: '2015-03-21T05:00:00.000Z', temperature: 17.0922334804965 },
  { timestamp: '2015-03-21T06:00:00.000Z', temperature: 17.9022626474071 },
  { timestamp: '2015-03-21T07:00:00.000Z', temperature: 17.9134315019288 },
  { timestamp: '2015-03-21T08:00:00.000Z', temperature: 17.9623415917395 },
  { timestamp: '2015-03-21T09:00:00.000Z', temperature: 18.6299049947767 },
  { timestamp: '2015-03-21T10:00:00.000Z', temperature: 18.7246461115231 },
  { timestamp: '2015-03-21T11:00:00.000Z', temperature: 18.3452032121395 },
  { timestamp: '2015-03-21T12:00:00.000Z', temperature: 17.9509405148159 },
  { timestamp: '2015-03-21T13:00:00.000Z', temperature: 17.6459367384257 },
  { timestamp: '2015-03-21T14:00:00.000Z', temperature: 18.0026108196051 },
  { timestamp: '2015-03-21T15:00:00.000Z', temperature: 18.6413944821435 },
  { timestamp: '2015-03-21T16:00:00.000Z', temperature: 19.3671431509997 },
  { timestamp: '2015-03-21T17:00:00.000Z', temperature: 20.8082012083461 },
  { timestamp: '2015-03-21T18:00:00.000Z', temperature: 22.5238576663828 },
  { timestamp: '2015-03-21T19:00:00.000Z', temperature: 24.4214051463704 },
  { timestamp: '2015-03-21T20:00:00.000Z', temperature: 26.2049693716955 },
  { timestamp: '2015-03-21T21:00:00.000Z', temperature: 26.579802484894 },
  { timestamp: '2015-03-21T22:00:00.000Z', temperature: 26.5525094442272 },
  { timestamp: '2015-03-21T23:00:00.000Z', temperature: 23.9758724990251 },
  { timestamp: '2015-03-22T00:00:00.000Z', temperature: 20.7705334007582 },
  { timestamp: '2015-03-22T01:00:00.000Z', temperature: 19.5826361563267 },
  { timestamp: '2015-03-22T02:00:00.000Z', temperature: 18.7265399946616 },
  { timestamp: '2015-03-22T03:00:00.000Z', temperature: 18.2886029132647 },
  { timestamp: '2015-03-22T04:00:00.000Z', temperature: 17.4904771411586 },
  { timestamp: '2015-03-22T05:00:00.000Z', temperature: 17.1831430954037 },
  { timestamp: '2015-03-22T06:00:00.000Z', temperature: 17.2898856656444 },
  { timestamp: '2015-03-22T07:00:00.000Z', temperature: 17.8578100360021 },
  { timestamp: '2015-03-22T08:00:00.000Z', temperature: 18.1992192220978 },
  { timestamp: '2015-03-22T09:00:00.000Z', temperature: 18.13420905954 },
  { timestamp: '2015-03-22T10:00:00.000Z', temperature: 18.5888149684944 },
  { timestamp: '2015-03-22T11:00:00.000Z', temperature: 18.6733003026984 },
  { timestamp: '2015-03-22T12:00:00.000Z', temperature: 19.1600833190036 },
  { timestamp: '2015-03-22T13:00:00.000Z', temperature: 19.207095797011 },
  { timestamp: '2015-03-22T14:00:00.000Z', temperature: 18.9847082241235 },
  { timestamp: '2015-03-22T15:00:00.000Z', temperature: 19.4293802064908 },
  { timestamp: '2015-03-22T16:00:00.000Z', temperature: 20.8493124700409 },
  { timestamp: '2015-03-22T17:00:00.000Z', temperature: 21.5898145184046 },
  { timestamp: '2015-03-22T18:00:00.000Z', temperature: 22.3397182467298 },
  { timestamp: '2015-03-22T19:00:00.000Z', temperature: 22.7891858876349 },
  { timestamp: '2015-03-22T20:00:00.000Z', temperature: 23.3412628564144 },
  { timestamp: '2015-03-22T21:00:00.000Z', temperature: 23.4926420057589 },
  { timestamp: '2015-03-22T22:00:00.000Z', temperature: 23.0962283240861 },
  { timestamp: '2015-03-22T23:00:00.000Z', temperature: 22.2667502918227 },
  { timestamp: '2015-03-23T00:00:00.000Z', temperature: 21.0266142557277 },
  { timestamp: '2015-03-23T01:00:00.000Z', temperature: 20.0093349857605 },
  { timestamp: '2015-03-23T02:00:00.000Z', temperature: 18.9851414732381 },
  { timestamp: '2015-03-23T03:00:00.000Z', temperature: 18.5245615004214 },
  { timestamp: '2015-03-23T04:00:00.000Z', temperature: 18.290694254732 },
  { timestamp: '2015-03-23T05:00:00.000Z', temperature: 18.0595508666643 },
  { timestamp: '2015-03-23T06:00:00.000Z', temperature: 18.4732789951039 },
  { timestamp: '2015-03-23T07:00:00.000Z', temperature: 18.7258481532495 },
  { timestamp: '2015-03-23T08:00:00.000Z', temperature: 18.5595128641976 },
  { timestamp: '2015-03-23T09:00:00.000Z', temperature: 18.179674037842 },
  { timestamp: '2015-03-23T10:00:00.000Z', temperature: 17.7681299392415 },
  { timestamp: '2015-03-23T11:00:00.000Z', temperature: 17.443021321053 },
  { timestamp: '2015-03-23T12:00:00.000Z', temperature: 17.3451205175492 },
  { timestamp: '2015-03-23T13:00:00.000Z', temperature: 17.4374701133724 },
  { timestamp: '2015-03-23T14:00:00.000Z', temperature: 17.8929191631296 },
  { timestamp: '2015-03-23T15:00:00.000Z', temperature: 18.9122039984753 },
  { timestamp: '2015-03-23T16:00:00.000Z', temperature: 19.6161969984469 },
  { timestamp: '2015-03-23T17:00:00.000Z', temperature: 20.7299868156002 },
  { timestamp: '2015-03-23T18:00:00.000Z', temperature: 21.7689130719553 },
  { timestamp: '2015-03-23T19:00:00.000Z', temperature: 22.5533898355016 },
  { timestamp: '2015-03-23T20:00:00.000Z', temperature: 22.8372668296634 },
  { timestamp: '2015-03-23T21:00:00.000Z', temperature: 23.2014773800322 },
  { timestamp: '2015-03-23T22:00:00.000Z', temperature: 22.5682062882985 },
  { timestamp: '2015-03-23T23:00:00.000Z', temperature: 22.3205675513796 },
  { timestamp: '2015-03-24T00:00:00.000Z', temperature: 20.8661118605035 },
  { timestamp: '2015-03-24T01:00:00.000Z', temperature: 18.5360183512352 },
  { timestamp: '2015-03-24T02:00:00.000Z', temperature: 17.5156724451801 },
  { timestamp: '2015-03-24T03:00:00.000Z', temperature: 17.2066897483676 },
  { timestamp: '2015-03-24T04:00:00.000Z', temperature: 17.1974604599623 },
  { timestamp: '2015-03-24T05:00:00.000Z', temperature: 17.3377835934013 },
  { timestamp: '2015-03-24T06:00:00.000Z', temperature: 17.28662295757 },
  { timestamp: '2015-03-24T07:00:00.000Z', temperature: 17.4291104924263 },
  { timestamp: '2015-03-24T08:00:00.000Z', temperature: 17.4228793012653 },
  { timestamp: '2015-03-24T09:00:00.000Z', temperature: 17.4209561166271 },
  { timestamp: '2015-03-24T10:00:00.000Z', temperature: 17.141757829703 },
  { timestamp: '2015-03-24T11:00:00.000Z', temperature: 17.3048584589793 },
  { timestamp: '2015-03-24T12:00:00.000Z', temperature: 17.337482794781 },
  { timestamp: '2015-03-24T13:00:00.000Z', temperature: 17.7016509341158 },
  { timestamp: '2015-03-24T14:00:00.000Z', temperature: 17.5637528905341 },
  { timestamp: '2015-03-24T15:00:00.000Z', temperature: 18.8276163388499 },
  { timestamp: '2015-03-24T16:00:00.000Z', temperature: 19.4404648699534 },
  { timestamp: '2015-03-24T17:00:00.000Z', temperature: 20.5646049670802 },
  { timestamp: '2015-03-24T18:00:00.000Z', temperature: 21.9525507884113 },
  { timestamp: '2015-03-24T19:00:00.000Z', temperature: 21.9040221846194 },
  { timestamp: '2015-03-24T20:00:00.000Z', temperature: 22.8197541616282 },
  { timestamp: '2015-03-24T21:00:00.000Z', temperature: 22.2390831913042 },
  { timestamp: '2015-03-24T22:00:00.000Z', temperature: 22.4688244906963 },
  { timestamp: '2015-03-24T23:00:00.000Z', temperature: 21.9461828791739 },
  { timestamp: '2015-03-25T00:00:00.000Z', temperature: 21.3218883084538 },
  { timestamp: '2015-03-25T01:00:00.000Z', temperature: 19.9688738415096 },
  { timestamp: '2015-03-25T02:00:00.000Z', temperature: 18.9409031033049 },
  { timestamp: '2015-03-25T03:00:00.000Z', temperature: 18.1829931467353 },
  { timestamp: '2015-03-25T04:00:00.000Z', temperature: 17.6071132686007 },
  { timestamp: '2015-03-25T05:00:00.000Z', temperature: 17.4155712472229 },
  { timestamp: '2015-03-25T06:00:00.000Z', temperature: 17.8112238813252 },
  { timestamp: '2015-03-25T07:00:00.000Z', temperature: 18.0118371454174 },
  { timestamp: '2015-03-25T08:00:00.000Z', temperature: 17.9925110740977 },
  { timestamp: '2015-03-25T09:00:00.000Z', temperature: 17.9146107460869 },
  { timestamp: '2015-03-25T10:00:00.000Z', temperature: 17.6354297651737 },
  { timestamp: '2015-03-25T11:00:00.000Z', temperature: 17.2990959392658 },
  { timestamp: '2015-03-25T12:00:00.000Z', temperature: 16.8942534144482 },
  { timestamp: '2015-03-25T13:00:00.000Z', temperature: 17.0215911252788 },
  { timestamp: '2015-03-25T14:00:00.000Z', temperature: 17.5370547200027 },
  { timestamp: '2015-03-25T15:00:00.000Z', temperature: 19.6239569219906 },
  { timestamp: '2015-03-25T16:00:00.000Z', temperature: 21.4284862546897 },
  { timestamp: '2015-03-25T17:00:00.000Z', temperature: 22.5971622932944 },
  { timestamp: '2015-03-25T18:00:00.000Z', temperature: 24.4516364021043 },
  { timestamp: '2015-03-25T19:00:00.000Z', temperature: 26.314179825294 },
  { timestamp: '2015-03-25T20:00:00.000Z', temperature: 27.2966725797272 },
  { timestamp: '2015-03-25T21:00:00.000Z', temperature: 27.8594008881709 },
  { timestamp: '2015-03-25T22:00:00.000Z', temperature: 26.98771523591 },
  { timestamp: '2015-03-25T23:00:00.000Z', temperature: 26.1419652896808 },
  { timestamp: '2015-03-26T00:00:00.000Z', temperature: 24.2967135065912 },
  { timestamp: '2015-03-26T01:00:00.000Z', temperature: 21.2627783997077 },
  { timestamp: '2015-03-26T02:00:00.000Z', temperature: 19.6223366524463 },
  { timestamp: '2015-03-26T03:00:00.000Z', temperature: 18.9702936572059 },
  { timestamp: '2015-03-26T04:00:00.000Z', temperature: 18.64173108115 },
  { timestamp: '2015-03-26T05:00:00.000Z', temperature: 18.5430028446263 },
  { timestamp: '2015-03-26T06:00:00.000Z', temperature: 18.2597209484404 },
  { timestamp: '2015-03-26T07:00:00.000Z', temperature: 17.8251835175158 },
  { timestamp: '2015-03-26T08:00:00.000Z', temperature: 17.4726877440558 },
  { timestamp: '2015-03-26T09:00:00.000Z', temperature: 17.651946077925 },
  { timestamp: '2015-03-26T10:00:00.000Z', temperature: 17.7491791888976 },
  { timestamp: '2015-03-26T11:00:00.000Z', temperature: 17.5917881825657 },
  { timestamp: '2015-03-26T12:00:00.000Z', temperature: 17.5239416379086 },
  { timestamp: '2015-03-26T13:00:00.000Z', temperature: 17.5307201091079 },
  { timestamp: '2015-03-26T14:00:00.000Z', temperature: 18.2489964460844 },
  { timestamp: '2015-03-26T15:00:00.000Z', temperature: 20.2797517883074 },
  { timestamp: '2015-03-26T16:00:00.000Z', temperature: 21.888709612845 },
  { timestamp: '2015-03-26T17:00:00.000Z', temperature: 23.8693783046019 },
  { timestamp: '2015-03-26T18:00:00.000Z', temperature: 25.6434924437705 },
  { timestamp: '2015-03-26T19:00:00.000Z', temperature: 27.3338701714523 },
  { timestamp: '2015-03-26T20:00:00.000Z', temperature: 30.235307632747 },
  { timestamp: '2015-03-26T21:00:00.000Z', temperature: 31.6784014189275 },
  { timestamp: '2015-03-26T22:00:00.000Z', temperature: 32.4243323492878 },
  { timestamp: '2015-03-26T23:00:00.000Z', temperature: 33.1688980688728 },
  { timestamp: '2015-03-27T00:00:00.000Z', temperature: 30.8713221141196 },
  { timestamp: '2015-03-27T01:00:00.000Z', temperature: 26.8944097638179 },
  { timestamp: '2015-03-27T02:00:00.000Z', temperature: 24.6128150483182 },
  { timestamp: '2015-03-27T03:00:00.000Z', temperature: 22.889746429207 },
  { timestamp: '2015-03-27T04:00:00.000Z', temperature: 21.7148736202902 },
  { timestamp: '2015-03-27T05:00:00.000Z', temperature: 20.8438711038614 },
  { timestamp: '2015-03-27T06:00:00.000Z', temperature: 19.2559699722154 },
  { timestamp: '2015-03-27T07:00:00.000Z', temperature: 18.337368653838 },
  { timestamp: '2015-03-27T08:00:00.000Z', temperature: 17.6177708093268 },
  { timestamp: '2015-03-27T09:00:00.000Z', temperature: 17.1977444392481 },
  { timestamp: '2015-03-27T10:00:00.000Z', temperature: 16.7043132969425 },
  { timestamp: '2015-03-27T11:00:00.000Z', temperature: 16.2471811295094 },
  { timestamp: '2015-03-27T12:00:00.000Z', temperature: 16.087861898997 },
  { timestamp: '2015-03-27T13:00:00.000Z', temperature: 15.6362635324538 },
  { timestamp: '2015-03-27T14:00:00.000Z', temperature: 15.692528763157 },
  { timestamp: '2015-03-27T15:00:00.000Z', temperature: 16.1186855064984 },
  { timestamp: '2015-03-27T16:00:00.000Z', temperature: 17.3886258325874 },
  { timestamp: '2015-03-27T17:00:00.000Z', temperature: 18.2540910121364 },
  { timestamp: '2015-03-27T18:00:00.000Z', temperature: 19.5148327389508 },
  { timestamp: '2015-03-27T19:00:00.000Z', temperature: 20.6023266315466 },
  { timestamp: '2015-03-27T20:00:00.000Z', temperature: 21.3854066767194 },
  { timestamp: '2015-03-27T21:00:00.000Z', temperature: 21.9084983994613}
]
// example 88
var outerWidth88 = 500
var outerHeight88 = 250
var circleRadius88 = 3

// D3 margin convention
var margin88 = { left: 30, top: 30, right: 30, bottom: 30 }

var innerWidth88 = outerWidth88 - margin88.left - margin88.right
var innerHeight88 = outerHeight88 - margin88.top - margin88.bottom
var xColumn88 = 'timestamp'
var yColumn88 = 'temperature'

var svg88 = d3.select('#example-88').append('svg')
  .attr('width', outerWidth88)
  .attr('height', outerHeight88)

var g88 = svg88.append('g')
  .attr('transform', 'translate(' + margin88.left + ',' + margin88.top + ')')

var xScale88 = d3.time.scale().range([0, innerWidth88])
var yScale88 = d3.scale.linear().range([innerWidth88, 0])

function render88 (data) {
  xScale88.domain(d3.extent(data, function (d) { return d[xColumn88]; }))
  yScale88.domain(d3.extent(data, function (d) { return d[yColumn88]; }))

  var circles88 = g88.selectAll('circle').data(data)

  circles88.enter().append('circle')

  circles88
    .attr('cx', function (d) { return xScale88(d[xColumn88]); })
    .attr('cy', function (d) { return yScale88(d[yColumn88]); })

  circles88.exit().remove()
}

render88(temp_data)
