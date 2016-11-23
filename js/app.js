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

// example 88
var outerWidth88 = 500
var outerHeight88 = 250

var margin88 = { left: -50, top: 0, right: -50, bottom: 0 }
var xColumn88 = 'longitude'
var yColumn88 = 'latitude'
var rColumn88 = 'population'
var peoplePerPixel88 = 100000

var innerWidth88 = outerWidth88 - margin88.left - margin88.right
var innerHeight88 = outerHeight88 - margin88.top - margin88.bottom

var svg88 = d3.select('#example-88').append('svg')
  .attr('width', outerWidth88)
  .attr('height', outerHeight88)

var g88 = svg88.append('g')
  .attr('transform', 'translate(' + margin88.left + ',' + margin88.top + ')')

var xScale88 = d3.scale.linear().range([0, innerWidth88])
var yScale88 = d3.scale.linear().range([innerHeight88, 0])
var rScale88 = d3.scale.sqrt()

function render88 (data) {
  xScale88.domain(d3.extent(data, function (d) { return d[xColumn88]; }))
  yScale88.domain(d3.extent(data, function (d) { return d[yColumn88]; }))
  rScale88.domain([0, d3.max(data, function (d) { return d[rColumn88]; })])

  // Compute the size of the biggest circle as a function of peoplePerPixel.
  var peopleMax88 = rScale88.domain()[1]
  var rMin88 = 0
  var rMax88 = Math.sqrt(peopleMax88 / (peoplePerPixel88 * Math.PI))

  rScale88.range([rMin88, rMax88])

  var circles88 = g88.selectAll('circle').data(data)

  circles88.enter().append('circle')

  circles88
    .attr('cx', function (d) { return xScale88(d[xColumn88]); })
    .attr('cy', function (d) { return yScale88(d[yColumn88]); })
    .attr('r', function (d) { return rScale88(d[rColumn88]); })

  circles88.exit().remove()
}

function type88 (d) {
  d.latitude = +d.latitude
  d.longitude = +d.longitude
  d.population = +d.population
  return d
}

d3.csv('geonames_cities100000.csv', type88, render88)

// example 89
var outerWidth89 = 500
var outerHeight89 = 250

var margin89 = { left: -50, top: 0, right: -50, bottom: 0 }
var xColumn89 = 'longitude'
var yColumn89 = 'latitude'
var rColumn89 = 'population'
var peoplePerPixel89 = 100000

var innerWidth89 = outerWidth89 - margin89.left - margin89.right
var innerHeight89 = outerHeight89 - margin89.top - margin89.bottom

var svg89 = d3.select('#example-89').append('svg')
  .attr('width', outerWidth89)
  .attr('height', outerHeight89)

var g89 = svg89.append('g')
  .attr('transform', 'translate(' + margin89.left + ',' + margin89.top + ')')

var xScale89 = d3.scale.linear().range([0, innerWidth89])
var yScale89 = d3.scale.linear().range([innerHeight89, 0])
var rScale89 = d3.scale.sqrt()

function render89 (data) {
  xScale89.domain(d3.extent(data, function (d) { return d[xColumn89]; }))
  yScale89.domain(d3.extent(data, function (d) { return d[yColumn89]; }))
  rScale89.domain([0, d3.max(data, function (d) { return d[rColumn89]; })])

  // Compute the size of the biggest circle as a function of peoplePerPixel.
  var peopleMax89 = rScale89.domain()[1]
  var rMin89 = 0
  var rMax89 = Math.sqrt(peopleMax89 / (peoplePerPixel89 * Math.PI))

  rScale89.range([rMin89, rMax89])

  var circles89 = g89.selectAll('circle').data(data)

  circles89.enter().append('circle')

  circles89
    .attr('cx', function (d) { return xScale89(d[xColumn89]); })
    .attr('cy', function (d) { return yScale89(d[yColumn89]); })
    .attr('r', function (d) { return rScale89(d[rColumn89]); })

  circles89.exit().remove()
}

function type89 (d) {
  d.latitude = +d.latitude
  d.longitude = +d.longitude
  d.population = +d.population
  return d
}

d3.csv('geonames_cities100000.csv', type89, render89)

// example 90
var outerWidth90 = 500
var outerHeight90 = 250
var circleRadius90 = 3

