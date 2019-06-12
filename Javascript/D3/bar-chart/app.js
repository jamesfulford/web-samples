var minYear = birthData[0].year;
var maxYear = birthData[birthData.length - 1].year;

var width = 600;
var height = 600;
var barWidth = 25;

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
                .attr('height', d => d.births / 2.5e6 * height)
                .attr('y', d => height - (d.births / 2.5e6 * height))
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
        .attr('height', d => (d.births / 2.5e6) * height)
        .attr('y', d => height - (d.births / 2.5e6 * height))
        .attr('x', (d, i) => i * (barWidth + 10))
