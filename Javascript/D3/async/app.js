// write your code here!
d3.queue()
    .defer(d3.json, "./countries.json")
    .defer(d3.csv, "./simplemaps-worldcities-basic.csv", row => {
        if (+row.pop > 10000) {
            return;
        }
        return {
            cityName: row.city,
            countryCode: row.iso2,
            population: +row.pop,
        };
    })
    .await((error, countries, cities) => {
        if (error) {
            console.error(error);
            return
        }

        const data = countries.geonames.map(country => ({
            ...country,
            cities: cities.filter(city => city.countryCode === country.countryCode),
        }));

        var countrySelection = d3.select('body')
            .selectAll('div')
            .data(data)
            .enter()
                .append('div')

        countrySelection
            .append('h3')
                .text(d => d.countryName);

        countrySelection
            .append('ul')
            .html(d => d.cities.map(city => {
                const percentage = 100 * city.population / d.population;
                return `<li>${city.cityName}: ${percentage.toFixed(2)}%</li>`;
            }).join(''));
    });