var margin90 = { left: 30, top: 30, right: 30, bottom: 30 }

var xColumn90 = 'timestamp'
var yColumn90 = 'temperature'

var svg90 = d3.select('#example-90').append('svg')
  .attr('width', outerWidth90)
  .attr('height', outerHeight90)

var g90 = svg90.append('g')
  .attr('transform', 'translate(' + margin90.left + ',' + margin90.top + ')')

var innerWidth90 = outerWidth90 - margin90.left - margin90.right
var innerHeight90 = outerHeight90 - margin90.top - margin90.bottom

var xScale90 = d3.time.scale().range([0, innerWidth90])
var yScale90 = d3.scale.linear().range([innerHeight90, 0])

function render90 (data) {
  xScale90.domain(d3.extent(data, function (d) { return d[xColumn90]}))
  yScale90.domain(d3.extent(data, function (d) { return d[yColumn90]}))

  var circles90 = g90.selectAll('circle').data(data)

  circles90.enter().append('circle')
    .attr('r', circleRadius90)

  circles90
    .attr('cx', function (d) { return xScale90(d[xColumn90]) })
    .attr('cy', function (d) { return yScale90(d[yColumn90]) })

  circles90.exit().remove()
}
function type90 (d) {
  d.timestamp = new Date(d.timestamp)
  d.temperature = +d.temperature
  return d
}

d3.csv('week_temperature_sf.csv', type90, render90)

// example 91
var outerWidth91 = 500
var outerHeight91 = 250

var margin91 = { left: 30, top: 30, right: 30, bottom: 30 }

var xColumn91 = 'timestamp'
var yColumn91 = 'temperature'

var svg91 = d3.select('#example-91').append('svg')
  .attr('width', outerWidth91)
  .attr('height', outerHeight91)

var g91 = svg91.append('g')
  .attr('transform', 'translate(' + margin91.left + ',' + margin91.top + ')')

var path91 = g91.append('path')

var innerWidth91 = outerWidth91 - margin91.left - margin91.right
var innerHeight91 = outerHeight91 - margin91.top - margin91.bottom

var xScale91 = d3.time.scale().range([0, innerWidth91])
var yScale91 = d3.scale.linear().range([innerHeight91, 0])

var line91 = d3.svg.line()
  .x(function (d) { return xScale91(d[xColumn91]); })
  .y(function (d) { return yScale91(d[yColumn91]); })

function render91 (data) {
  xScale91.domain(d3.extent(data, function (d) { return d[xColumn91]}))
  yScale91.domain(d3.extent(data, function (d) { return d[yColumn91]}))

  path91.attr('d', line91(data))
}

function type91 (d) {
  d.timestamp = new Date(d.timestamp)
  d.temperature = +d.temperature
  return d
}

d3.csv('week_temperature_sf.csv', type91, render91)

// example 92
var outerWidth92 = 500
var outerHeight92 = 250

var margin92 = { left: 30, top: 30, right: 30, bottom: 30 }

var xColumn92 = 'timestamp'
var yColumn92 = 'temperature'

var svg92 = d3.select('#example-92').append('svg')
  .attr('width', outerWidth92)
  .attr('height', outerHeight92)

var g92 = svg92.append('g')
  .attr('transform', 'translate(' + margin92.left + ',' + margin92.top + ')')

var path92 = g92.append('path')

var innerWidth92 = outerWidth92 - margin92.left - margin92.right
var innerHeight92 = outerHeight92 - margin92.top - margin92.bottom

var xScale92 = d3.time.scale().range([0, innerWidth92])
var yScale92 = d3.scale.linear().range([innerHeight92, 0])

var line92 = d3.svg.line()
  .x(function (d) { return xScale92(d[xColumn92]); })
  .y(function (d) { return yScale92(d[yColumn92]); })

function render92 (data) {
  xScale92.domain(d3.extent(data, function (d) { return d[xColumn92]}))
  yScale92.domain(d3.extent(data, function (d) { return d[yColumn92]}))

  path92.attr('d', line92(data)) // assign the line path with M, L values from data
}

function type92 (d) {
  d.timestamp = new Date(d.timestamp)
  d.temperature = +d.temperature
  return d
}

d3.csv('week_temperature_sf.csv', type92, render92)
