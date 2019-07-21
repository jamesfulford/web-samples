const form = d3.select('form');

const input = form.select('input');
const reset = form.select('#reset');

const count = d3.select('#count');
const phrase = d3.select('#phrase');

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
        .selectAll('.letter')
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
        .append('div')
            .classed('new letter', true)
    // Handle remaining selection (new and persisted items)
        .merge(update)
            .text(d => d.letter)
            .style('width', '20px')
            .style('line-height', '20px')
            .style('margin-right', '5px')
            .style('height', d => (d.frequency * 20) + 10 + "px")

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
