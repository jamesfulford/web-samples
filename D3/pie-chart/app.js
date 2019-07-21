var minYear = d3.min(birthData, d => d.year);
var maxYear = d3.max(birthData, d => d.year);
var width = 600;
var height = 600;

var continents = [];
birthData.forEach(d => {
    if (!continents.includes(d.continent)) {
        continents.push(d.continent);
    }
});

var colorScale = d3.scaleOrdinal()
    .domain(continents)
    .range(d3.schemeCategory10);

d3.select('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`)
        .classed('chart', true)


d3.select('input')
    .property('min', minYear)
    .property('max', maxYear)
    .property('value', minYear)
    .on('input', () => drawGraph(+d3.event.target.value))

var arcs;
var path;
var yearData;

function drawGraph (year) {
    yearData = birthData.filter(d => d.year === year);
    arcs = d3.pie().value(d => d.births)
        .sort((a, b) => {
            if (a.continent < b.continent) {
                return -1;
            } else if (a.continent > b.continent) {
                return 1;
            } else {
                return 0;
            }
        })
    (yearData);

    path = d3
      .arc()
      .outerRadius(width / 2 - 10)
      .innerRadius(width / 6);

    var update = d3.select(".chart")
      .selectAll(".arc")
      .data(arcs)

    update.exit().remove();

    update.enter()
      .append("path")
      .attr("d", path)
      .classed("arc", true)
      .attr("fill", d => colorScale(d.data.continent))
      .attr("stroke", "black");

}
drawGraph(minYear);
