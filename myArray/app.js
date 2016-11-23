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

var iris_data = [
  { sepal_length: 5.1, sepal_width: 3.5, petal_length: 1.4, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 4.9, sepal_width: 3.0, petal_length: 1.4, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 4.7, sepal_width: 3.2, petal_length: 1.3, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 4.6, sepal_width: 3.1, petal_length: 1.5, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 5.0, sepal_width: 3.6, petal_length: 1.4, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 5.4, sepal_width: 3.9, petal_length: 1.7, petal_width: 0.4, species: 'setosa' },
  { sepal_length: 4.6, sepal_width: 3.4, petal_length: 1.4, petal_width: 0.3, species: 'setosa' },
  { sepal_length: 5.0, sepal_width: 3.4, petal_length: 1.5, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 4.4, sepal_width: 2.9, petal_length: 1.4, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 4.9, sepal_width: 3.1, petal_length: 1.5, petal_width: 0.1, species: 'setosa' },
  { sepal_length: 5.4, sepal_width: 3.7, petal_length: 1.5, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 4.8, sepal_width: 3.4, petal_length: 1.6, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 4.8, sepal_width: 3.0, petal_length: 1.4, petal_width: 0.1, species: 'setosa' },
  { sepal_length: 4.3, sepal_width: 3.0, petal_length: 1.1, petal_width: 0.1, species: 'setosa' },
  { sepal_length: 5.8, sepal_width: 4.0, petal_length: 1.2, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 5.7, sepal_width: 4.4, petal_length: 1.5, petal_width: 0.4, species: 'setosa' },
  { sepal_length: 5.4, sepal_width: 3.9, petal_length: 1.3, petal_width: 0.4, species: 'setosa' },
  { sepal_length: 5.1, sepal_width: 3.5, petal_length: 1.4, petal_width: 0.3, species: 'setosa' },
  { sepal_length: 5.7, sepal_width: 3.8, petal_length: 1.7, petal_width: 0.3, species: 'setosa' },
  { sepal_length: 5.1, sepal_width: 3.8, petal_length: 1.5, petal_width: 0.3, species: 'setosa' },
  { sepal_length: 5.4, sepal_width: 3.4, petal_length: 1.7, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 5.1, sepal_width: 3.7, petal_length: 1.5, petal_width: 0.4, species: 'setosa' },
  { sepal_length: 4.6, sepal_width: 3.6, petal_length: 1.0, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 5.1, sepal_width: 3.3, petal_length: 1.7, petal_width: 0.5, species: 'setosa' },
  { sepal_length: 4.8, sepal_width: 3.4, petal_length: 1.9, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 5.0, sepal_width: 3.0, petal_length: 1.6, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 5.0, sepal_width: 3.4, petal_length: 1.6, petal_width: 0.4, species: 'setosa' },
  { sepal_length: 5.2, sepal_width: 3.5, petal_length: 1.5, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 5.2, sepal_width: 3.4, petal_length: 1.4, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 4.7, sepal_width: 3.2, petal_length: 1.6, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 4.8, sepal_width: 3.1, petal_length: 1.6, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 5.4, sepal_width: 3.4, petal_length: 1.5, petal_width: 0.4, species: 'setosa' },
  { sepal_length: 5.2, sepal_width: 4.1, petal_length: 1.5, petal_width: 0.1, species: 'setosa' },
  { sepal_length: 5.5, sepal_width: 4.2, petal_length: 1.4, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 4.9, sepal_width: 3.1, petal_length: 1.5, petal_width: 0.1, species: 'setosa' },
  { sepal_length: 5.0, sepal_width: 3.2, petal_length: 1.2, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 5.5, sepal_width: 3.5, petal_length: 1.3, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 4.9, sepal_width: 3.1, petal_length: 1.5, petal_width: 0.1, species: 'setosa' },
  { sepal_length: 4.4, sepal_width: 3.0, petal_length: 1.3, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 5.1, sepal_width: 3.4, petal_length: 1.5, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 5.0, sepal_width: 3.5, petal_length: 1.3, petal_width: 0.3, species: 'setosa' },
  { sepal_length: 4.5, sepal_width: 2.3, petal_length: 1.3, petal_width: 0.3, species: 'setosa' },
  { sepal_length: 4.4, sepal_width: 3.2, petal_length: 1.3, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 5.0, sepal_width: 3.5, petal_length: 1.6, petal_width: 0.6, species: 'setosa' },
  { sepal_length: 5.1, sepal_width: 3.8, petal_length: 1.9, petal_width: 0.4, species: 'setosa' },
  { sepal_length: 4.8, sepal_width: 3.0, petal_length: 1.4, petal_width: 0.3, species: 'setosa' },
  { sepal_length: 5.1, sepal_width: 3.8, petal_length: 1.6, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 4.6, sepal_width: 3.2, petal_length: 1.4, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 5.3, sepal_width: 3.7, petal_length: 1.5, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 5.0, sepal_width: 3.3, petal_length: 1.4, petal_width: 0.2, species: 'setosa' },
  { sepal_length: 7.0, sepal_width: 3.2, petal_length: 4.7, petal_width: 1.4, species: 'versicolor' },
  { sepal_length: 6.4, sepal_width: 3.2, petal_length: 4.5, petal_width: 1.5, species: 'versicolor' },
  { sepal_length: 6.9, sepal_width: 3.1, petal_length: 4.9, petal_width: 1.5, species: 'versicolor' },
  { sepal_length: 5.5, sepal_width: 2.3, petal_length: 4.0, petal_width: 1.3, species: 'versicolor' },
  { sepal_length: 6.5, sepal_width: 2.8, petal_length: 4.6, petal_width: 1.5, species: 'versicolor' },
  { sepal_length: 5.7, sepal_width: 2.8, petal_length: 4.5, petal_width: 1.3, species: 'versicolor' },
  { sepal_length: 6.3, sepal_width: 3.3, petal_length: 4.7, petal_width: 1.6, species: 'versicolor' },
  { sepal_length: 4.9, sepal_width: 2.4, petal_length: 3.3, petal_width: 1.0, species: 'versicolor' },
  { sepal_length: 6.6, sepal_width: 2.9, petal_length: 4.6, petal_width: 1.3, species: 'versicolor' },
  { sepal_length: 5.2, sepal_width: 2.7, petal_length: 3.9, petal_width: 1.4, species: 'versicolor' },
  { sepal_length: 5.0, sepal_width: 2.0, petal_length: 3.5, petal_width: 1.0, species: 'versicolor' },
  { sepal_length: 5.9, sepal_width: 3.0, petal_length: 4.2, petal_width: 1.5, species: 'versicolor' },
  { sepal_length: 6.0, sepal_width: 2.2, petal_length: 4.0, petal_width: 1.0, species: 'versicolor' },
  { sepal_length: 6.1, sepal_width: 2.9, petal_length: 4.7, petal_width: 1.4, species: 'versicolor' },
  { sepal_length: 5.6, sepal_width: 2.9, petal_length: 3.6, petal_width: 1.3, species: 'versicolor' },
  { sepal_length: 6.7, sepal_width: 3.1, petal_length: 4.4, petal_width: 1.4, species: 'versicolor' },
  { sepal_length: 5.6, sepal_width: 3.0, petal_length: 4.5, petal_width: 1.5, species: 'versicolor' },
  { sepal_length: 5.8, sepal_width: 2.7, petal_length: 4.1, petal_width: 1.0, species: 'versicolor' },
  { sepal_length: 6.2, sepal_width: 2.2, petal_length: 4.5, petal_width: 1.5, species: 'versicolor' },
  { sepal_length: 5.6, sepal_width: 2.5, petal_length: 3.9, petal_width: 1.1, species: 'versicolor' },
  { sepal_length: 5.9, sepal_width: 3.2, petal_length: 4.8, petal_width: 1.8, species: 'versicolor' },
  { sepal_length: 6.1, sepal_width: 2.8, petal_length: 4.0, petal_width: 1.3, species: 'versicolor' },
  { sepal_length: 6.3, sepal_width: 2.5, petal_length: 4.9, petal_width: 1.5, species: 'versicolor' },
  { sepal_length: 6.1, sepal_width: 2.8, petal_length: 4.7, petal_width: 1.2, species: 'versicolor' },
  { sepal_length: 6.4, sepal_width: 2.9, petal_length: 4.3, petal_width: 1.3, species: 'versicolor' },
  { sepal_length: 6.6, sepal_width: 3.0, petal_length: 4.4, petal_width: 1.4, species: 'versicolor' },
  { sepal_length: 6.8, sepal_width: 2.8, petal_length: 4.8, petal_width: 1.4, species: 'versicolor' },
  { sepal_length: 6.7, sepal_width: 3.0, petal_length: 5.0, petal_width: 1.7, species: 'versicolor' },
  { sepal_length: 6.0, sepal_width: 2.9, petal_length: 4.5, petal_width: 1.5, species: 'versicolor' },
  { sepal_length: 5.7, sepal_width: 2.6, petal_length: 3.5, petal_width: 1.0, species: 'versicolor' },
  { sepal_length: 5.5, sepal_width: 2.4, petal_length: 3.8, petal_width: 1.1, species: 'versicolor' },
  { sepal_length: 5.5, sepal_width: 2.4, petal_length: 3.7, petal_width: 1.0, species: 'versicolor' },
  { sepal_length: 5.8, sepal_width: 2.7, petal_length: 3.9, petal_width: 1.2, species: 'versicolor' },
  { sepal_length: 6.0, sepal_width: 2.7, petal_length: 5.1, petal_width: 1.6, species: 'versicolor' },
  { sepal_length: 6.0, sepal_width: 3.4, petal_length: 4.5, petal_width: 1.6, species: 'versicolor' },
  { sepal_length: 6.7, sepal_width: 3.1, petal_length: 4.7, petal_width: 1.5, species: 'versicolor' },
  { sepal_length: 6.3, sepal_width: 2.3, petal_length: 4.4, petal_width: 1.3, species: 'versicolor' },
  { sepal_length: 5.6, sepal_width: 3.0, petal_length: 4.1, petal_width: 1.3, species: 'versicolor' },
  { sepal_length: 5.5, sepal_width: 2.5, petal_length: 4.0, petal_width: 1.3, species: 'versicolor' },
  { sepal_length: 5.5, sepal_width: 2.6, petal_length: 4.4, petal_width: 1.2, species: 'versicolor' },
  { sepal_length: 6.1, sepal_width: 3.0, petal_length: 4.6, petal_width: 1.4, species: 'versicolor' },
  { sepal_length: 5.8, sepal_width: 2.6, petal_length: 4.0, petal_width: 1.2, species: 'versicolor' },
  { sepal_length: 5.0, sepal_width: 2.3, petal_length: 3.3, petal_width: 1.0, species: 'versicolor' },
  { sepal_length: 5.6, sepal_width: 2.7, petal_length: 4.2, petal_width: 1.3, species: 'versicolor' },
  { sepal_length: 5.7, sepal_width: 3.0, petal_length: 4.2, petal_width: 1.2, species: 'versicolor' },
  { sepal_length: 5.7, sepal_width: 2.9, petal_length: 4.2, petal_width: 1.3, species: 'versicolor' },
  { sepal_length: 6.2, sepal_width: 2.9, petal_length: 4.3, petal_width: 1.3, species: 'versicolor' },
  { sepal_length: 5.1, sepal_width: 2.5, petal_length: 3.0, petal_width: 1.1, species: 'versicolor' },
  { sepal_length: 5.7, sepal_width: 2.8, petal_length: 4.1, petal_width: 1.3, species: 'versicolor' },
  { sepal_length: 6.3, sepal_width: 3.3, petal_length: 6.0, petal_width: 2.5, species: 'virginica' },
  { sepal_length: 5.8, sepal_width: 2.7, petal_length: 5.1, petal_width: 1.9, species: 'virginica' },
  { sepal_length: 7.1, sepal_width: 3.0, petal_length: 5.9, petal_width: 2.1, species: 'virginica' },
  { sepal_length: 6.3, sepal_width: 2.9, petal_length: 5.6, petal_width: 1.8, species: 'virginica' },
  { sepal_length: 6.5, sepal_width: 3.0, petal_length: 5.8, petal_width: 2.2, species: 'virginica' },
  { sepal_length: 7.6, sepal_width: 3.0, petal_length: 6.6, petal_width: 2.1, species: 'virginica' },
  { sepal_length: 4.9, sepal_width: 2.5, petal_length: 4.5, petal_width: 1.7, species: 'virginica' },
  { sepal_length: 7.3, sepal_width: 2.9, petal_length: 6.3, petal_width: 1.8, species: 'virginica' },
  { sepal_length: 6.7, sepal_width: 2.5, petal_length: 5.8, petal_width: 1.8, species: 'virginica' },
  { sepal_length: 7.2, sepal_width: 3.6, petal_length: 6.1, petal_width: 2.5, species: 'virginica' },
  { sepal_length: 6.5, sepal_width: 3.2, petal_length: 5.1, petal_width: 2.0, species: 'virginica' },
  { sepal_length: 6.4, sepal_width: 2.7, petal_length: 5.3, petal_width: 1.9, species: 'virginica' },
  { sepal_length: 6.8, sepal_width: 3.0, petal_length: 5.5, petal_width: 2.1, species: 'virginica' },
  { sepal_length: 5.7, sepal_width: 2.5, petal_length: 5.0, petal_width: 2.0, species: 'virginica' },
  { sepal_length: 5.8, sepal_width: 2.8, petal_length: 5.1, petal_width: 2.4, species: 'virginica' },
  { sepal_length: 6.4, sepal_width: 3.2, petal_length: 5.3, petal_width: 2.3, species: 'virginica' },
  { sepal_length: 6.5, sepal_width: 3.0, petal_length: 5.5, petal_width: 1.8, species: 'virginica' },
  { sepal_length: 7.7, sepal_width: 3.8, petal_length: 6.7, petal_width: 2.2, species: 'virginica' },
  { sepal_length: 7.7, sepal_width: 2.6, petal_length: 6.9, petal_width: 2.3, species: 'virginica' },
  { sepal_length: 6.0, sepal_width: 2.2, petal_length: 5.0, petal_width: 1.5, species: 'virginica' },
  { sepal_length: 6.9, sepal_width: 3.2, petal_length: 5.7, petal_width: 2.3, species: 'virginica' },
  { sepal_length: 5.6, sepal_width: 2.8, petal_length: 4.9, petal_width: 2.0, species: 'virginica' },
  { sepal_length: 7.7, sepal_width: 2.8, petal_length: 6.7, petal_width: 2.0, species: 'virginica' },
  { sepal_length: 6.3, sepal_width: 2.7, petal_length: 4.9, petal_width: 1.8, species: 'virginica' },
  { sepal_length: 6.7, sepal_width: 3.3, petal_length: 5.7, petal_width: 2.1, species: 'virginica' },
  { sepal_length: 7.2, sepal_width: 3.2, petal_length: 6.0, petal_width: 1.8, species: 'virginica' },
  { sepal_length: 6.2, sepal_width: 2.8, petal_length: 4.8, petal_width: 1.8, species: 'virginica' },
  { sepal_length: 6.1, sepal_width: 3.0, petal_length: 4.9, petal_width: 1.8, species: 'virginica' },
  { sepal_length: 6.4, sepal_width: 2.8, petal_length: 5.6, petal_width: 2.1, species: 'virginica' },
  { sepal_length: 7.2, sepal_width: 3.0, petal_length: 5.8, petal_width: 1.6, species: 'virginica' },
  { sepal_length: 7.4, sepal_width: 2.8, petal_length: 6.1, petal_width: 1.9, species: 'virginica' },
  { sepal_length: 7.9, sepal_width: 3.8, petal_length: 6.4, petal_width: 2.0, species: 'virginica' },
  { sepal_length: 6.4, sepal_width: 2.8, petal_length: 5.6, petal_width: 2.2, species: 'virginica' },
  { sepal_length: 6.3, sepal_width: 2.8, petal_length: 5.1, petal_width: 1.5, species: 'virginica' },
  { sepal_length: 6.1, sepal_width: 2.6, petal_length: 5.6, petal_width: 1.4, species: 'virginica' },
  { sepal_length: 7.7, sepal_width: 3.0, petal_length: 6.1, petal_width: 2.3, species: 'virginica' },
  { sepal_length: 6.3, sepal_width: 3.4, petal_length: 5.6, petal_width: 2.4, species: 'virginica' },
  { sepal_length: 6.4, sepal_width: 3.1, petal_length: 5.5, petal_width: 1.8, species: 'virginica' },
  { sepal_length: 6.0, sepal_width: 3.0, petal_length: 4.8, petal_width: 1.8, species: 'virginica' },
  { sepal_length: 6.9, sepal_width: 3.1, petal_length: 5.4, petal_width: 2.1, species: 'virginica' },
  { sepal_length: 6.7, sepal_width: 3.1, petal_length: 5.6, petal_width: 2.4, species: 'virginica' },
  { sepal_length: 6.9, sepal_width: 3.1, petal_length: 5.1, petal_width: 2.3, species: 'virginica' },
  { sepal_length: 5.8, sepal_width: 2.7, petal_length: 5.1, petal_width: 1.9, species: 'virginica' },
  { sepal_length: 6.8, sepal_width: 3.2, petal_length: 5.9, petal_width: 2.3, species: 'virginica' },
  { sepal_length: 6.7, sepal_width: 3.3, petal_length: 5.7, petal_width: 2.5, species: 'virginica' },
  { sepal_length: 6.7, sepal_width: 3.0, petal_length: 5.2, petal_width: 2.3, species: 'virginica' },
  { sepal_length: 6.3, sepal_width: 2.5, petal_length: 5.0, petal_width: 1.9, species: 'virginica' },
  { sepal_length: 6.5, sepal_width: 3.0, petal_length: 5.2, petal_width: 2.0, species: 'virginica' },
  { sepal_length: 6.2, sepal_width: 3.4, petal_length: 5.4, petal_width: 2.3, species: 'virginica' },
  { sepal_length: 5.9, sepal_width: 3.0, petal_length: 5.1, petal_width: 1.8, species: 'virginica' }
]

