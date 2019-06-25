var minYear = d3.min(birthData, d => d.year);
var maxYear = d3.max(birthData, d => d.year);
var maxBirths = d3.max(birthData, d => d.births);

var width = 600;
var height = 600;
var barWidth = 25;

var yScale = d3.scaleLinear()
    .domain([0, maxBirths])
    .range([height, 0]); // flip upside-down so 'y' means bottom left

function yScaleByBirth(d) {
    return yScale(d.births);
}
function yScaleByBirth_height(d) {
    return height - yScaleByBirth(d);
}

d3
    .select('input')
    .property('min', minYear)
    .property('max', maxYear)
    .property('value', minYear)

d3.select('input')
    .on('input', () => {
        var year = +d3.event.target.value;
        d3.selectAll('rect')
            .data(birthData.filter(d => d.year === year))
                .attr('height', yScaleByBirth_height)
                .attr('y', yScaleByBirth)
    });

d3
    .select('svg')
        .attr('width', width)
        .attr('height', height)
    .selectAll('rect')
    .data(birthData.filter(d => d.year === minYear))
    .enter()
    .append('rect')
        .attr('width', barWidth)
        .attr('height', yScaleByBirth_height)
        .attr('y', yScaleByBirth)
        .attr('x', (d, i) => i * (barWidth + 10))
