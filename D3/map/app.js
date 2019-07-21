
const countryFormatter = row => ({
    country: row.country,
    countryCode: row.countryCode,
    population: +row.population,
    medianAge: +row.medianAge,
    fertilityRate: +row.fertilityRate,
    populationDensity: +row.population / +row.landArea,
});

const colorRanges = {
  population: ["white", "purple"],
  populationDensity: ["white", "red"],
  medianAge: ["white", "black"],
  fertilityRate: ["black", "orange"]
};

d3.queue()
    .defer(d3.json, 'https://unpkg.com/world-atlas@1.1.4/world/50m.json')
    .defer(d3.csv, './country_data.csv')
    .await((error, topology, rawCountries) => {
        if (error) {
            throw error;
        }
        const countries = rawCountries.map(countryFormatter);

        const geoData = topojson.feature(
          topology,
          topology.objects.countries
        ).features;

        const geoCountries = countries.map(country => {
            return geoData
                .filter(g => g.id === country.countryCode)
                .map(g => ({
                    ...g,
                    properties: country,
                }));
        })
        .reduce((a, x) => [...a, ...x]);

        const width = 960;
        const height = 600;

        const projection = d3.geoMercator()
            .scale(125)
            .translate([width / 2, height / 1.4]);
        const path = d3.geoPath()
            .projection(projection);

        d3.select("svg")
          .attr("width", width)
          .attr("height", height)
          .selectAll(".country")
          .data(geoCountries)
          .enter()
          .append("path")
          .classed("country", true)
          .attr("d", path);

        const selector = d3.select('select');

        selector.on("change", d => setColor(d3.event.target.value));

        setColor(selector.property('value'));

        function setColor(val) {
            const scale = d3
              .scaleLinear()
              .domain([0, d3.max(geoCountries, d => d.properties[val])])
              .range(colorRanges[val]);
            d3.selectAll(".country")
              .transition()
              .duration(750)
              .ease(d3.easeBackIn)
              .attr("fill", d => {
                  const data = d.properties[val];
                  return data ? scale(data) : '#ccc';
              });
        }

    })