// function type(d){
// 	d.sepal_length = +d.sepal_length
// 	d.sepal_width  = +d.sepal_width
// 	d.petal_length = +d.petal_length
// 	d.petal_width  = +d.petal_width
// 	return d
// }

// d3.csv("iris.csv", type, render70)
render70(iris_data)

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

render71(iris_data)

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

render72(iris_data)

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

render73(iris_data)

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

render74(iris_data)

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

render75(iris_data)

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

render76(iris_data)

// example 77
var outerWidth77 = 300
var outerHeight77 = 250
var rMin77 = 5; // "r" stands for radius
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

  circles77.exit().remove()
}

render77(iris_data)

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

render78(iris_data)

// data 79
var pop_data = [
  { country_code: 'BDI', population: 9232753, gdp: 2026864414.46871 },
  { country_code: 'COM', population: 683081, gdp: 543376206.062274 },
  { country_code: 'ERI', population: 5741159, gdp: 2117039510.70194 },
  { country_code: 'ETH', population: 87095281, gdp: 26311310604.9888 },
  { country_code: 'KEN', population: 40909194, gdp: 32198151217.2214 },
  { country_code: 'MDG', population: 21079532, gdp: 8837041787.49382 },
  { country_code: 'MWI', population: 15013694, gdp: 5398616984.59149 },
  { country_code: 'MUS', population: 1230659, gdp: 9718331362.63822 },
  { country_code: 'MOZ', population: 23967265, gdp: 9274448731.91612 },
  { country_code: 'RWA', population: 10836732, gdp: 5624506157.41067 },
  { country_code: 'SYC', population: 91208, gdp: 969973774.818177 },
  { country_code: 'SSD', population: 9940929, gdp: 15178973598.0733 },
  { country_code: 'UGA', population: 33987213, gdp: 16030996179.1077 },
  { country_code: 'TZA', population: 44973330, gdp: 22915004297.2183 },
  { country_code: 'ZMB', population: 13216985, gdp: 16190196832.0872 },
  { country_code: 'ZWE', population: 13076978, gdp: 7433314459.73933 },
  { country_code: 'AGO', population: 19549124, gdp: 82470894868.3337 },
  { country_code: 'CMR', population: 20624343, gdp: 22493301699.3672 },
  { country_code: 'CAF', population: 4349921, gdp: 1986014759.19785 },
  { country_code: 'TCD', population: 11720781, gdp: 10657705072.3284 },
  { country_code: 'COG', population: 4111715, gdp: 12007880067.3847 },
  { country_code: 'COD', population: 62191161, gdp: 13138775753.2026 },
  { country_code: 'GNQ', population: 696167, gdp: 12261420852.3549 },
  { country_code: 'GAB', population: 1556222, gdp: 14507032805.9824 },
  { country_code: 'STP', population: 178228, gdp: 201037916.583708 },
  { country_code: 'DZA', population: 37062820, gdp: 161207304960.455 },
  { country_code: 'EGY', population: 78075705, gdp: 218887812549.851 },
  { country_code: 'MAR', population: 31642360, gdp: 90770671431.6696 },
  { country_code: 'SDN', population: 35652002, gdp: 64849930757.6995 },
  { country_code: 'TUN', population: 10631830, gdp: 44377742070.7 },
  { country_code: 'BWA', population: 1969341, gdp: 13746712705.5936 },
  { country_code: 'LSO', population: 2008921, gdp: 2203835214.2935 },
  { country_code: 'NAM', population: 2178967, gdp: 11065912279.3816 },
  { country_code: 'ZAF', population: 51452352, gdp: 363240728680.384 },
  { country_code: 'SWZ', population: 1193148, gdp: 3691050502.68749 },
  { country_code: 'BEN', population: 9509798, gdp: 6558416322.12 },
  { country_code: 'BFA', population: 15540284, gdp: 9209288383.08711 },
  { country_code: 'CPV', population: 487601, gdp: 1664310632.03162 },
  { country_code: 'CIV', population: 18976588, gdp: 22920779597.555 },
  { country_code: 'GMB', population: 1680640, gdp: 951805801.354012 },
  { country_code: 'GHA', population: 24262901, gdp: 32174210792.9631 },
  { country_code: 'GIN', population: 10876033, gdp: 4735956475.83803 },
  { country_code: 'GNB', population: 1586624, gdp: 835390892.988319 },
  { country_code: 'LBR', population: 3957990, gdp: 1292696475.95873 },
  { country_code: 'MLI', population: 13985961, gdp: 9422267259.9894 },
  { country_code: 'MRT', population: 3609420, gdp: 3671380305.41277 },
  { country_code: 'NER', population: 15893746, gdp: 5718589550.16349 },
  { country_code: 'NGA', population: 159707780, gdp: 229507890739.083 },
  { country_code: 'SEN', population: 12950564, gdp: 12932427724.3508 },
  { country_code: 'SLE', population: 5751976, gdp: 2575466372.26831 },
  { country_code: 'TGO', population: 6306014, gdp: 3172945282.32304 },
  { country_code: 'CHN', population: 1359821465, gdp: 5930529470799.17 },
  { country_code: 'HKG', population: 7049514, gdp: 228695747309.89 },
  { country_code: 'MAC', population: 534626, gdp: 28359706123.0951 },
  { country_code: 'JPN', population: 127352833, gdp: 5495379357484.62 },
  { country_code: 'MNG', population: 2712738, gdp: 6200357070.1148 },
  { country_code: 'KOR', population: 48453931, gdp: 1014890141871.14 },
  { country_code: 'KAZ', population: 15921127, gdp: 148052371903.631 },
  { country_code: 'KGZ', population: 5334223, gdp: 4794361821.20611 },
  { country_code: 'TJK', population: 7627326, gdp: 5642221528.67114 },
  { country_code: 'TKM', population: 5041995, gdp: 22148070175.4386 },
  { country_code: 'UZB', population: 27769270, gdp: 39332771014.013 },
  { country_code: 'AFG', population: 28397812, gdp: 15936784436.1811 },
  { country_code: 'BGD', population: 151125475, gdp: 100357022443.833 },
  { country_code: 'BTN', population: 716939, gdp: 1585319109.1083 },
  { country_code: 'IND', population: 1205624648, gdp: 1708450861364.17 },
  { country_code: 'IRN', population: 74462314, gdp: 422567967404.512 },
  { country_code: 'MDV', population: 325694, gdp: 2134104883.7014 },
  { country_code: 'NPL', population: 26846016, gdp: 16010389261.745 },
  { country_code: 'PAK', population: 173149306, gdp: 177406854514.885 },
  { country_code: 'LKA', population: 20758779, gdp: 49567521669.9098 },
  { country_code: 'BRN', population: 400569, gdp: 12369708858.9029 },
  { country_code: 'KHM', population: 14364931, gdp: 11242266333.9246 },
  { country_code: 'IDN', population: 240676485, gdp: 709190822690.739 },
  { country_code: 'LAO', population: 6395713, gdp: 7181441151.89789 },
  { country_code: 'MYS', population: 28275835, gdp: 247533525517.698 },
  { country_code: 'PHL', population: 93444322, gdp: 199589447424.074 },
  { country_code: 'SGP', population: 5078969, gdp: 217200123752.449 },
  { country_code: 'THA', population: 66402316.00000001, gdp: 318907930075.712 },
  { country_code: 'TLS', population: 1079450, gdp: 934300000 },
  { country_code: 'VNM', population: 89047397, gdp: 115931749904.86 },
  { country_code: 'ARM', population: 2963496, gdp: 9260297329.12273 },
  { country_code: 'AZE', population: 9094718, gdp: 52905998878.7143 },
  { country_code: 'BHR', population: 1251513, gdp: 25713547868.8354 },
  { country_code: 'CYP', population: 1103685, gdp: 23132450331.1258 },
  { country_code: 'GEO', population: 4388674, gdp: 11638236642.8476 },
  { country_code: 'IRQ', population: 30962380, gdp: 142814704615.385 },
  { country_code: 'ISR', population: 7420368, gdp: 231674400561.648 },
  { country_code: 'JOR', population: 6454554, gdp: 26425379366.6132 },
  { country_code: 'KWT', population: 2991580, gdp: 119934674734.616 },
  { country_code: 'LBN', population: 4341092, gdp: 37124378109.4527 },
  { country_code: 'OMN', population: 2802768, gdp: 58813004375.2601 },
  { country_code: 'QAT', population: 1749713, gdp: 127332413912.719 },
  { country_code: 'SAU', population: 27258387, gdp: 526811466666.667 },
  { country_code: 'TUR', population: 72137546, gdp: 731144392556.339 },
  { country_code: 'ARE', population: 8441537, gdp: 287421818965.758 },
  { country_code: 'YEM', population: 22763008, gdp: 31883409718.7382 },
  { country_code: 'BLR', population: 9491070, gdp: 55220932613.958 },
  { country_code: 'BGR', population: 7389175, gdp: 47727325908.633 },
  { country_code: 'CZE', population: 10553701, gdp: 198475392670.157 },
  { country_code: 'HUN', population: 10014633, gdp: 127503279792.248 },
  { country_code: 'POL', population: 38198754, gdp: 469736810690.719 },
  { country_code: 'MDA', population: 3573024, gdp: 5811622393.98689 },
  { country_code: 'ROU', population: 21861476, gdp: 164792252745.524 },
  { country_code: 'RUS', population: 143617913, gdp: 1524916698233.31 },
  { country_code: 'SVK', population: 5433437, gdp: 87077443708.6093 },
  { country_code: 'UKR', population: 46050220, gdp: 136418622767.355 },
  { country_code: 'DNK', population: 5550959, gdp: 313176334519.573 },
  { country_code: 'EST', population: 1298533, gdp: 18909381436.8421 },
  { country_code: 'FIN', population: 5367693, gdp: 235163157894.737 },
  { country_code: 'ISL', population: 318042, gdp: 12564891657.7225 },
  { country_code: 'IRL', population: 4467561, gdp: 208022028244.737 },
  { country_code: 'LVA', population: 2090518.9999999998, gdp: 24009680459.9868 },
  { country_code: 'LTU', population: 3068457, gdp: 36306384146.1075 },
  { country_code: 'NOR', population: 4891251, gdp: 421236092715.232 },
  { country_code: 'SWE', population: 9382297, gdp: 462903051317.614 },
  { country_code: 'GBR', population: 62066350, gdp: 2285561538461.54 },
  { country_code: 'ALB', population: 3150143, gdp: 11858166294.8409 },
  { country_code: 'BIH', population: 3845929, gdp: 16775469777.6516 },
  { country_code: 'HRV', population: 4338027, gdp: 58873839434.9834 },
  { country_code: 'GRC', population: 11109999, gdp: 292304602315.789 },
  { country_code: 'ITA', population: 60508978, gdp: 2041954747600 },
  { country_code: 'MLT', population: 424738, gdp: 8163841059.60265 },
  { country_code: 'MNE', population: 620078, gdp: 4114780573.5 },
  { country_code: 'PRT', population: 10589792, gdp: 227446710526.316 },
  { country_code: 'SRB', population: 9647109, gdp: 36990001283.5323 },
  { country_code: 'SVN', population: 2054232, gdp: 46908328071.2701 },
  { country_code: 'ESP', population: 46182038, gdp: 1375815789473.68 },
  { country_code: 'MKD', population: 2102216, gdp: 9338665630.76177 },
  { country_code: 'AUT', population: 8401924, gdp: 375217439473.684 },
  { country_code: 'BEL', population: 10941288, gdp: 468078947368.421 },
  { country_code: 'FRA', population: 63230866, gdp: 2548315789473.68 },
  { country_code: 'DEU', population: 83017404, gdp: 3282894736842.11 },
  { country_code: 'LUX', population: 507885, gdp: 51713947368.4211 },
  { country_code: 'MCO', population: 36845, gdp: 5350993377.48344 },
  { country_code: 'NLD', population: 16615242.999999998, gdp: 772090789473.684 },
  { country_code: 'CHE', population: 7830534, gdp: 550638974461.538 },
  { country_code: 'ATG', population: 87233, gdp: 1161528615.92593 },
  { country_code: 'ABW', population: 101597, gdp: 2467703910.61453 },
  { country_code: 'BHS', population: 360498, gdp: 7888087000 },
  { country_code: 'BRB', population: 280396, gdp: 4433700000 },
  { country_code: 'CUB', population: 11281768, gdp: 64328220000 },
  { country_code: 'DMA', population: 71167, gdp: 471851098.518519 },
  { country_code: 'DOM', population: 10016797, gdp: 51748279416.0089 },
  { country_code: 'GRD', population: 104677, gdp: 783602099.124051 },
  { country_code: 'HTI', population: 9896400, gdp: 6634579143.36112 },
  { country_code: 'JAM', population: 2741485, gdp: 13202998397.8027 },
  { country_code: 'PRI', population: 3709671, gdp: 97147300000 },
  { country_code: 'KNA', population: 52352, gdp: 675553707.777778 },
  { country_code: 'LCA', population: 177397, gdp: 1208853571.11111 },
  { country_code: 'VCT', population: 109316, gdp: 674762008.518518 },
  { country_code: 'TTO', population: 1328095, gdp: 20667611846.2508 },
  { country_code: 'BLZ', population: 308595, gdp: 1397900000 },
  { country_code: 'CRI', population: 4669685, gdp: 36298327620.413 },
  { country_code: 'SLV', population: 6218195, gdp: 21418300000 },
  { country_code: 'GTM', population: 14341576, gdp: 41338161799.1082 },
  { country_code: 'HND', population: 7621204, gdp: 15729644901.1459 },
  { country_code: 'MEX', population: 117886404, gdp: 1047368841686.06 },
  { country_code: 'NIC', population: 5822209, gdp: 8586295846.08302 },
  { country_code: 'PAN', population: 3678128, gdp: 26589600000 },
  { country_code: 'ARG', population: 40374224, gdp: 368736062143.669 },
  { country_code: 'BOL', population: 10156601, gdp: 19649724655.5819 },
  { country_code: 'BRA', population: 195210154, gdp: 2143035333258.24 },
  { country_code: 'CHL', population: 17150760, gdp: 217556229881.153 },
  { country_code: 'COL', population: 46444798, gdp: 287000940839.272 },
  { country_code: 'ECU', population: 15001072, gdp: 67513698000 },
  { country_code: 'GUY', population: 786126, gdp: 2259288026.41972 },
  { country_code: 'PRY', population: 6459721, gdp: 20028375553.9077 },
  { country_code: 'PER', population: 29262830, gdp: 157609814184.397 },
  { country_code: 'SUR', population: 524960, gdp: 4368007284.81569 },
  { country_code: 'URY', population: 3371982, gdp: 38846222984.5698 },
  { country_code: 'VEN', population: 29043283, gdp: 393807511437.279 },
  { country_code: 'BMU', population: 64950.99999999999, gdp: 5744414000 },
  { country_code: 'CAN', population: 34126240, gdp: 1577040082217.76 },
  { country_code: 'USA', population: 312247116, gdp: 14958300000000 },
  { country_code: 'AUS', population: 22404488, gdp: 1141793593834.25 },
  { country_code: 'NZL', population: 4368136, gdp: 143246762589.928 },
  { country_code: 'FJI', population: 860559, gdp: 3225095136.31862 },
  { country_code: 'PNG', population: 6858945, gdp: 9480047958.80839 },
  { country_code: 'SLB', population: 526447, gdp: 678625481.686751 },
  { country_code: 'VUT', population: 236299, gdp: 700804045.16412 },
  { country_code: 'KIR', population: 97743, gdp: 150431113.557145 },
  { country_code: 'MHL', population: 52428, gdp: 163200000 },
  { country_code: 'FSM', population: 103619, gdp: 294117230.497109 },
  { country_code: 'PLW', population: 20470, gdp: 196543326.079735 },
  { country_code: 'WSM', population: 186029, gdp: 572160378.287853 },
  { country_code: 'TON', population: 104098, gdp: 369212477.46289 },
  { country_code: 'TUV', population: 9827, gdp: 31824701.2783331 }
]

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

render79(pop_data)

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

render80(pop_data)

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

render81(pop_data)

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

render82(pop_data)

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

render83(pop_data)

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

render84(pop_data)

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

render85(pop_data)

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

render86(pop_data)

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

render87(pop_data)

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
