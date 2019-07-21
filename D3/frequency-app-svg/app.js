const form = d3.select('form');

const input = form.select('input');
const reset = form.select('#reset');

const count = d3.select('#count');
const phrase = d3.select('#phrase');

const height = 200;
const width = 600;

form
    .on('submit', () => {
        d3.event.preventDefault();
        setWord(input.property('value'));
        input.property('value', '');
    });

function setWord(w) {
    // Associate data
    const update = d3
        .select('#letters')
            .attr('width', width)
            .attr('height', height)
        .selectAll('rect')
        .data(getFreqArray(w), d => d.letter);

    // Handle updated selection (persisted items)
    update
        .classed('new', false)
    // Handle exit selection (gone items)
        .exit()
        .remove();

    // Handle enter selection (new items)
    update
        .enter()
        .append('rect')
            .classed('new letter', true)
    // Handle remaining selection (new and persisted items)
        .merge(update)
            .attr('x', (d, i) => i * (25 + 2))
            .attr('width', 25)
            .attr('y', d => height - (d.frequency * 20))
            .attr('height', d => d.frequency * 20)

    phrase
        .text('Analysis of: ' + w);
    count
        .text(`(New characters: ${update.enter().nodes().length})`)
}

function getFreqArray(w) {
    const freq = new Map();
    w.split("").forEach(l => freq.set(l, freq.has(l) ? freq.get(l) + 1 : 1));
    return Array.from(freq.entries())
        .sort()
        .map(([letter, frequency]) => ({ letter, frequency }));
}

reset
    .on('click', () => {
        input.property('value', '');
        d3
            .selectAll('.letter')
            .remove();
        count.text('');
        phrase.text('');
    });
